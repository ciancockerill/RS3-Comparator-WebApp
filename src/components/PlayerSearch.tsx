import TitleBar from "./TitleBar.tsx";
import PlayerInfoWidget from "./playerinfo-components/PlayerInfoWidget.tsx";
import "../styling/PlayerComparison.css"
import {useState} from "react";

function PlayerSearch() {
    const [playerName, setPlayerName] = useState("");
    const [inputFieldText, setInputFieldText] = useState("");

    const handleButtonSubmit = (event) => {
        setPlayerName(inputFieldText);
    }

    const handleInputChange = (event) => {
        setInputFieldText(event.target.value);
    }

    return (
        <>
            <TitleBar title={"Player Search"}/>

            <div className="input-group mb-3">
                <input type="text" className="form-control"
                       placeholder="Runescape 3 Username"
                       aria-label="Runescape 3 Username"
                       aria-describedby="button-addon2"
                       onChange={handleInputChange}
                />
                <button className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={handleButtonSubmit}>
                    Search
                </button>
            </div>

            {playerName && <PlayerInfoWidget name={playerName}/>}
        </>
    );
}

export default PlayerSearch;
