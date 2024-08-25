import TitleBar from "./TitleBar.tsx";
import PlayerInfoWidget from "./playerinfo-components/PlayerInfoWidget.tsx";
import "../styling/PlayerComparison.css"
import {SetStateAction, useState} from "react";
import usePlayerData from "../hooks/usePlayerData.tsx";

function PlayerSearch() {
    const [playerName, setPlayerName] = useState("");
    const [inputFieldText, setInputFieldText] = useState("");

    const handleButtonSubmit = () => {
        setPlayerName(inputFieldText);
    }

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputFieldText(event.target.value);
    }

    const handleEnterKey = (event: { key: string; }) => {
        if (event.key === "Enter") {
            handleButtonSubmit()
        }
    }

    const {playerData : playerData, loading: loading, error : error} = usePlayerData(playerName)

    return (
        <>
            <TitleBar title={"Player Search"}/>

            <div className="input-group mb-3">
                <input type="text" className="form-control"
                       placeholder="Runescape 3 Username"
                       aria-label="Runescape 3 Username"
                       aria-describedby="button-addon2"
                       onChange={handleInputChange}
                       onKeyDown={handleEnterKey}
                />
                <button className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                        onClick={handleButtonSubmit}>
                    Search
                </button>
            </div>

            {playerName && <PlayerInfoWidget
                playerData={playerData}
                loading={loading}
                error={error}
            />}
        </>
    );
}

export default PlayerSearch;
