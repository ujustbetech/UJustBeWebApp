import React, { useState, useEffect } from "react";
import "../../../styles/global.scss";
import "../../../styles/gender.scss";



const LocationSelection = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
  
    
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          const countryList = data.map((country) => country.name.common).sort();
          setCountries(countryList);
        })
        .catch((error) => console.error("Error fetching countries:", error));
    }, []);
  
    // Fetch states when a country is selected
    const fetchStates = (country) => {
      fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.data?.states) {
            setStates(data.data.states.map((state) => state.name));
          }
        })
        .catch((error) => console.error("Error fetching states:", error));
    };
  

    return (
        <>
            <section className="enrollment-main">
                <div>
                    <div className="pageHeading">
                        <button>back</button><h3>Enroll as Partner</h3>
                    </div>
                    <div className="innerContainer">
                    <div className="form-card">
                        <h2>Tell us your location</h2>
                        <div className="gender-options">
                      
                        <form>
      <div className="form-field">
        <input type="text" placeholder="Type your location*" required />
      </div>
      <div className="form-field">
        <input type="text" placeholder="Flat/Wing/Unit" />
      </div>
      <div className="form-field">
        <input type="text" placeholder="Locality*" required />
      </div>
      <div className="form-field">
        <select
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            fetchStates(e.target.value);
          }}
        >
          <option value="">Select Country</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="form-field">
        <select disabled={!selectedCountry}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
    </form>
        </div>
        
                    </div>
                </div>
                </div>
                <div className="navigation">
                    <button>
                        <img src="/imgs/icons/previous.png" style={{ width: "40px" }} />Previous
                    </button>
                    <button>
                        Next  <img src="/imgs/icons/next.png" style={{ width: "40px" }} />
                    </button>
                </div>
            </section>
        </>
    );
};

export default LocationSelection;
