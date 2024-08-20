import "../../styling/playerinfo-styling/PlayerInfoWidget.css";
import PlayerInformationBox from "./PlayerInformationBox.tsx";
import PlayerSkillBox from "./PlayerSkillBox.tsx";
import usePlayerData from "../../hooks/usePlayerData.tsx";

interface PlayerName {
    name: string;
}

function PlayerInfoWidget({name} : PlayerName): React.ReactElement {

    const { playerData, loading, error } = usePlayerData(name);

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error || playerData === null) {
        return <div className="errorDiv">
            Error loading player data
        </div>;
    }

    return (
        <div className="playerInformationBoxContainer">
            <PlayerInformationBox
                name={playerData.name}
                completedquests={playerData.completedquests}
                totalskill={playerData.totalskill}
                totalxp={playerData.totalxp}
            />

            <PlayerSkillBox skills={playerData.skills}/>
        </div>
    );
}

export default PlayerInfoWidget;
