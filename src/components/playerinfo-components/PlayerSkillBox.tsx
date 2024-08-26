import "../../styling/playerinfo-styling/PlayerSkillBox.css";
import {useState} from "react";
import {PlayerData} from "../../hooks/usePlayerData.tsx";
import {SkillComparisonData} from "./PlayerComparisonHandler.tsx";

interface SkillBoxProps {
    skills: PlayerData["skills"]
    comparisonData?: SkillComparisonData
}

function compareToString(num: number): string {
    switch (num) {
        case 1:
            return "greater"
        case 0:
            return "equal"
        case -1:
            return "lesser"
        default:
            return ""
    }
}

function PlayerSkillBox({skills, comparisonData} : SkillBoxProps) {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const handleMouseEnter = (skillName: string) => {
        setHoveredSkill(skillName);
    }

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    }

    return (
        <div className="skillBox">
            {Object.entries(skills).map(([skillName, skillData]) => {
                let comparisonString = ""

                if (comparisonData) {
                    const comparison = comparisonData?.comparisonData[skillName].comparisonState
                    comparisonString = compareToString(comparison)
                }

                return (
                    <div key={skillName}
                         className={`skillItem ${comparisonString}`}
                         onMouseEnter={() => handleMouseEnter(skillName)}
                         onMouseLeave={handleMouseLeave}
                    >
                        <img src={"https://runescape.wiki/images/" + skillName + ".png"}
                             alt={skillName}
                             className={"skillImage"}
                        />
                        <p className={"skillInfo"}  >{skillData.level}</p>

                        {hoveredSkill === skillName && (
                            <div className="hoverInfo">
                                <img src={"https://runescape.wiki/images/" + skillName + ".png"}
                                     alt={skillName}
                                     className="skillImageHover"
                                />
                                <p className="Pxp" >XP</p>
                                <p className="xpValue"> {skillData.xp}</p>
                            </div>
                        )}
                    </div>
                )})}
        </div>
    );
}

export default PlayerSkillBox;