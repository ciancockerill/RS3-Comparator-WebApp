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
            <p className="total-skill">
                <span className="label">Total Skill</span>
                <span>{" "}{totalskill}</span>
            </p>
            <p className="total-xp">
                <span className="label">Total XP</span>
                <span>{" "}{totalxp}</span>
            </p>
            <p className="completed-quests">
                <span className="label">Completed Quests</span>
                <span>{" "}{completedquests}</span>
            </p>
        </div>
    );
}

export default PlayerInformationBox;