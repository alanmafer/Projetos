import React, {useState} from "react";
import { PageArea} from './styled';
import useApi from '../../helpers/olxApi';
import { PageContainer, PageTitle, ErrorMessage } from "../../components/MainComponents";
import { doLogin } from "../../helpers/AuthHandler";

const Page = () => {
    const api = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberRassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberRassword);
            window.location.href = '/';
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail:</div>
                        <div className="area--input">
                            <input
                                type="email"
                                value={email} 
                                onChange={e=>setEmail(e.target.value)} 
                                disabled={disabled}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha:</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                value={password} 
                                onChange={e=>setPassword(e.target.value)} 
                                disabled={disabled}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha:</div>
                        <div className="">
                            <input 
                                type="checkbox" 
                                checked={rememberRassword} 
                                onChange={()=>setRememberPassword(!rememberRassword)} 
                                disabled={disabled}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Entrar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;