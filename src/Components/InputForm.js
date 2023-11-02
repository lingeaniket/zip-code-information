import React from "react";

const InputForm = ({ inputText, handleInput, handleZipCode, lengthError }) => {
    return (
        <div className="searchDiv">
            <div className="App01">
                <div>
                    <input className="inputBox" type="text" placeholder="Enter 8 digit zip code" value={inputText} onChange={handleInput} />
                    <button className="searchBtn" onClick={handleZipCode}>
                        Search
                    </button>
                </div>
            </div>
            {lengthError.status && <div className="lengthError">{lengthError.message}</div>}
        </div>
    );
};

export default InputForm;
