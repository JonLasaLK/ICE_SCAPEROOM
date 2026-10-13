import { useNavigate } from "react-router";

export interface PlayerAmountProps {
    playerAmount: number;
    onPlayerAmountChange: (state: number) => void;
}

export function GameModeSelectorPage({onPlayerAmountChange }: PlayerAmountProps){
    const navigate = useNavigate();

    return<>
        <article>
            <h2>Select amount of players</h2>
            <button className="player_selector_bt" onClick={()=>{onPlayerAmountChange(1); navigate("/InstructionsPage")}}>1 player</button>
            <button className="player_selector_bt" onClick={()=>{onPlayerAmountChange(2); navigate("/InstructionsPage")}}>2 players</button>
            <button className="player_selector_bt" onClick={()=>{onPlayerAmountChange(3); navigate("/InstructionsPage")}}>3 players</button>
            <button className="player_selector_bt" onClick={()=>{onPlayerAmountChange(4); navigate("/InstructionsPage")}}>4 players</button>
            <button className="player_selector_bt" onClick={()=>{onPlayerAmountChange(5); navigate("/InstructionsPage")}}>5 players</button>
        </article>
        </>
}