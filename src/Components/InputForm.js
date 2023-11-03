import React from "react";

import "../Styles/inputForm.css";

const InputForm = ({ inputText, handleInput, handleZipCode, zipCodeError }) => {
    const handlekey = (e) => {
        if (e.key === "Enter") {
            handleZipCode();
        }
    };

    return (
        <div className="searchDiv w_99 flexCenter">
            <div
                className="App01"
                style={{
                    border: `${zipCodeError.status ? "2px solid red" : "2px solid #1c3659"}`,
                }}
            >
                <div>
                    <input
                        className="inputBox"
                        type="text"
                        placeholder="Enter 6 digit zip code"
                        value={inputText}
                        onKeyDown={handlekey}
                        onChange={handleInput}
                    />
                    <button className="searchBtn" onClick={handleZipCode}>
                        Search
                    </button>
                </div>
            </div>
            {zipCodeError.status && <div className="lengthError">{zipCodeError.message}</div>}
        </div>
    );
};

export default InputForm;
