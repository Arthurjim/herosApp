import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import useForm from "../customHooks/useForm";
import HereoCard from "../heroe/HeroeCard";
import { getHerosByName } from "../selectors/getHerosByName";

const SearchScreen = () => {
    // const [hereos, setHeroes] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({ searchText: q });

    const { searchText } = formValues;
    const hereos = useMemo(()=> getHerosByName(q),[q]) 
    
    const hanldeSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <div className="row">
                <div className="col-5">
                    <h4 className="text-uppercase">Found your favorit hero.</h4>
                    <hr />

                    <form onSubmit={hanldeSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            onChange={handleInputChange}
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <div className="animate__animated animate__fadeIn">
                        {q === "" ? (
                            <div className="altert alert-info text-center p-2">
                                Heros...
                            </div>
                        ) : (
                            hereos.length === 0 && (
                                <div className="alert alert-danger">
                                    0 heros found
                                </div>
                            )
                        )}

                        {hereos.length > 0 &&
                            hereos.map((hero) => (
                                <HereoCard key={hero.id} {...hero} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchScreen;
