import logo from '../assets/Green_partyhat_chathead.png'; // Adjust the path to your logo image
import { Link } from 'react-router-dom';
import '../styling/SideNavBar.css'

function SideNavBar() {
    return (
        <div className="sidenav list-group list-group-flush">
            <img src={logo} alt="logo" className="logo" />
            <Link to="/" className="list-group-item list-group-item-action">Home</Link>
            <Link to="/playersearch" className="list-group-item list-group-item-action">Single Player Search</Link>
            <Link to="/playercomparison" className="list-group-item list-group-item-action">Player Comparison</Link>
        </div>
    );
}

export default SideNavBar;
