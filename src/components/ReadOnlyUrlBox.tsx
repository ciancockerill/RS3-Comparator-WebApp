import React from "react";
import "../styling/ReadOnlyURLBox.css"

interface UrlBoxProps {
    playerNameOne: string
    playerNameTwo?: string
}

function ReadOnlyUrlBox({playerNameOne, playerNameTwo }: UrlBoxProps): React.JSX.Element {
    const handleCopyButtonPress = () => {
        const inputElement = document.getElementById("floatingPlaintextInput") as HTMLInputElement;
        if (inputElement) {
            navigator.clipboard.writeText(inputElement.value)
        }
    };

    const getURL = () => {
        const hostname = window.location.hostname
        const pathname = window.location.pathname.split('/')[1] + "/"
        const port = window.location.port

        const baseURL = port == "" ?
            hostname + "/" + pathname :
            hostname + ":" + port + "/" + pathname;

        if (playerNameOne && playerNameTwo) {
            return baseURL + playerNameOne + "/" + playerNameTwo
        }
        return baseURL + playerNameOne
    }

    return (
        <>
            <div className="form-floating mb-3">
                <input type="text" readOnly className="form-control"
                       id="floatingPlaintextInput"
                       placeholder="name@example.com"
                       value={getURL()}
                />
                <label htmlFor="floatingPlaintextInput">Link To This Search</label>
                <button className="btn btn-outline-secondary"
                        type="button"
                        onClick={handleCopyButtonPress}>
                    Copy</button>
            </div>
        </>
    )
}

export default ReadOnlyUrlBox