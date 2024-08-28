import TitleBar from "./TitleBar.tsx";
import "../styling/PlayerComparison.css";
import {SetStateAction, useEffect, useState} from "react";
import PlayerComparisonHandler from "./playerinfo-components/PlayerComparisonHandler.tsx";
import {useParams} from "react-router-dom";

function PlayerSearch() {
    // State variables for Player 1
    const [playerName1, setPlayerName1] = useState("");
    const [inputFieldText1, setInputFieldText1] = useState("");

    // State variables for Player 2
    const [playerName2, setPlayerName2] = useState("");
    const [inputFieldText2, setInputFieldText2] = useState("");

    // Handlers for Player 1
    const handleButtonSubmit1 = () => {
        setPlayerName1(inputFieldText1);
    };

    const handleInputChange1 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputFieldText1(event.target.value);
    };

    const handleEnterKey1 = (event: { key: string; }) => {
        if (event.key === "Enter") {
            handleButtonSubmit1();
        }
    };

    // Handlers for Player 2
    const handleButtonSubmit2 = () => {
        setPlayerName2(inputFieldText2);
    };

    const handleInputChange2 = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputFieldText2(event.target.value);
    };

    const handleEnterKey2 = (event: { key: string; }) => {
        if (event.key === "Enter") {
            handleButtonSubmit2();
        }
    };

    const urlParam = useParams()
    const urlPlayerName1 = urlParam['playerNameOne'];
    const urlPlayerName2 = urlParam['playerNameTwo'];

    useEffect(() => {
        if (urlPlayerName1) {
            setPlayerName1(urlPlayerName1)
        }
        if (urlPlayerName2) {
            setPlayerName2(urlPlayerName2)
        }
    }, [urlPlayerName1, urlPlayerName2]);

    return (
        <>
            <TitleBar title={"Player Comparison"} />

            <div className="searchBoxContainer">
                <div className="input-group mb-3 search1">
                    <input type="text" className="form-control"
                           placeholder="Runescape 3 Username"
                           aria-label="Runescape 3 Username"
                           aria-describedby="button-addon1"
                           onChange={handleInputChange1}
                           onKeyDown={handleEnterKey1}
                    />
                    <button className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon1"
                            onClick={handleButtonSubmit1}>
                        Search Player 1
                    </button>
                </div>

                <div className="input-group mb-3 search2">
                    <input type="text" className="form-control"
                           placeholder="Runescape 3 Username"
                           aria-label="Runescape 3 Username"
                           aria-describedby="button-addon2"
                           onChange={handleInputChange2}
                           onKeyDown={handleEnterKey2}
                    />
                    <button className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleButtonSubmit2}>
                        Search Player 2
                    </button>
                </div>
            </div>

            {(playerName1 || playerName2) &&
                <PlayerComparisonHandler
                    playerName1={playerName1}
                    playerName2={playerName2}
                />
            }
        </>
    );
}

export default PlayerSearch;
