import { useState } from "react";
import axios from "axios";
import "./App.css";
import InputForm from "./Components/InputForm";
import DisplayInformation from "./Components/DisplayInformation";

function App() {
    const [inputText, setInputtext] = useState("");
    const [searchData, setSearchData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState({ status: false, message: "" });

    const handleZipCode = async () => {
        setLoading(true);
        await axios
            .get(`https://api.zippopotam.us/in/${inputText}`)
            .then((response) => {
                setSearchData(() => response.data);
                setLoading(false);
            })
            .catch(() => {
                setSearchData({});
                if (inputText.length < 6) {
                    setZipCodeError((prev) => {
                        return { ...prev, status: true, message: "Zip code should be 6 digit long" };
                    });
                } else if (isNaN(inputText)) {
                    setZipCodeError((prev) => {
                        return { ...prev, status: true, message: "Invalid zip code" };
                    });
                } else {
                    setError(true);
                }
            });
    };

    const handleClear = () => {
        setError(false);
        setInputtext("");
        setSearchData({});
    };

    const handleInput = (e) => {
        setError(false);
        setZipCodeError((prev) => {
            return { ...prev, status: false };
        });
        setInputtext(() => e.target.value);
    };

    return (
        <div className="App">
            <h2>ZIP Code Information App</h2>
            <InputForm inputText={inputText} handleInput={handleInput} handleZipCode={handleZipCode} lengthError={zipCodeError} />
            <DisplayInformation searchData={searchData} loading={loading} />
            {error && <>No such zip code exist in databse</>}
            <button onClick={handleClear} className="searchBtn clearBtn">clear result</button>
        </div>
    );
}

export default App;
