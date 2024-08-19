import "../../styling/playerinfo-styling/PlayerSkillBox.css";
import {useState} from "react";

interface SkillData {
    skills: {
        [key: string]: {
            level: number;
            xp: number;
        }
    };
}

function PlayerSkillBox({skills} : SkillData) {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const handleMouseEnter = (skillName: string) => {
        setHoveredSkill(skillName);
    }

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    }

    return (
        <div className="skillBox">
            {Object.entries(skills).map(([skillName, skillData]) => (
                <div key={skillName}
                     className="skillItem"
                     onMouseEnter={() => handleMouseEnter(skillName)}
                     onMouseLeave={handleMouseLeave}
                >
                    <img src={"https://runescape.wiki/images/" + skillName + ".png"}
                         alt={skillName}
                         className="skillImage"
                    />
                    <p className="skillInfo">{skillData.level}</p>

                    {hoveredSkill === skillName && (
                        <div className="hoverInfo">
                            <img src={"https://runescape.wiki/images/" + skillName + ".png"}
                                 alt={skillName}
                                 className="skillImageHover"
                            />
                            <p className="Pxp">XP</p>
                            <p className="xpValue"> {skillData.xp}</p>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
}

export default PlayerSkillBox;