import "../../styling/playerinfo-styling/PlayerInfoWidget.css";
import PlayerInformationBox from "./PlayerInformationBox.tsx";
import PlayerSkillBox from "./PlayerSkillBox.tsx";
import {SkillComparisonData} from "./PlayerComparisonHandler.tsx";

interface PlayerData {
    completedquests: number;
    name: string;
    totalskill: number;
    totalxp: number;
    skills: {
        [key: string]: {
            level: number;
            xp: number;
        };
    };
}

interface PlayerInfoWidgetProps {
    playerData: PlayerData | null;
    loading: boolean;
    error: boolean;
    comparisonData?: SkillComparisonData
}

function PlayerInfoWidget({playerData, loading, error, comparisonData }: PlayerInfoWidgetProps): React.ReactElement {
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (error || playerData == null) {
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

            <PlayerSkillBox
                skills={playerData.skills}
                comparisonData={comparisonData}
            />
        </div>
    );
}

export default PlayerInfoWidget;
