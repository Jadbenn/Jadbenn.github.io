import React from "react";
import Button from "react-bootstrap/Button";
import { useTranslation, Trans } from "react-i18next";

function handleSubmit(event) {
  event.preventDefault();
  var number =  document.getElementById("number");
  var cvc =  document.getElementById("cvc");
  var date =  document.getElementById("date2");
  console.log(cvc);
  if (number.value === "" || cvc.value === "" || date.value === ""){
    alert("Purchase failed!")
  }
  else {
  var serial = ""
  var n=0;
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      n = Math.floor(Math.random() * 10);
      console.log(n);
      serial += n.toString();
  }
  serial += "-";
  }
  alert("Successful! Your game key is: " + serial.substring(0,serial.length-1));
  number.value="";
  cvc.value="";
  date.value="";
}
}




function Rates() {
  return (
<div className="container">
<div className="container">
    <div className="">
    <div className=""> <br/>
      <h2 className=""><strong><Trans>Balls</Trans></strong></h2>

        <h4 className=""><strong><Trans>Soccer</Trans></strong></h4>
    </div>
        <div className="">
            <img src={require('./img/soccer.jpg')} height="600px" width="1000px" />
        </div>
        <div className=""> <br/>
            <label className=""><strong><Trans>Prices</Trans></strong></label><p>100$ = 1hr<br/>200$ = 3hr<br/>50$ = extra heure<br/></p>
        </div>

    </div>
</div><br/>


<div className="container">
    <div className="">
    <div className=""> <br/>
        <h4 className=""><strong>Basketball</strong></h4>
    </div>
        <div className="">
            <img src={require('./img/basket.jpg')} height="600px" width="1000px" />
        </div>
        <div className=""> <br/>
            <label className=""><strong><Trans>Prices</Trans></strong></label><p>100$ = 1hr<br/>200$ = 3hr<br/>50$ = extra heure<br/></p>
        </div>

    </div>
</div><br/><div className="container">
    <div className="">
    <div className=""> <br/>
        <h4 className=""><strong>Badminton</strong></h4>
    </div>
        <div className="">
            <img src={require('./img/badminton.jpg')} height="600px" width="1000px" />
        </div>
        <div className=""> <br/>
            <label className=""><strong><Trans>Prices</Trans></strong></label><p>100$ = 1hr<br/>200$ = 3hr<br/>50$ = extra heure<br/></p>
        </div>

    </div>
</div><br/><div className="container">
    <div className="">
    <div className=""> <br/>
        <h4 className=""><strong>Rugby</strong></h4>
    </div>
        <div className="">
            <img src={require('./img/rugby.jpg')} height="600px" width="1000px" />
        </div>
        <div className=""> <br/>
            <label className=""><strong><Trans>Prices</Trans></strong></label><p>100$ = 1hr<br/>200$ = 3hr<br/>50$ = extra heure<br/></p>
        </div>

    </div>
</div><br/>


  </div>
  );
}

export default Rates;
