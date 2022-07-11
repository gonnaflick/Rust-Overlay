function dragStatus() {
  var num1 = document.getElementById('container1');
  var num2 = document.getElementById('container2');
  var num3 = document.getElementById('container3');
  var num4 = document.getElementById('container4');
  var num5 = document.getElementById('container5');
  var num6 = document.getElementById('container6');
  var containerAll = document.getElementById('containerAll');
  var containerIT = document.getElementById('containerIT');
  var containerD = document.getElementById('containerD');
  var iconD = document.getElementById('iconD');
  var textD = document.getElementById('textD');
  var buttonD = document.getElementById('buttonD');
  var buttonS = document.getElementById('buttonS');
  var buttonC = document.getElementById('buttonC');

  if (containerIT.classList.contains('unlockStatus')) {
    containerAll.style.border = "0px solid rgb(0, 0, 0)";
    num1.style.border = "0px solid rgb(0, 255, 0)";
    num2.style.border = "0px solid rgb(0, 255, 0)";
    num3.style.border = "0px solid rgb(0, 255, 0)";
    num4.style.border = "0px solid rgb(0, 255, 0)";
    num5.style.border = "0px solid rgb(0, 255, 0)";
    num6.style.border = "0px solid rgb(0, 255, 0)";
    containerIT.className = "lockStatus";
    containerD.className = "lockStatus";
    buttonD.classList.remove("unlockbuttonD");
    buttonD.classList.add("lockbuttonD");
    buttonC.classList.remove("unlockButton");
    buttonC.classList.add("lockButton");
    buttonS.classList.remove("unlockButton");
    buttonS.classList.add("lockButton");
    iconD.className = "fa fa-lock";
    textD.style.color = "red";
    textD.innerHTML = "Drag locked";
  } else {
    num1.style.border = "1px solid rgb(0, 255, 0)";
    num2.style.border = "1px solid rgb(0, 255, 0)";
    num3.style.border = "1px solid rgb(0, 255, 0)";
    num4.style.border = "1px solid rgb(0, 255, 0)";
    num5.style.border = "1px solid rgb(0, 255, 0)";
    num6.style.border = "1px solid rgb(0, 255, 0)";
    containerAll.style.border = "2px solid rgb(0, 0, 0)";
    containerIT.className = "unlockStatus";
    containerD.className = "unlockStatus";
    buttonD.classList.remove("lockbuttonD");
    buttonD.classList.add("unlockbuttonD");
    buttonC.classList.remove("lockButton");
    buttonC.classList.add("unlockButton");
    buttonS.classList.remove("lockButton");
    buttonS.classList.add("unlockButton");
    iconD.className = "fas fa-lock-open";
    textD.style.color = "rgb(0, 255, 0)";
    textD.innerHTML = "Drag unlocked";
  }
}

function settingsLabels() {
  var sliderP = document.getElementById("rangeP");
  var sliderR = document.getElementById("rangeR");
  var sliderG = document.getElementById("rangeG");
  var sliderB = document.getElementById("rangeB");
  var outputP = document.getElementById("padding");
  var outputR = document.getElementById("red");
  var outputG = document.getElementById("green");
  var outputB = document.getElementById("blue");
  var outputBox = document.getElementById("colorBox");
  outputP.innerHTML = sliderP.value;
  outputR.innerHTML = sliderR.value;
  outputG.innerHTML = sliderG.value;
  outputB.innerHTML = sliderB.value;
  outputBox.style.backgroundColor = 'rgb(' + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ')';

  sliderP.oninput = function () {
    outputP.innerHTML = this.value;
  }
  sliderR.oninput = function () {
    outputR.innerHTML = this.value;
    outputBox.style.backgroundColor = 'rgb(' + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ')';
  }
  sliderG.oninput = function () {
    outputG.innerHTML = this.value;
    outputBox.style.backgroundColor = 'rgb(' + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ')';
  }
  sliderB.oninput = function () {
    outputB.innerHTML = this.value;
    outputBox.style.backgroundColor = 'rgb(' + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ')';
  }
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}