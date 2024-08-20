import {useEffect, useState} from "react";

interface PlayerData {
    completedquests: number;
    name: string;
    totalskill: number;
    totalxp: number;
    skills: {
        [key: string]: {
            level: number;
            xp: number;
        }
    };
}

function usePlayerData(name: string) {
    const [playerData, setPlayerData] = useState<PlayerData | null>(
        null
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        fetch('http://rs3comparator-backend-env.eba-icixngap.eu-west-1.elasticbeanstalk.com/rs3player?user=' + name)
            .then(response => response.json())
            .then(json => {
                if (json.status !== "error") {
                    setPlayerData(json);
                } else {
                    setPlayerData(null)
                    setError(true)
                }
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error(error);
                setError(true)
                setLoading(false); // Set loading to false even if there's an error
            });
    }, [name]);

    return {playerData, loading, error};

}

export default usePlayerData;