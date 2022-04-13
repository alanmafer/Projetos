import { userInfo } from "os";
import { useContext } from "react"
import { addSyntheticLeadingComment } from "typescript";
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Página Privada</h2>
            Olá {auth.user?.name}

        </div>
    )
}