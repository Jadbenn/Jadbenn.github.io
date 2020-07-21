import React from "react";
import Button from "react-bootstrap/Button";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useTranslation, Trans } from "react-i18next";
import Calendar from 'react-calendar'

import Form from "react-bootstrap/Form";


class Home extends React.Component {

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
                                <h5 className="card-title"><strong>I'm searching a player</strong></h5>
                                </div><div>
                                <input type="checkbox"  style={{"textAlign":"center"}, {"width":"250px"}} ></input>
                                </div>
                                </div><br/>
                                </div>

              </div>
        <div className="d-flex justify-content">
          <h1 className="text-secondary float-none"><strong>Select a sport</strong></h1>
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
                                    <h5 className="card-title"><strong>Soccer</strong></h5>
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
  <h1 className="text-secondary float-none"><strong>Select a Date</strong></h1>
</div>
<br/>
<Calendar />


<br/>

<div className="d-flex justify-content">
  <h1 className="text-secondary float-none"><strong>Add information</strong></h1>
</div>
<br/>
<Form>
 <Form.Group controlId="exampleForm.ControlInput1">
   <Form.Label>First name</Form.Label>
   <Form.Control type="name" placeholder="Your email" style={{"textAlign":"center"}, {"width":"250px"}} />
 </Form.Group>

 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label>Last name</Form.Label>
   <Form.Control placeholder="Your message" as="textarea"  style={{"textAlign":"center"}, {"width":"250px"}} />
 </Form.Group>

 <Form.Group controlId="exampleForm.ControlTextarea1">
   <Form.Label>Age</Form.Label>
   <Form.Control placeholder="Your message" as="textarea" style={{"textAlign":"center"}, {"width":"250px"}}/>
 </Form.Group>
 <select>
   <option value="grapefruit">Grapefruit</option>
   <option value="lime">Lime</option>
   <option selected value="coconut">Coconut</option>
   <option value="mango">Mango</option>
 </select>
 <br/>
 <br/>
 <Button variant="secondary text-white" type="submit">Reserver</Button>
 <br/>
 <br/>

</Form>
<br/>

      </div>


   )
 }
}

export default Home;
