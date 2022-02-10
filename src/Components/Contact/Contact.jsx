import { useState } from "react";
import "./Contact.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(15, "A longer message is required from you"),
});

export default function Contact() {

  const API_URL = "https://nodejs-portfolio-xrayed.herokuapp.com" //export to another file and use across all files



  const [message, setMessage] = useState(false);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { email: "", message: "" },
      validationSchema: formValidationSchema,
      onSubmit: (details) => {
        setMessage(true);
        fetch(`${API_URL}/details`, {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json"
          },
        }).then(()=>console.log("done"))
      },
    });


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img
          src="https://www.reson8.ae/assets/images/common/contact-us-banner-image.png"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            placeholder="Enter e-mail"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.email && touched.email && errors.email}
            variant="outlined"
          />
          <textarea
            placeholder="Enter your message"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && touched.message && errors.message}
          <Button type="submit" variant="contained">
            Submit
          </Button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      <div className="footer">

        <MailOutlineIcon className="icon" />
        <span>rayedkhan007@gmail.com</span>
      </div>
    </div>
  );
}
