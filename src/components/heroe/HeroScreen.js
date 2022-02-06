import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";
// const heroImages = require.context('../../assets/heroes',true)
import { heroImages } from '../helpers/heroImages';

const HeroScreen = () => {
    const { heroId } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);


    
    if (!hero) return <Navigate to="/" />;
    const handleReturn = () => {
        navigate(-1);
    };

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    // const hereoImg = `/assets/${id}.jpg`;

    return (
        <div className="row mt-5 animate__animated animate__bounceInDown">
            <div className="col-4">
                <img src={heroImages(`${id}`)} alt={superhero} className="img-thumbnail" />
            </div>
            <div className="col-8">
                <h3 className="mx-2">{superhero}</h3>
                <ul className="list-group ">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b>
                        {first_appearance}
                    </li>
                </ul>
                <div className="m-2">
                    
                    <h5><b>Characaters:</b></h5>
                    <p>{characters}</p>
                </div>
                <div className="d-flex justify-content-end ">
                    <button className="btn btn-outline-secondary " onClick={handleReturn}>
                        Back
                    </button>
                </div>
               
            </div>
        </div>
    );
};

export default HeroScreen;
