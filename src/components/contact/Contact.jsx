import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1mscmi",
        "template_iu7cghx",
        form.current,
        "w6Y9_FKSITapKEz4b"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>My Email</h4>
            <h5>uarehup@gmail.com</h5>
            <a
              href="mailto:uarehup@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send an email
            </a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>My Facebook Messenger</h4>
            <h5>Nick Ng</h5>
            <a
              href="https://m.me/anonymousnick0101"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>My WhatsApp</h4>
            <h5>+01136693307</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=601136693307&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer noopener"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
