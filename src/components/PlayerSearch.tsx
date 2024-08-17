import TitleBar from "./TitleBar.tsx";
import PlayerInfoWidget from "./playerinfo-components/PlayerInfoWidget.tsx";
import "../styling/PlayerComparison.css"

function PlayerSearch() {
    return (
        <>
            <TitleBar title={"Player Search"}/>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="e.g kosplink"/>
                <label htmlFor="floatingInput">RS3 Player Name</label>
            </div>

            <PlayerInfoWidget />

        </>
    );
}

export default PlayerSearch;
