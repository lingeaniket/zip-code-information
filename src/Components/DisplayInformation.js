import React from "react";

const DisplayInformation = ({ searchData, loading }) => {
    return (
        <div
            style={{
                width: "50%",
            }}
        >
            {loading ? (
                <>Loading...</>
            ) : (
                <>
                    {searchData.country && (
                        <div className="searchRes">
                            <h4>Result for {searchData["post code"]}</h4>
                            <div>
                                Post Code : <span className="boldLet">{searchData["post code"]}</span>
                            </div>
                            <div>
                                Country :{" "}
                                <span className="boldLet">
                                    {searchData.country} ({searchData["country abbreviation"]})
                                </span>
                            </div>
                            <ul>
                                {searchData.places.map((place) => (
                                    <li>
                                        <div>
                                            Place Name : <span className="boldLet">{place["place name"]}</span>
                                        </div>
                                        <div>
                                            State :
                                            <span className="boldLet">
                                                {place.state} ({place["state abbreviation"]})
                                            </span>
                                        </div>
                                        <div>
                                            Co-ordinates :
                                            <span className="boldLet">
                                                {place.latitude}, {place.longitude}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default React.memo(DisplayInformation);
