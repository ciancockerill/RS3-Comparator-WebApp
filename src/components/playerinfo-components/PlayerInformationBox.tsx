import React from "react";
import "../../styling/playerinfo-styling/PlayerInformationBox.css";

interface PlayerInformation {
    completedquests: number;
    name: string;
    totalskill: number;
    totalxp: number;
}

function PlayerInformationBox({name, totalskill, totalxp, completedquests}: PlayerInformation): React.ReactElement {
    return (
        <div className="PlayerInformationBox">
            <p className="name">{name}</p>
            <p className="total-skill">Total Skill: {totalskill}</p>
            <p className="total-xp">Total XP: {totalxp}</p>
            <p className="completed-quests">Completed Quests: {completedquests}</p>
        </div>
    );
}

export default PlayerInformationBox;