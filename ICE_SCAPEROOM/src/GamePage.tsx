import React from "react";
import { useNavigate } from "react-router";

export type PlayerState = "Playing" | "WIN" | "LOSE";

interface PlayerProps {
    playerAmount: number;
    playerState: PlayerState;
    onPlayerStateChange: (state: PlayerState) => void;
}

export function GamePage({playerAmount, playerState, onPlayerStateChange }: PlayerProps) {
    const navigate = useNavigate();
    const [gameState, setGameState] = React.useState(0);
    

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const nextGameState = gameState + 1;
        onPlayerStateChange("Playing");
        setGameState(nextGameState);

        if (randomNumber === 10) {
            onPlayerStateChange("WIN");
        }else if (randomNumber === 1){
            onPlayerStateChange("LOSE");
        }

        if (playerState === "WIN") {
            navigate("/WinPage");
            onPlayerStateChange("Playing");
        } else if (playerState === "LOSE") {
            navigate("/LosePage");
            onPlayerStateChange("Playing");
        }
    }

    return <article>
        {Array.from({ length: playerAmount }, (_, index) => (
            <section key={index}>
                <h1>Challenge: {index}</h1>
                <h2>{playerState}</h2>
                <button onClick={handleClick}>next</button>
            </section>
        ))} 
    </article>
}