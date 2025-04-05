import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfyjFrXtREeqeDwLufCI_Nsg0Npkxra0quY5PcSHz-RuiAm6w/viewform?embedded=true" width="640" height="1171" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 Prisha and Company Finance Pvt Ltd.
          </p>
        </div>
      </div>
    </div>
    
  );
};
