import { useState, useEffect } from 'react';
import { PostForm } from './components/PostForm';
import { PostItem} from './components/PostItem';
import { Post } from './types/Post';
import{ api } from './api';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  }

  /*const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  })

  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((e) => {
        setLoading(false);
        setMovies([]);
        console.error(e);
      })
  }*;

  /*const loadMovies = async () => {
    try {
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setLoading(false);
      setMovies(json);   
    }catch (e) {
      setLoading(false)
    }
     
  }*/

  const handelAddPost = async (title: string, body: string) => {
    let json = await api.addNewPosts(title, body, 1);
    if(json.id){
      alert("Post adiconado com sucesso!")
    } else {
      alert("Ocorreu algum erro!")
    }     
  }
  
  return (
    <div className='p-5'>      
      {loading && 
        <div>Carregando...</div>
      }

      <PostForm onAdd={handelAddPost}/>

      {!loading && posts.length > 0 &&
        <>
          <div>Total de Posts: {posts.length}</div>
          <div>
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>       
      }
      {!loading && posts.length === 0 &&
        <div>Tente mais tarde novamente.</div>
      }
  </div>
  );
}

export default App
