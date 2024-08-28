import TitleBar from "./TitleBar.tsx";
import "../styling/HomePage.css"

function HomePage() {
    return (
        <>
            <TitleBar title={"Runescape 3 Player Comparison"} />

            <div className="main-hp-content">
                <h1>Welcome!</h1>
                <p>
                    Discover your RuneScape 3 stats with ease. Whether you're playing solo or want to compare your
                    progress with a friend,
                    my tool provides quick and simple access to all the metrics you care about. Just enter a username
                    to start, or use the
                    URL parameters to save and share your searches.
                </p>

                <div className="features">
                    <p>Features:</p>
                    <ul>
                        <li><span>Single Player Search:</span> Instantly retrieve stats for any RuneScape 3 player.</li>
                        <li><span>Two-Player Comparison:</span> Compare skills, quests completed, and more side by side
                            with a friend.
                        </li>
                        <li><span>Shareable Searches:</span> Save your search results with URL parameters and revisit
                            them anytime.
                        </li>
                    </ul>
                </div>

                <div className="about">
                    <h2>About the Developer</h2>
                    <p>
                        I'm a 3rd Year Computer Science student who's recently gotten into RuneScape and decided to
                        create my first web app. This project uses
                        React + TypeScript + Vite on the frontend and a Python Flask API hosted on AWS Elastic Beanstalk
                        for the backend. The app interacts with
                        the RuneScape metrics API to fetch your real-time data.
                    </p>
                </div>

                <div className="image-links">
                    <a className="github-logo" href="https://github.com/ciancockerill/RS3-Comparator-WebApp">
                        <img
                            src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
                            alt="github logo"
                        />
                    </a>

                    <a className="linkedin-logo" href="https://www.linkedin.com/in/ciancockerill/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                            alt="linkedIn Logo"
                        />
                    </a>

                </div>

            </div>
        </>
    );
}

export default HomePage;
