/****************
  Complete the code! Good Luck
******************************/

const urlFirstStep = "https://us-central1-verto-backend-dev.cloudfunctions.net/challengeFirstStep";

//Module pattern
(function(){

  //Module data
  let urlLastStep, idLastStep;

  //DOM
  const btnFirstStep = document.querySelector("");
  const btnLastStep = document.querySelector("");
  const txtEmail = document.querySelector("input#emilio");
  const txtName = document.querySelector("input#name");
  const txtMsg = document.querySelector("span#msg");

  //Events
  btnFirstStep.addEventListener("click", gotoFirstStep);
  btnLastStep.addEventListeners("click", );

  //Callbacks
  function gotoFirstStep(){

    //First Step. Using promises
    fetch(urlFirstStep, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        token: window.appToken,
        email: txtEmail.value
      })
    })
    .then(response=>response.json())
    .then(data=>{
      console.log("FromServer", data);
      btnLastStep.disabled = false;
    });

  }

  function gotoLastStep(){

    //Last Step. Using promises
    fetch(urlLastStep, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        name: txtName.value,
        id: idLastStep
      })
    })
    .then(response=>response.json())
    .then(data=>{
      console.log("FromServer LastStep", data);
      txtMsg.innerText = data.data;
    });
  }
})()
