import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const SERVICE = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const USER = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const submitHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, USER).then(
      (result) => {
        console.log(result.text);
        setDone(true);
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        setDone(false);
        setLoading(false);
      }
    );
  };

  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="titleContainer">
          <h1 className="title">CONTACT</h1>
          <div className="line"></div>
        </div>
        <form ref={formRef} onSubmit={submitHandler}>
          <div className="formGroup">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" name="user_name" />
          </div>
          <div className="formGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="user_email"
              required
            />
          </div>
          <div className="formGroup">
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="user_subject" />
          </div>
          <div className="formGroup">
            <label>Message</label>
            <textarea
              rows="3"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">{loading ? "Loading..." : "SEND"}</button>
          {done && (
            <span style={{ color: "green", textAlign: "center" }}>
              Email sent. You will receive a reply soon <br />
              Thank You!
            </span>
          )}
        </form>

        <div className="contactBottom">
          <a
            href=" https://wa.me/+2348050667156?text=urlencodedtext"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="mailto:joniedev101@gmail.com"
            style={{ color: "white" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/okoro-john-1b7789bb"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.twitter.com/jonie_dev"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.github.com/Joniekesh"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
