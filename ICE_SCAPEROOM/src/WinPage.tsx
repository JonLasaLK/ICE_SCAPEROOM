import { useNavigate } from "react-router";

export function WinPage(){
    const navigate = useNavigate();

    return  <article>
                <h1>YOU WON!!</h1>
                <h2>Good Job!</h2>
                <button onClick={()=>{navigate('/')}}>Go to menu</button>
            </article>
}