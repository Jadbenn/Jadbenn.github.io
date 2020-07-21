import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useTranslation, Trans } from "react-i18next";

function handleSubmit(event) {
  event.preventDefault();
}

function Navigation() {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {i18n.changeLanguage(lng)};
  return (
    <div className="navigation">
    <div className="container ">

      <Nav>
      <Navbar bg="light" variant="light" class="  " className='m-auto'>
      <h1>Complex Sports&#10003;</h1>

      <Nav.Link href="/"><u class="text-secondary   px-10"><Trans>Reservation</Trans></u></Nav.Link>
      <Nav.Link href="/Rates"><u class="text-secondary  "> <Trans>Rates</Trans></u></Nav.Link>
      <Nav.Link href="/CompleteTeam"><u class="text-secondary  "><Trans>CompleteTeam</Trans></u></Nav.Link>
      <Button variant=" text-secondary  "><u><Trans>language</Trans></u></Button>
      <Button  onClick={() => {changeLanguage("fr");window.location.reload(false)}}>fr</Button>
            <Button onClick={() => {changeLanguage("en");window.location.reload(false)}}>en</Button>
      </Navbar>
      </Nav>
    </div>
    </div>
  );}


export default Navigation;
