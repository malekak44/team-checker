import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './TeamDetail.css';
import male from '../../images/male.png';
import female from '../../images/female.png';
import twitter from '../../images/twt.png';
import facebook from '../../images/fb.png';
import youtube from '../../images/yt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [id]);
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = team;

    let image;
    if (strGender === "Male") {
        image = <img id="gender-image" src={male} alt="male" />;
    } else {
        image = <img id="gender-image" src={female} alt="female" />;
    }

    return (
        <>
            <Header>
                <img className="center" src={strTeamBadge} alt={strTeam} />
            </Header>
            <div className="details-container">
                <div className="container" id="basic-details">
                    <div className="row">
                        <div className="col-md-8">
                            <div id="team-details">
                                <h2>{strTeam}</h2>
                                <h5><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h5>
                                <h5><FontAwesomeIcon className="icon" icon={faFlag} /> Country: {strCountry}</h5>
                                <h5><FontAwesomeIcon className="icon" icon={faFutbol} /> Sport Type: {strSport}</h5>
                                <h5><FontAwesomeIcon className="icon" icon={faMars} /> Gender: {strGender}</h5>
                            </div>
                        </div>
                        <div className="col-md-4">
                            {image}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p style={{ fontSize: "18px" }}>{strDescriptionEN}</p>
                </div>
                <div id="social-media">
                    <a href={"https://" + strTwitter}><img src={twitter} alt="twitter" /></a>
                    <a href={"https://" + strFacebook}><img src={facebook} alt="facebook" /></a>
                    <a href={"https://" + strYoutube}><img src={youtube} alt="youtube" /></a>
                </div>
            </div>
        </>
    );
};

export default TeamDetail;