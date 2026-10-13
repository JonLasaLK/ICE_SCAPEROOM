import { useNavigate } from "react-router";

export function LosePage(){
    const navigate = useNavigate();

    return  <article>
                <h1>YOU LOST!!</h1>
                <h2>Good luck next time!</h2>
                <button onClick={()=>{navigate('/')}}>Go to menu</button>
            </article>
}