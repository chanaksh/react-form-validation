import { useState } from "react";
import "./CountryInfo.css"
export default function CountyList({ onCountryChange, onCityChange }) {
    const Countries = [
        {
            name: "India",
            city: ["Nashik", "Mumbai", "Pune", "Delhi", "Surat", "Thane", "Jaipur", "Kolkata", "Bengaluru", "Hyderabad"]
        },
        {
            name: "America",
            city: ["San Francisco", "New York", "Chicago", "Philadelphia", "Washington"]
        },
        {
            name: "Japan",
            city: ["Tokyo", "Kyoto", "Fukuoka", "Yokohama", "Osaka"]
        },
        {
            name: "Russia",
            city: ["Moscow", "Kazan", "Saint Petersburg", "Samara", "Novosibirsk"]
        }
    ];

    const [country, setCountry] = useState("--Country--");
    const [city, setCity] = useState("--City--");
    const [citys, setCitys] = useState([]);

    const changeCountry = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        const countryData = Countries.find(ctr => ctr.name === selectedCountry);
        setCitys(countryData ? countryData.city : []);
        setCity("--City--"); // Reset city when country changes
        onCountryChange(selectedCountry);
    };

    const changeCity = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
        onCityChange(selectedCity);
    };

    return (
        <div className="contryInfo">
            <select className="country" value={country} onChange={changeCountry}>
                <option value="--Country--">--Country--</option>
                {Countries.map((ctr, index) => (
                    <option key={index} value={ctr.name}>{ctr.name}</option>
                ))}
            </select>

            {country !== "--Country--" && (
                <select className="city" value={city} onChange={changeCity}>
                    <option value="--City--">--City--</option>
                    {citys.map((cityName, index) => (
                        <option key={index} value={cityName}>{cityName}</option>
                    ))}
                </select>
            )}
        </div>
    );
}