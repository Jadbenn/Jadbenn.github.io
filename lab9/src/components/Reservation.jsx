import React from "react";
import Button from "react-bootstrap/Button";
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { useTranslation, Trans } from "react-i18next";
import Calendar from 'react-calendar'

import Form from "react-bootstrap/Form";


class Reservation extends React.Component {

  state = {
    comments: [
      {id: 1, name:"", content: "first comment"},
      {id: 2, name:"", content: "second"},
    ],
    temp: [
      {id:0,name:"d",content:"f"},
    ],
  }

  commentsview = this.state.comments.map(comment => {
    return (
      <div className="container" key={comment.id}>
      <span onClick={() => {
        console.log(comment.id);
        var comments = this.state.comments.filter(commentt => {
          return comment.id !== commentt.id
        });
        this.setState({
          comments
        })
      }}>
        <div className="container bg-warning">
          <h6>{comment.name}:</h6>
          <p className="card-text bg-secondary text-white">{comment.content}</p>
          <br/>
        </div>
      </span>
      </div>
    )
  })

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments !== this.state.comments) {
      console.log('State has changed.')
    }
  }

  render(){
  return (

    <div className="container">
    <br/>
     <br/><br/>

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
<Calendar />

<br/>

<div className="d-flex justify-content">
 <h1 className="text-secondary float-none"><strong><Trans>NumberPlayers</Trans></strong></h1>
</div>
<br/>
<Form>
<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Control type="name" placeholder="0,1,2..." style={{"textAlign":"center"}, {"width":"250px"}} />
</Form.Group>

<br/>
<br/>

</Form>
<br/>
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
  <Form.Control placeholder="Ex: Trudeau"  style={{"textAlign":"center"}, {"width":"250px"}} />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Age</Form.Label>
  <Form.Control placeholder="Age" style={{"textAlign":"center"}, {"width":"250px"}}/>
</Form.Group>
<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Email</Form.Label>
  <Form.Control placeholder="abcd@gmail.com" style={{"textAlign":"center"}, {"width":"250px"}}/>
</Form.Group>
<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label><Trans>PhoneNum</Trans></Form.Label>
  <Form.Control placeholder="XXX-XXX-XXXX" style={{"textAlign":"center"}, {"width":"250px"}}/>
</Form.Group>
<br/>

<Button variant="secondary text-white" type="submit"><Trans>Book</Trans></Button>
<br/>
<br/>

</Form>
<br/>

     </div>
  )};
}

export default Reservation;
