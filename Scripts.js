var button, carRed, carBlue, tablet, winn, buttonAccept, txtRed, txtBlue, nameRed, nameBlue;
var initRed = 20;
var initBlue = 20;
var campione = false;
var ready = false;

button = document.querySelector('.js-start-button');
carRed = document.querySelector('.js-carRed');
carBlue = document.querySelector('.js-carBlue');
tablet = document.querySelector('.js-tablet');
winner = document.querySelector('.js-winner'); 
buttonAccept = document.querySelector('.js-button');
txtRed = document.querySelector('.js-name-red');
txtBlue = document.querySelector('.js-name-blue');

buttonAccept.addEventListener('click', function() {
  nameRed = txtRed.value;
  nameBlue = txtBlue.value;

  if(nameRed == "") {
    alert('El campo nombre del carro rojo es obligatorio');
    txtRed.focus();
  } else if(nameBlue == "") {
    alert('El campo nombre del carro azul es obligatorio');
    txtBlue.focus();
  } else {
    deshabilitarRegistro();   
  }
});

function deshabilitarRegistro() {
  ready = true;
  txtRed.disabled = true;
  txtBlue.disabled = true;
  buttonAccept.disabled = true;
  buttonAccept.style.backgroundColor = "gray";
}

function habilitarRegistro() {
  ready = false;
  txtRed.disabled = false;
  txtBlue.disabled = false;
  buttonAccept.disabled = false;
  buttonAccept.style.backgroundColor = "#79c428";
}


button.addEventListener('click', function() {
  document.getElementById("Tablero").classList.remove("bounceInLeft");
  carRed.style.left = '20px';
  initRed = 20;
  carBlue.style.left = '20px';
  initBlue = 20;
  tablet.style.visibility = "hidden";
  campione = false;
  habilitarRegistro();
  if(txtRed.value == "") {
    txtRed.focus();
  } else if(txtBlue.value == "") {
    txtBlue.focus();
  } else {
    buttonAccept.focus();
  }
});


document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  //alert('keypress event\n\n' + 'key: ' + keyName);

    if(((keyName == 'a') || (keyName == 'A')) && (campione == false) && (ready == true)) {
      if(initRed < 1100) {
        initRed += 10;
        carRed.style.left = initRed + 'px';
      } 
    }

    if(((keyName == 'l') || (keyName == 'L')) && (campione == false) && (ready == true)) {
      if(initBlue < 1100) {
        initBlue += 10;
        carBlue.style.left = initBlue + 'px';
      }
    }

    if((initRed == 1100) && (initBlue < 1100)) {
      tablet.style.visibility = 'visible';
      winner.innerHTML = "The Winner:<br />" + txtRed.value;
      document.getElementById("Tablero").classList.add("bounceInLeft");
      campione = true;
      button.focus();
    }

    if((initBlue == 1100) && (initRed < 1100)) {
      tablet.style.visibility = 'visible';
      winner.innerHTML = "The Winner:<br />" + txtBlue.value;
      console.log("llego");
      document.getElementById("Tablero").classList.add("bounceInLeft");
      campione = true;
      button.focus();
    }

    });






  // var left = carRed.style.left == '' ? 0 : carRed.style.left;
  //   if (typeof left === 'string') {
  //     left = left.replace('px','');
  //   }
  //   left = left * 1;
  //   left = left + 50;
  //   carRed.style.left = left + 'px';






// var button, input, title;

// button = document.querySelector('.js-button');
// input = document.querySelector('.js-input');
// title = document.querySelector('.js-title');

// button.addEventListener('click', function(){
//   title.innerHTML = input.value;
//   title.style.backgroundColor = "blue";
// });