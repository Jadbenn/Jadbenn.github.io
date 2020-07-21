import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation, Trans } from "react-i18next";

import ReactDOM from 'react-dom';

import Calendar from 'react-calendar'



class About extends React.Component {
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
 <h1 className="text-secondary float-none"><strong>Players number</strong></h1>
</div>
<br/>
<Form>
<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Control type="name" placeholder="0,1,2..." style={{"textAlign":"center"}, {"width":"250px"}} />
</Form.Group>

<Button variant="secondary text-white" type="submit">Search players</Button>
<br/>
<br/>

</Form>
<br/>
<br/>

<div className="d-flex justify-content">
 <h1 className="text-secondary float-none"><strong>Add information</strong></h1>
</div>
<br/>
<Form>
<Form.Group controlId="exampleForm.ControlInput1">
  <Form.Label>First name</Form.Label>
  <Form.Control type="name" placeholder="Firstname" style={{"textAlign":"center"}, {"width":"250px"}} />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Last name</Form.Label>
  <Form.Control placeholder="Lastname"  style={{"textAlign":"center"}, {"width":"250px"}} />
</Form.Group>

<Form.Group controlId="exampleForm.ControlTextarea1">
  <Form.Label>Age</Form.Label>
  <Form.Control placeholder="Age" style={{"textAlign":"center"}, {"width":"250px"}}/>
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
  )};
}

export default About;
