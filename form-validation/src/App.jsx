import "./App.css";
import Input from "./component/Input";
import 'react-phone-number-input/style.css';
import { useState } from "react";
import InputCountry from "./component/CountryInfo.jsx";
import MobileNumber from "./component/MobileNumber";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    conpassword: "",
    pan: "",
    adhar: "",
    mobile: "",
    city: "",
    country: "",
    code: ""
  });

  const formField = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Enter First Name",
      label: "First Name",
      required: true,
      pattern: "^[A-Za-z]{1,}$",
      errorMassage: "First name must be letters and should not include any special character and number",
      autoComplete: "off"
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Enter Last Name",
      label: "Last Name",
      required: true,
      pattern: "^[A-Za-z]{1,}$",
      errorMassage: "Last name must be letters and should not include any special character and number",
      autoComplete: "off"
    },
    {
      id: 3,
      name: "username",
      type: 'text',
      placeholder: "Username",
      label: "Username",
      required: true,
      pattern: "^[A-Za-z0-9]{3,20}$",
      errorMassage: "Username must be between 3-20 characters and should not include any special character",
      autoComplete: "off"
    },
    {
      id: 4,
      name: "email",
      type: 'email',
      placeholder: "Enter Email",
      label: "Email",
      required: true,
      errorMassage: "Invalid email",
      autoComplete: "off"
    },
    {
      id: 5,
      name: "password",
      type: 'password',
      placeholder: "Enter Password",
      label: "Password",
      required: true,
      autoComplete: "off",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMassage: "Password must be 8-20 characters and include at least 1 letter, 1 number, and 1 special character"
    },
    {
      id: 6,
      name: "conpassword",
      type: "password",
      placeholder: "Enter Confirm Password",
      label: "Confirm Password",
      required: true,
      autoComplete: "off",
      errorMassage: "Passwords must match",
      pattern: values.password
    },
    {
      id: 7,
      name: "pan",
      type: "text",
      placeholder: "Enter PAN Card Number",
      label: "PAN Card",
      required: true,
      autoComplete: "off",
      pattern: `[A-Z]{5}[0-9]{4}[A-Z]{1}`,
      errorMassage: "Invalid PAN number"
    },
    {
      id: 8,
      name: "adhar",
      type: "number",
      placeholder: "Enter Aadhar Card Number",
      label: "Aadhar Number",
      required: true,
      autoComplete: "off",
      pattern: `^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$`,
      errorMassage: "Invalid Aadhar number"
    }
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
   
  };

  const handleCountryChange = (country) => {
    setValues((prevValues) => ({ ...prevValues, country }));
  };

  const handleCityChange = (city) => {
    setValues((prevValues) => ({ ...prevValues, city }));
  };

  const handleCodeChange = (code) => {
    setValues((prevValues) => ({ ...prevValues, code }));
  };

  const handleNumberChange = (num) => {
    setValues((prevValues) => ({ ...prevValues, mobile: num }));
  };
const  show=()=> {
  console.log("hel")
}
  return (
    <form onSubmit={handleForm}>
      {formField.map((field) => (
        <Input key={field.id} {...field} onChange={onChange} value={values[field.name]} />
      ))}
      <InputCountry onCountryChange={handleCountryChange} onCityChange={handleCityChange} />
      <MobileNumber onCodeChange={handleCodeChange} onNumberChange={handleNumberChange} />
      <button className="button" type="submit" >Submit</button>
    </form>
  );
}

export default App;











