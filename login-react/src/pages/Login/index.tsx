import { ChangeEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        if(email && password ) {
            const isLogged = await auth.signin(email, password);
            if(isLogged) {
                navigate('/');
            } else {
                alert ("Não deu certo.");
            }
        }
    }

    return (
        <div>
            <h2>Página Fechada</h2>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={handlePasswordInput} placeholder="Password"/>
            <button onClick={handleLogin}>Entrar</button>
        </div>
    )
}