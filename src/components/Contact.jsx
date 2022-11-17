import React, { useRef } from 'react';
import { useState } from 'react';
import axios from "axios"
import Alert from "react-bootstrap/Alert";
import { useForm } from 'react-hook-form'

const Contact = () => {
  const [Voornaamcontact, setVoornaamcontact] = useState('');
  const [Familienaamcontact, setFamilienaamcontact] = useState({});
  const [Emailcontact, setEmailcontact] = useState({});
  const [Bericht, setBericht] = useState({});
  const [submitted, setSubmitted] = useState(false)
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      Voornaamcontact: "",
      Familienaamcontact: "",
      Emailcontact: "",
      Bericht: ""
    }
  })
  const URL = 'http://localhost:5000/'
  const submitForm = (data) => {
    axios.post(URL, { Voornaamcontact, Familienaamcontact, Emailcontact, Bericht })
    setSubmitted(true);
    reset()
  }
  const handleChangeVoornaam = e => {
    setVoornaamcontact(e.target.value)
  }
  const handleChangeFamilienaam = e => {
    setFamilienaamcontact(e.target.value)
  }
  const handleChangeEmail = e => {
    setEmailcontact(e.target.value)
  }
  const handleChangeBericht = e => {
    setBericht(e.target.value)
  }
  return (
    <section class="page-section" id="contact">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">
            Contacteer ons voor vragen
          </h2>
        </div>
        <form id="contactForm" onSubmit={handleSubmit(submitForm)}>
          <div class="row align-items-stretch mb-5">
            <div class="col-md-6">
              <div class="form-group">
                <input {...register("Voornaamcontact")} onChange={handleChangeVoornaam} class="form-control" id="voornaam" type="text" placeholder="Voornaam *" data-sb-validations="required" />
                <div class="invalid-feedback" data-sb-feedback="name:required">Voornaam is een verplicht veld.</div>
              </div>
              <div class="form-group">
                <input {...register("Familienaamcontact")} onChange={handleChangeFamilienaam} class="form-control" id="familienaam" type="text" placeholder="Familienaam *" data-sb-validations="required" />
                <div class="invalid-feedback" data-sb-feedback="name:required">Familienaam is een verplicht veld.</div>
              </div>
              <div class="form-group mb-md-0">
                <input {...register("Emailcontact")} onChange={handleChangeEmail} class="form-control" id="email" type="email" placeholder="Email *" data-sb-validations="required,email" />
                <div class="invalid-feedback" data-sb-feedback="email:required">Email is een verplicht veld.</div>
                <div class="invalid-feedback" data-sb-feedback="email:email">Email is niet geldig.</div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group form-group-textarea mb-md-0">
                <textarea {...register("Bericht")} onChange={handleChangeBericht} class="form-control" id="message" placeholder="Bericht *" data-sb-validations="required"></textarea>
                <div class="invalid-feedback" data-sb-feedback="message:required">Bericht is een verplicht veld.</div>
              </div>
            </div>
            <br />
          </div>
          {submitted && (
            <div class="row align-items-stretch mb-5">
              <Alert variant="success">
                <Alert.Heading>
                  Bericht werd gestuurd, we zullen zo snel mogelijk uw vraag beantwoorden.
                </Alert.Heading>
              </Alert>
            </div>
          )}
          <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
