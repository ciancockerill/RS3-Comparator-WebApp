import logo from '../assets/Green_partyhat_chathead.png'; // Adjust the path to your logo image
import { Link } from 'react-router-dom';
import '../styling/SideNavBar.css'

function SideNavBar() {
    return (
        <div className="sidenav list-group list-group-flush">

            <a className="head-img" href="https://runescape.wiki/w/Application_programming_interface">
                <img src={logo} alt="runescape head" className="logo"/>
            </a>

            <Link to="/" className="list-group-item list-group-item-action">Home</Link>
            <Link to="/playersearch" className="list-group-item list-group-item-action">Single Player Search</Link>
            <Link to="/playercomparison" className="list-group-item list-group-item-action">Player Comparison</Link>
        </div>
    );
}

export default SideNavBar;
