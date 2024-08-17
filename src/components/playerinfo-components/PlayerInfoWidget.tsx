import { useEffect, useState } from "react";
import "../../styling/playerinfo-styling/PlayerInfoWidget.css";
import PlayerInformationBox from "./PlayerInformationBox.tsx";
import PlayerSkillBox from "./PlayerSkillBox.tsx";

// Define the interface for the player data
interface PlayerData {
    completedquests: number;
    name: string;
    totalskill: number;
    totalxp: number;
    skills: {
        [key: string]: {
            rank: number;
            level: number;
            xp: number;
        }
    };
}

function PlayerInfoWidget() {
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetch('http://rs3comparator-backend-env.eba-icixngap.eu-west-1.elasticbeanstalk.com/rs3player?user=possyeggs')
            .then(response => response.json())
            .then(json => {
                setPlayerData(json);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!playerData) {
        return <div>Error loading player data</div>;
    }

    return (
        <>
            <PlayerInformationBox
                name={playerData.name}
                completedquests={playerData.completedquests}
                totalskill={playerData.totalskill}
                totalxp={playerData.totalxp}
            />

            <PlayerSkillBox skills={playerData.skills}/>
        </>
    );
}

export default PlayerInfoWidget;
