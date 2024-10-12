import React from "react";
import Navbar from "../layout/Navbar";
import Hero from "../Components/Hero";
import contactPic from "../Components/images/contact.jpg";
import ContactForm from "../Pages/ContactForm";
function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={contactPic}
        title="Contacts"
        btnClass="hide"
      />
      <ContactForm />
    </div>
  );
}

export default Contact;
