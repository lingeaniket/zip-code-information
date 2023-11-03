import axios from "axios";
import { useState } from "react";

import InputForm from "./Components/InputForm";
import DisplayInformation from "./Components/DisplayInformation";

import "./App.css";

function App() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [inputText, setInputtext] = useState("");
    const [searchData, setSearchData] = useState({});
    const [zipCodeError, setZipCodeError] = useState({ status: false, message: "" });

    const handleZipCode = async () => {
        setLoading(true);
        setError(false);
        setSearched(true);

        await axios
            .get(`https://api.zippopotam.us/in/${inputText}`)
            .then((response) => {
                setSearchData(() => response.data);
            })
            .catch(() => {
                setSearchData({});
                if (inputText.length < 6) {
                    setSearched(false);
                    setZipCodeError((prev) => {
                        return { ...prev, status: true, message: "Zip code should be 6 digit long" };
                    });
                } else if (isNaN(inputText)) {
                    setSearched(false);
                    setZipCodeError((prev) => {
                        return { ...prev, status: true, message: "Invalid zip code" };
                    });
                } else {
                    setError(true);
                }
            });
        setLoading(false);
    };

    const handleClear = () => {
        setError(false);
        setInputtext("");
        setSearchData({});
        setSearched(false);
    };

    const handleInput = (e) => {
        setZipCodeError((prev) => {
            return { ...prev, status: false };
        });
        setInputtext(() => e.target.value);
    };

    return (
        <div className="App flexColAICenter">
            <header className="header w_100 flexCenter">
                <div>
                    <h2 className="title">ZIP Code Information App</h2>
                </div>
            </header>
            <main className="mainBlock w_50 flexCenter">
                <div className="inMainBlock w_100 flexColAICenter">
                    {/* input component */}
                    <InputForm inputText={inputText} handleInput={handleInput} handleZipCode={handleZipCode} zipCodeError={zipCodeError} />

                    <div className="emptyDiv"></div>

                    {searched && (
                        <div className="infoDiv w_99 flexColAICenter">
                            {!loading && searchData.country && (
                                // Search Clear button
                                <button onClick={handleClear} className="searchBtn clearBtn">
                                    Clear
                                </button>
                            )}

                            {/* Search Result Component */}
                            <DisplayInformation searchData={searchData} loading={loading} />

                            {/* error component */}
                            {error && <div className="errorContainer">No such zip code exist in database, try another</div>}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
