import "./Contact.scss";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const formValidationSchema = yup.object({
  name:yup
    .string()
    .required("Please enter your name"),
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
  const API_URL = "https://nodejs-portfolio-xrayed.herokuapp.com"; //export to another file and use across all files


  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { name:"",email: "", message: "" },
      validationSchema: formValidationSchema,
      onSubmit: (details) => {
        fetch(`${API_URL}/details`, {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => console.log("done"));
      },
    });

  return (
    <section className="contact" id="contact">
      <h1>Contact</h1>
      <div className="container">
        <div className="left">
          <div className="left-line">
            <CallOutlinedIcon className="left-icon" />
            <div className="left-details">
              <h4>Call me</h4>
              <p>+91 7057690637</p>
            </div>
          </div>

          <div className="left-line">
            <MailOutlineIcon className="left-icon" />
            <div className="left-details">
              <h4>E-mail</h4>
              <p>rayedkhan007@gmail.com</p>
            </div>
          </div>

          <div className="left-line">
            <LocationOnOutlinedIcon className="left-icon" />
            <div className="left-details">
              <h4>Location</h4>
              <p>Pune,Maharashtra</p>
            </div>
          </div>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <TextField
              className="form-control"
              placeholder="Name"
              id="name"
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.name && touched.name && errors.name}
              variant="filled"
            />
            <TextField
              className="form-control"
              placeholder="Enter email"
              id="email"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.email && touched.email && errors.email}
              variant="filled"
            />
            <TextField
              className="form-control"
              placeholder="Enter message"
              id="message"
              label="Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.message && touched.message && errors.message}
              variant="filled"
            />
            <Button type="submit">
              <span>Send</span> <SendOutlinedIcon />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
