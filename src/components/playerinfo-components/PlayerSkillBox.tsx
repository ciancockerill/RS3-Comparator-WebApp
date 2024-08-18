import "../../styling/playerinfo-styling/PlayerSkillBox.css";

interface SkillData {
    skills: {
        [key: string]: {
            rank: number;
            level: number;
            xp: number;
        }
    };
}

function PlayerSkillBox({skills} : SkillData) {

    return (
        <div className="skillBox">
            {Object.entries(skills).map(([skillName, skillData]) => (
                <div key={skillName} className="skillItem">
                    <img src={"https://runescape.wiki/images/" + skillName + ".png"}
                         alt={skillName}
                         className="skillImage"
                    />
                    <p className="skillInfo">{skillData.level}</p>
                </div>
            ))}
        </div>
    );
}

export default PlayerSkillBox;