import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Style.css';

const Booking = () => {

    const { dynamic } = useParams();

    const [team, setTeam] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${dynamic}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [dynamic])

    return (
        <div className="   bkgColor   ">

            <div className=" row container p-4">
                <div className="col-md-4">
                    <img className="img-fluid" style={{ height: "200px" }} src={team.strTeamBadge} alt="" />
                    <h5 className="name" > Name : <span style={{ color: "#00A398" }}> {team.strTeam} </span> </h5>
                    <h5 className="name" > Gender : <span style={{ color: "#9C824A" }}> {team.strGender} </span> </h5>
                    <h5 className="name" > Team-Short: <span style={{ color: "#9C824A" }}> {team.strTeamShort} </span> </h5>
                    <h5 className="name" > League : <span style={{ color: "#9C824A" }}> {team.strLeague} </span> </h5>
                    <h5 className="name" > Country : <span style={{ color: "#9C824A" }}> {team.strCountry} </span> </h5>
                    <h5 className="name" > Established : <span style={{ color: "#9C824A" }}> {team.intFormedYear} </span> </h5>
                    <h5 className="name" > Sport : <span style={{ color: "#9C824A" }}> {team.strSport} </span> </h5>
                    <h5 className="name" > Stadium : <span style={{ color: "#9C824A" }}> {team.strStadium} </span> </h5>
                    <h5 className="name" > Stadium-Location : <span style={{ color: "#9C824A" }}> {team.strStadiumLocation} </span> </h5>
                </div>

                <div className="col-md-8">
                    <h1 className="mt-3 name ">{team.strAlternate}</h1>
                    <p style={{ color: "#00A398" }} > {team.strStadiumDescription} </p>
                </div>
            </div>


        </div>
    );
};

export default Booking;