import {useEffect, useState} from "react";

export interface PlayerData {
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
        if (name == "") {
            return;
        }

        setLoading(true);
        setError(false);

        fetch('https://api.rs3comparator.com/rs3player?user=' + name)
            .then(response => response.json())
            .then(json => {
                if (json.status !== "error") {
                    setPlayerData(json);
                } else {
                    setPlayerData(null)
                    setError(true)
                }
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Set loading to false even if there's an error
                setError(true)
            });
    }, [name]);

    return {playerData, loading, error};

}

export default usePlayerData;