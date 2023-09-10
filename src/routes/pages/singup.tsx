import { useState } from "react";
import { useAuth } from "../../features/auth/AuthHook";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../../components/google-button";

function Singup() {
    const {singup, updateProfile} = useAuth();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const navigate = useNavigate();

    const singupClick = async ()=>{
        setIsLoading(true);
        const res2 = await singup({email, password});
        
        if (!("error" in res2)){
            const res3 = await updateProfile({user: res2.data, updateData: {displayName}});
            navigate("/");
        }
        else {
            setError(res2.error.message as string)
            setIsLoading(false);
        }
    }
    if (isLoading)
        return <h1>Loading...</h1>
    return (
        <div>
            <h1>Sing Up</h1>
            {error}
            <input type="email" autoComplete="off" autoCorrect="off" tabIndex={1} onChange={(e)=>{
                setEmail(e.target.value)
            }} value={email}/>
            <input type="password" autoComplete="off" autoCorrect="off" tabIndex={2} onChange={(e)=>{
                setPassword(e.target.value)
            }} value={password}/>
            <input type="text" autoComplete="off" autoCorrect="off" tabIndex={3} onChange={(e)=>{
                setDisplayName(e.target.value)
            }} value={displayName}/>
            <GoogleButton setIsLoading={setIsLoading} setError={setError}></GoogleButton>
            <button type="submit" tabIndex={4} onClick={singupClick}>singup</button>
        </div>
    )
}
export default Singup