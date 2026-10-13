import { useNavigate } from "react-router";

export function InstructionsPage(){
    const navigate = useNavigate();

    return<>
        <article>
            <h1>INSTRUCTIONS</h1>
            <p>Select with the space bar</p>
            <p>Move with W A S D</p>
            <p>you can interact with the mouse button</p>
            <button onClick={()=>{navigate("/GamePage")}}>next</button>
        </article>
        </>
}