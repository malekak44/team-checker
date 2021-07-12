import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);
    return (
        <div className="home">
            <div className="teams-container">
                {teams.map(tm => <Team key={tm.idTeam} team={tm}></Team>)}
            </div>
        </div>
    );
};

export default Home;