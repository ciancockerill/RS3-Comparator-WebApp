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
        <div>
            <h3>Skills:</h3>
    {Object.entries(playerData.skills).map(([skillName, skillData]) => (
        <div key={skillName}>
            <p>{skillName} - Level: {skillData.level}, XP: {skillData.xp}</p>
    </div>
    ))}
    </div>
    );
}

export default PlayerSkillBox;