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

interface PlayerName {
    name: string;
}

function PlayerInfoWidget({name} : PlayerName): React.ReactElement {
    const [playerData, setPlayerData] = useState<PlayerData | null>(null);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        setLoading(true)
        fetch('http://rs3comparator-backend-env.eba-icixngap.eu-west-1.elasticbeanstalk.com/rs3player?user=' + name)
            .then(response => response.json())
            .then(json => {
                if (json.status !== "error") {
                    setPlayerData(json);
                }
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, [name]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!playerData) {
        return <div className="errorDiv">Error loading player data</div>;
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
