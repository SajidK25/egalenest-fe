import React, { useEffect, useState } from 'react';
//here: https://www.npmjs.com/package/react-datepicker
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import nl from 'date-fns/locale/nl';
import axios from "axios"
import { useForm } from 'react-hook-form'

registerLocale('nl', nl);
const Appointment = () => {
  //State for the datepicker
  var date = new Date();
  const [startDate, setStartDate] = useState(null);
  //For understanding: State in react is used to store the data in the component
  //and it is used to update the data in the component
  const [Voornaam, setVoornaam] = useState({});
  const [Familienaam, setFamilienaam] = useState({});
  const [Email, setEmail] = useState({});
  const [Telefoonnummer, setTelefoonnummer] = useState({});
  const [Tijd, setTijd] = useState({});
  const [afspraakList, setAfspraakList] = useState([{}]);
  const [beschikBareUren, setBeschikbareUren] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const { handleSubmit, formState } = useForm()
  const { isSubmitting } = formState
  let URL = 'http://localhost:5000/'
  let Uren = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00"]
  const fetchAfspraken = async () => {
    const data = await axios.get(URL)
    const { afspraken } = data.data
    setAfspraakList(afspraken)
  }
  const handleChangeVoornaam = e => {
    setVoornaam(e.target.value)
  }
  const handleChangeFamilienaam = e => {
    setFamilienaam(e.target.value)
  }
  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }
  const handleChangeTelefoonnummer = e => {
    setTelefoonnummer(e.target.value)
  }
  const handleChangeTijd = e => {
    setTijd(e.target.value)
  }
  function submitForm(data) {
    const dateString = new Date(startDate)
    let dag = dateString.getDate()
    let maand = parseInt(dateString.getMonth()) + 1
    let jaar = dateString.getFullYear()
    let Datum = dag + "/" + maand + "/" + jaar
    let bezet = []
    afspraakList.forEach(afspraak => {
      if (afspraak.Datum === Datum) {
        bezet.push(afspraak.Tijd)
      }
    })
    var beschikbaar = Uren.filter(function (obj) { return bezet.indexOf(obj) === -1 })
    var AantalBeschikbareTijden = beschikbaar.length - 1
    axios.post(URL, { Voornaam, Familienaam, Email, Telefoonnummer, Datum, Tijd, AantalBeschikbareTijden})
    setSubmitted(true)
  }

  function convertdate2string(d) {
    const dateString = new Date(d)
    let dag = dateString.getDate()
    let maand = parseInt(dateString.getMonth()) + 1
    let jaar = dateString.getFullYear()
    let Datum = dag + "/" + maand + "/" + jaar
    return Datum
  }
  const changeTijden = d => {
    const dateString = new Date(d)
    let dag = dateString.getDate()
    let maand = parseInt(dateString.getMonth()) + 1
    let jaar = dateString.getFullYear()
    let D = dag + "/" + maand + "/" + jaar
    let bezet = []
    afspraakList.forEach(afspraak => {
      if (afspraak.Datum === D) {
        bezet.push(afspraak.Tijd)
      }
    })
    var beschikbaar = Uren.filter(function (obj) { return bezet.indexOf(obj) === -1 })
    if (bezet.length === 0) {
      beschikbaar = Uren
    }
    setBeschikbareUren(beschikbaar)
    setTijd(beschikbaar[0])
  }
  function getfulldates() {
    var fulldates = [new Date()]
    afspraakList.forEach(afspraak => {
      if (afspraak.AantalBeschikbareTijden === 0) {
        var jaar = afspraak.Datum.substr(afspraak.Datum.length - 4)
        var maand = afspraak.Datum[3] + afspraak.Datum[4]
        var dag = afspraak.Datum[0] + afspraak.Datum[1]
        var datum = jaar + "/" + maand + "/" + dag + " 00:00:00"
        fulldates.push(new Date(datum))
      }
    })
    return fulldates
  }
  useEffect(() => {
    fetchAfspraken();
  }, [])
  if (!submitted) {
    return (
      <section class="page-section" id="appointment">
        <div class="container">
          <form onSubmit={handleSubmit(submitForm)}>
            <div class="row">
              <div class="col-6">
                <label for="firstname" class="form-label">
                  {' '}
                  Voornaam
                </label>
                <input onChange={handleChangeVoornaam} type="text" class="form-control" id="firstname" required />
              </div>
              <div class="col-6">
                <label for="lastname" class="form-label">
                  {' '}
                  Familienaam
                </label>
                <input onChange={handleChangeFamilienaam} type="text" class="form-control" id="lastname" required />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <label for="emailInfo" class="form-label">
                  {' '}
                  E-mail
                </label>
                <input
                  onChange={handleChangeEmail}
                  type="email"
                  class="form-control"
                  id="emailInfo"
                  required
                />
              </div>
              <div class="col-6">
                <label for="phoneNumber" class="form-label">
                  {' '}
                  GSM Nummer
                </label>
                <input onChange={handleChangeTelefoonnummer} type="tel" id="phone" name="phone" class="form-control" />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <label for="Datum" class="form-label">
                  {' '}
                  Datum Afspraak
                </label>
                <div>
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={(d) => { setStartDate(d); changeTijden(d) }}
                    locale="nl"
                    dateFormat="dd/MM/yyyy"
                    onKeyDown={(e) => {
                      e.preventDefault();
                    }}
                    isClearable={true}
                    closeOnScroll={true}
                    minDate={date}
                    excludeDates={getfulldates()}
                    placeholderText="Kies"
                  />
                </div>
              </div>
              <div class="col-6">
                <label for="tijd" class="form-label">
                  {' '}
                  Tijd Afspraak
                </label>
                <select

                  onChange={handleChangeTijd}
                  class="form-select"
                  aria-label="Default select
                              example"
                >
                  <option selected disabled>Kies</option>
                  {
                    beschikBareUren.map(i => {
                      return (
                        <option value={i}>{i}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div class="text-center">
              <button
                class="btn btn-primary
                              btn-xl text-uppercase"
                name='Afspraak'
                id="submitButton"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting && (<span class='spinner-grow spinner-grow-sm'></span>)}
                Maak Afspraak
              </button>
            </div>
          </form>
        </div>
      </section>);
  }
  else {
    return (
      <section class="page-section" id="appointment">
        <div class="text-center">
          Er werd een afspraak gemaakt op {convertdate2string(startDate)} om {Tijd}. We hebben een bevestiging verstuurd naar {Email}.
        </div>
      </section>);
  }
};

export default Appointment;
