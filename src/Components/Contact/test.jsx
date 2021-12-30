import { useState } from "react";
import "./Contact.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as yup from 'yup';
import {  useFormik } from 'formik';


const formValidationSchema = yup.object({
  email:yup
  .string()
  .email("Please enter valid email")
  .required("why not fill lol"),
  message:yup
  .string()
  .required("Please enter a message")
  .min(5,"A bigger message is required")


})

export default function Contact() {
  const [message, setMessage] = useState(false);


  // const API_URL = "https://b28-wd-movies2.herokuapp.com" //export to another file and use across all files


  const { handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
    initialValues: { email: "", message: ""},
    validationSchema: formValidationSchema,
    onSubmit: (newmovie) => {
     
      newmovie.preventDefault();
      setMessage(true);
      // fetch(`${API_URL}/movies`, {
      //   method: "POST",
      //   body: JSON.stringify(newmovie),
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      // })
    }
  });

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://www.reson8.ae/assets/images/common/contact-us-banner-image.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}