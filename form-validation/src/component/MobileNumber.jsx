import { useState, useEffect } from "react";
import "./MobileNumber.css"
export default function MobileNumber({ onCodeChange, onNumberChange }) {
    const countryCode = [ "+55", "+245", "+233", "+855", "+20", "+21"];

    const [code, setCode] = useState("");
    const [num, setNumber] = useState("");

    useEffect(() => {
        onCodeChange(code);
    }, [code, onCodeChange]);

    useEffect(() => {
        onNumberChange(num);
    }, [num, onNumberChange]);

    const onChangeNumber = (e) => {
        setNumber(e.target.value);
    };

    const onChangeCo = (e) => {
        setCode(e.target.value);
    };

    return (
        <div className="main">
            <select className="codenum" value={code} onChange={onChangeCo}>
                <option value="+91">+91</option>
                {countryCode.map((co, index) => (
                    <option key={index} value={co}>{co}</option>
                ))}
            </select>
            
            <input className="in"
                type="tel"
                value={num}
                onChange={onChangeNumber}
                placeholder="Enter Mobile Number"
                required
                autoComplete="off"
                pattern="^[0-9]{10}$"
                
            />
        </div>
    );
}