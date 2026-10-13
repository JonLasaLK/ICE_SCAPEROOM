import { useNavigate } from "react-router";

export function LandingPage(){
    const navigate = useNavigate();

    return <>
        <h1>ICE SCAPEROOM</h1>
        <section>
            <button onClick={()=>{navigate("/GameModeSelectorPage")}}>Play</button>
        </section>
        </>
}           