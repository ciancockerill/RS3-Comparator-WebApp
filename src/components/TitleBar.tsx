import React from "react";
import "../styling/TitleBar.css"

interface Props {
    title: string;
}

function TitleBar({title}: Props): React.ReactElement {
    return <h1 className="title">{title}</h1>
}

export default TitleBar;