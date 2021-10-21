import React from 'react';

const Details = (props) => {
    const { strTeamBadge, strTeam, strGender, strTeamShort, strLeague, strCountry, intFormedYear, strSport, strStadium, strStadiumLocation, strAlternate, strStadiumDescription } = props.team
    return (
        <div className="bkgColor">


            <div className=" row mt-4  p-4">
                <div className="col-md-4">
                    <img className="img-fluid" style={{ height: "200px" }} src={strTeamBadge} alt="" />
                    <h5 className="name" > Name : {strTeam} </h5>
                    <h5 className="name" > Gender : {strGender} </h5>
                    <h5 className="name" > Team-Short: {strTeamShort} </h5>
                    <h5 className="name" > League : {strLeague} </h5>
                    <h5 className="name" > Country : {strCountry} </h5>
                    <h5 className="name" > Established : {intFormedYear} </h5>
                    <h5 className="name" > Sport : {strSport} </h5>
                    <h5 className="name" > Stadium : {strStadium} </h5>
                    <h5 className="name" > Stadium-Location : {strStadiumLocation} </h5>
                </div>

                <div className="col-md-8">
                    <h1 className="mt-3 name">{strAlternate}</h1>
                    <p className="name text-secondary" > {strStadiumDescription} </p>
                </div>
            </div>


        </div>
    );
};

export default Details;