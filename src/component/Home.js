import React, { useEffect, useState } from 'react';
import Product from '../component/product';

const Home = () => {

  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.teams))
  }, [])

  return (
    <div >
      <div className="container">
        <h3 className="text-center  text-primary mt-5 mb-5">Football Club</h3>
        <div className="row  mb-5" style={{ marginTop: '2.5rem', justifyContent: 'center' }}>

          {
            leagues.length === 0 &&
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }

          {
            leagues.map(li => <Product key={li.idTeam} league={li} />)
          }

        </div>
      </div>

    </div>
  );
};

export default Home;