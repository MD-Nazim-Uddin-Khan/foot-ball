import * as React from 'react';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

function Product(props) {

    const { strTeam, strTeamBadge, idTeam } = props.league;

    const history = useHistory();
    const handleClick = (idTeam) => {
        history.push(`/booking/${idTeam}`)
    }

    return (

        <div className="col-md-3" >
            <div className="rounded shadow   text-center" style={{ marginTop: '18px' }}>
                <img className="img-fluid" style={{ height: "200px" }} src={strTeamBadge} alt="" />
                <h5>{strTeam}</h5>
                <div className="d-flex justify-content-evenly">
                    <div>
                    </div>
                    <div>
                        <button onClick={() => handleClick(idTeam)} className="btn btn-primary mb-2"> Details <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
