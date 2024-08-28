import TitleBar from "./TitleBar.tsx";
import PlayerInfoWidget from "./playerinfo-components/PlayerInfoWidget.tsx";
import "../styling/PlayerComparison.css"
import {SetStateAction, useEffect, useState} from "react";
import usePlayerData from "../hooks/usePlayerData.tsx";
import { useParams } from 'react-router-dom';

function PlayerSearch() {
    const [playerName, setPlayerName] = useState("");
    const [inputFieldText, setInputFieldText] = useState("");
    const searchValue = useParams()['playerName'];

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

    useEffect(() => {
        if (searchValue) {
            setPlayerName(searchValue)
        }
    }, [searchValue]);

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
