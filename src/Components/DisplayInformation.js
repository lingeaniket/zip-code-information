import React from "react";

import Loader from "./Loader";
import SearchResults from "./SearchResults";

import "../Styles/displayInformation.css";

const DisplayInformation = ({ searchData, loading }) => {
    return (
        <div className="w_100">
            {loading ? (
                <div className="loader">
                    <Loader />
                    <div className="loaderTitle">Loading...</div>
                </div>
            ) : (
                <>
                    {searchData.country && (
                        <div className="searchRes">
                            <h4 className="title">Result for {searchData["post code"]}</h4>
                            <div>
                                Post Code : <span className="boldLet">{searchData["post code"]}</span>
                            </div>
                            <div>
                                Country :{" "}
                                <span className="boldLet">
                                    {searchData.country} ({searchData["country abbreviation"]})
                                </span>
                            </div>
                            <div className="resList">
                                {searchData.places.length} place{searchData.places.length === 1 ? "" : "s"} identified for given zip code
                            </div>
                            <ol>
                                {searchData.places.map((place, index) => (
                                    <SearchResults place={place} key={index} />
                                ))}
                            </ol>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default React.memo(DisplayInformation);
