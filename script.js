//console.log (document.getElementById('my-form'))
/*
document.getElementById('name');
document.getElementById('situp');
 document.getElementById('run');
 document.getElementById('submit');*/

//ocument.addEventListeneraddEventListener('submit',onsubmit);

/*
document.addEventListener('submit', function(event) {
    // Random quote of the day generator
    function onsubmit() {
        document.getElementById('name')

    if(name.value === '' ){
        msg.classlist.add('error');
        msg.innerhtml = 'please enter value';
    
    }
    else {
        console.log ('sucess');
    
    }}}

    
    
)

onsubmit()
*/

document.addEventListener("submit", function (event) {
  event.preventDefault();
  function validateForm() {
    var inputname = document.getElementById("inputname").value;
    var inputpushup = document.getElementById("inputpushup").value;
    var inputsitup = document.getElementById("inputsitup").value;
    var inputrun = document.getElementById("inputrun").value;

    if (
      inputname === "" ||
      inputpushup === "" ||
      inputsitup === "" ||
      inputrun === ""
    ) {
      alert("Empty feild must be filled out");
    }
  }

  validateForm();

  function changeBodyBgColor() {
    document.getElementById("my-form").style.backgroundColor = "#9bbc57";
  }
  changeBodyBgColor();

  function validatescore() {
    console.log("I'm working")
    var pushup = document.getElementById("inputpushup").value;
    var situp = document.getElementById("inputsitup").value;
    var run = document.getElementById("inputrun").value;
    var red = document.getElementById("red");
    var yellow = document.getElementById("yellow");
    var green = document.getElementById("green");

    if (
      parseInt(pushup) > 60 &&
      parseInt(situp) > 60 &&
      parseInt(pushup) &&
      parseInt(run) < 16
    ) {
      green.setAttribute("style", "background-color: green;");
      //green.style.backgroundColor = "blue"

      //green.radio.setAttribute('checked', '')}
    } else if (
      parseInt(pushup) > 60 &&
      parseInt(situp) < 60 &&
      parseInt(pushup) &&
      parseInt(run) < 16
    ) {
      yellow.setAttribute("style", "background-color: yellow;");
    } else {
      red.setAttribute("style", "background-color: red;");
    }
  }

  validatescore();

  /*
    
    if ((inputname =! '')){
    if (parseInt(pushup)  >60 && parseInt(situp)>60 && parseInt(pushup) && parseInt(run)<16)
       green.style.setAttribute("backgroundColor", "green");
        //green.style.backgroundColor = "blue";
    
    //green.setAttribute('checked', '')}

    if (parseInt(pushup)  >60 && parseInt(situp)<60 && parseInt(pushup) && parseInt(run)<16) 
         yellow.setAttribute("style", "background-color: yellow;");
    
       
     if (parseInt(pushup)  <60 && parseInt(situp)<60 && parseInt(pushup) && parseInt(run)>16)
        red.setAttribute("style", "background-color: red;");
    
    }}

//validatescore();*/
});
