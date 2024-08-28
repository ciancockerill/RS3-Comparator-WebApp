import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';
import HomePage from './components/HomePage';
import PlayerSearch from './components/PlayerSearch';
import PlayerComparison from './components/PlayerComparison';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <SideNavBar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/playersearch/:playerName?" element={<PlayerSearch />} />
                        <Route path="/playercomparison/:playerNameOne?/:playerNameTwo?" element={<PlayerComparison />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
