import usePlayerData, {PlayerData} from "../../hooks/usePlayerData.tsx";
import PlayerInfoWidget from "./PlayerInfoWidget.tsx";
import {useEffect, useState} from "react";

interface PlayerComparisonHandlerProps {
    playerName1: string;
    playerName2: string;
}

export enum ComparisonState {
    GREATER_THAN = 1,
    EQUAL = 0,
    LESSER_THAN = -1
}

export interface SkillComparisonData {
    comparisonData: {
        [key: string]: {
            comparisonState: ComparisonState;
        }
    }
}

function compareSkills(skills1: PlayerData["skills"], skills2: PlayerData["skills"]) {
    const skill1CompareData: SkillComparisonData = { comparisonData: {} };
    const skill2CompareData: SkillComparisonData = { comparisonData: {} };

    Object.entries(skills1).forEach(([skillName1, skillData1]) => {
        const skillData2 = skills2[skillName1];

        const skill1Level = skillData1["level"];
        const skill2Level = skillData2["level"];

        if (skill1Level > skill2Level) {
            skill1CompareData.comparisonData[skillName1] = { comparisonState: ComparisonState.GREATER_THAN };
            skill2CompareData.comparisonData[skillName1] = { comparisonState: ComparisonState.LESSER_THAN };
        } else if (skill1Level < skill2Level) {
            skill1CompareData.comparisonData[skillName1] = { comparisonState: ComparisonState.LESSER_THAN };
            skill2CompareData.comparisonData[skillName1] = { comparisonState: ComparisonState.GREATER_THAN };
        } else {
            skill1CompareData.comparisonData[skillName1] = { comparisonState: ComparisonState.EQUAL };
            skill2CompareData.comparisonData[skillName1] = { comparisonState: ComparisonState.EQUAL };
        }
    });

    return [skill1CompareData, skill2CompareData];
}


function PlayerComparisonHandler({ playerName1, playerName2 }: PlayerComparisonHandlerProps) {
    const [player1ComparisonData, setPlayer1ComparisonData] = useState<SkillComparisonData>();
    const [player2ComparisonData, setPlayer2ComparisonData] = useState<SkillComparisonData>();


    const {
        playerData: playerData1,
        loading: loading1,
        error: error1
    } = usePlayerData(playerName1)

    const {
        playerData: playerData2,
        loading: loading2,
        error: error2
    } = usePlayerData(playerName2)

    useEffect(() => {
        if (playerData1 && playerData2) {
            const comparisonData = compareSkills(playerData1["skills"], playerData2["skills"]);

            setPlayer1ComparisonData(comparisonData[0])
            setPlayer2ComparisonData(comparisonData[1])
        }
    }, [playerData1, playerData2])

    return (
        <div className="playerWidgetContainer">
            <div className="left">
                {playerName1 && <PlayerInfoWidget
                    playerData={playerData1}
                    loading={loading1}
                    error={error1}
                    comparisonData={player1ComparisonData}
                />}
            </div>

            <div className="right">
                {playerName2 && <PlayerInfoWidget
                    playerData={playerData2}
                    loading={loading2}
                    error={error2}
                    comparisonData={player2ComparisonData}
                />}
            </div>
        </div>
    )
}

export default PlayerComparisonHandler;