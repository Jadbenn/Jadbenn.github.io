import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation, Trans } from "react-i18next";

import ReactDOM from 'react-dom';

import Calendar from 'react-calendar'



class CompleteTeam extends React.Component {
render = () => {
   return (
     
     <div className="container">
     <br/>
      <br/><br/>
      <div className="container d-flex justify-content-center">




                                  <div className="container"><br/>
                                  <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>

                                  <div className="card-body text-secondary">
                                  <h5 className="card-title"><strong><Trans>searchteam</Trans></strong></h5>
                                  </div>
                                  <div>
                                  <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                  </div>
                                  </div><br/>

                                  </div>






                                <div className="container"><br/>
                                <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>

                                <div className="card-body text-secondary">
                                <h5 className="card-title"><strong><Trans>searchplayer</Trans></strong></h5>
                                </div><div>
                                <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                </div>
                                </div><br/>
                                </div>

              </div>
        <div className="d-flex justify-content">
          <h1 className="text-secondary float-none"><strong><Trans>SelectSport</Trans></strong></h1>
        </div>

      <div className="container">
        <div className="card " style={{"textAlign":"center"}}>
        </div><br/>
        </div>



        <div className="container  flex-column">


        <div className="container d-flex justify-content-center">




                                    <div className="container"><br/>
                                    <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                    <img className="card-img-top" src={require('./img/soccer.jpg')} height="120px"/>
                                    <div className="card-body text-secondary">
                                    <h5 className="card-title"><strong><Trans>Soccer</Trans></strong></h5>
                                    </div>
                                    <div>
                                    <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                    </div>
                                    </div><br/>

                                    </div>

                                  <div className="container"><br/>
                                  <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                  <img className="card-img-top" src={require('./img/rugby.jpg')} height="120px"/>
                                  <div className="card-body text-secondary">
                                  <h5 className="card-title"><strong>Rugby</strong></h5>
                                  </div><div>
                                  <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                  </div>
                                  </div><br/>
                                  </div>




                                  <div className="container"><br/>
                                  <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                  <img className="card-img-top" src={require('./img/tennis.jpg')} height="120px" />
                                  <div className="card-body text-secondary">
                                  <h5 className="card-title"><strong>Tennis</strong></h5>
                                  </div><div>
                                  <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                  </div>
                                  </div><br/>
                                  </div>

                </div>


                          <div className="d-flex justify-content-center">







                                              <div className="container"><br/>
                                              <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                              <img className="card-img-top" src={require('./img/cricket.jpg')} height="120px"/>
                                              <div className="card-body text-secondary">
                                              <h5 className="card-title"><strong>Cricket</strong></h5>
                                              </div>
                                              <div>
                                              <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                              </div>
                                              </div><br/>
                                              </div>

                                              <div className="container"><br/>
                                              <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                              <img className="card-img-top" src={require('./img/badminton.jpg')} height="120px" />
                                              <div className="card-body text-secondary">
                                              <h5 className="card-title"><strong>Badminton</strong></h5>
                                              </div><div>
                                              <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                              </div>
                                              </div><br/>
                                              </div>


                                              <div className="container"><br/>
                                              <div className="card " style={{"textAlign":"center"}, {"width":"250px"}}>
                                              <img className="card-img-top" src={require('./img/volleyball.jpg')} height="120px" />
                                              <div className="card-body text-secondary">
                                              <h5 className="card-title"><strong>VolleyBall</strong></h5>
                                              </div><div>
                                              <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                              </div>
                                              </div><br/>
                                              </div>




                          </div>





</div>


<div className="d-flex justify-content">
  <h1 className="text-secondary float-none"><strong><Trans>SelectDate</Trans></strong></h1>
</div>
<br/>
<Calendar/>


<br/>

<div className="d-flex justify-content">
  <h1 className="text-secondary float-none"><strong><Trans>Personalinfo</Trans></strong></h1>
</div>
<br/>
<Form>
 <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Label><Trans>Firtname</Trans></Form.Label>
   <Form.Control type="name" placeholder="Ex: Justin" style={{"textAlign":"center"}, {"width":"250px"}} />
 </Form.Group>

 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label><Trans>Lastnam</Trans></Form.Label>
   <Form.Control placeholder="Ex: Trudeau" as="textarea"  style={{"textAlign":"center"}, {"width":"250px"}} />
 </Form.Group>

 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label>Age</Form.Label>
   <Form.Control placeholder="Age" as="textarea" style={{"textAlign":"center"}, {"width":"250px"}}/>
 </Form.Group>
 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label>Email</Form.Label>
   <Form.Control placeholder="abcd@gmail.com" style={{"textAlign":"center"}, {"width":"250px"}}/>
 </Form.Group>
 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label><Trans>PhoneNum</Trans></Form.Label>
   <Form.Control placeholder="XXX-XXX-XXXX" style={{"textAlign":"center"}, {"width":"250px"}}/>
 </Form.Group>

 <select>
   <option selected value="coconut">Select a level</option>
   <option value="Pro">Professional</option>
   <option value="lime">Intermediate</option>
   <option value="coconut">Beginner</option>
 </select>
 <br/>
 <br/>
 <Button variant="secondary text-white" type="submit"><Trans>Submit</Trans></Button>
 <br/>
 <br/>

</Form>
<br/>

      </div>


   )
 }
}

export default CompleteTeam;
