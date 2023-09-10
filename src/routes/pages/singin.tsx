import { useState } from "react";
import { useAuth } from "../../features/auth/AuthHook";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../../components/google-button";

function Singin() {
    const {singin} = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();
    const singupClick = async ()=>{
        setIsLoading(true);
        const res2 = await singin({email, password});
        if (!("error" in res2))
            navigate("/");
            else {
                setError(res2.error.message as string)
                setIsLoading(false);
            }
    }
    if (isLoading)
        return <h1>Loading...</h1>
    return (
        <div>
            <h1>Sing in</h1>
            {error}
            <input type="email" autoComplete="off" autoCorrect="off" tabIndex={1} onChange={(e)=>{
                setEmail(e.target.value)
            }} value={email}/>
            <input type="password" autoComplete="off" autoCorrect="off" tabIndex={2} onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password}/>
            <GoogleButton setIsLoading={setIsLoading} setError={setError}></GoogleButton>
            <button type="submit" tabIndex={3} onClick={singupClick}>singin</button>
        </div>
    )
}
export default Singin