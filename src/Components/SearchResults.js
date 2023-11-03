import React from "react";

const SearchResults = ({ place }) => {
    return (
        <li>
            <div>
                Place Name : <span className="boldLet">{place["place name"]}</span>
            </div>
            <div>
                State :{"  "}
                <span className="boldLet">
                    {place.state} ({place["state abbreviation"]})
                </span>
            </div>
            <div>
                Co-ordinates :{"  "}
                <span className="boldLet">
                    {place.latitude}, {place.longitude}
                </span>
            </div>
        </li>
    );
};

export default React.memo(SearchResults);
