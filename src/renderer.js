const fs = require('fs');
const ipc = window.require('electron').ipcRenderer;
var path = require('path');

function goToSettingsWindow() {
  ipc.send('openChildWindow');
}

function closeWindow() {
  ipc.send('closeChildWindow');
}

function closeMainWindow() {
  ipc.send('close-me');
}

function savecloseWindow() {
  var sliderP = document.getElementById("rangeP");
  var sliderR = document.getElementById("rangeR");
  var sliderG = document.getElementById("rangeG");
  var sliderB = document.getElementById("rangeB");
  var outputP = sliderP.value;
  var outputR = sliderR.value;
  var outputG = sliderG.value;
  var outputB = sliderB.value;

  // Some data that will be sent to the main process
  let Data = {
    r: outputR,
    g: outputG,
    b: outputB,
    p: outputP,
  };

  // Trigger the event listener action to this event in the renderer process and send the data

  fs.writeFileSync(path.resolve(__dirname, 'profile.json'), JSON.stringify(Data));
  ipc.send('closeChildWindow');
};

function readFile() {
  var num1 = document.getElementById("1");
  var num2 = document.getElementById("2");
  var num3 = document.getElementById("3");
  var num4 = document.getElementById("4");
  var num5 = document.getElementById("5");
  var num6 = document.getElementById("6");
  var num6 = document.getElementById("6");
  var containerI = document.getElementById("containerI");
  var containerD = document.getElementById("containerD");
  var containerIT = document.getElementById("containerIT");
  var containerAll= document.getElementById("containerAll");
  var textD = document.getElementById('textD');
  var textA = document.getElementById('textA');
  var buttonS = document.getElementById('buttonS');
  var buttonC = document.getElementById('buttonC');
  var buttonD = document.getElementById('buttonD');

  fs.readFile(path.resolve(__dirname, 'profile.json'), "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const profile = JSON.parse(jsonString);

      num1.style.color = 'rgb(' + profile.r + ',' + profile.g + ',' + profile.b + ')';
      num2.style.color = 'rgb(' + profile.r + ',' + profile.g + ',' + profile.b + ')';
      num3.style.color = 'rgb(' + profile.r + ',' + profile.g + ',' + profile.b + ')';
      num4.style.color = 'rgb(' + profile.r + ',' + profile.g + ',' + profile.b + ')';
      num5.style.color = 'rgb(' + profile.r + ',' + profile.g + ',' + profile.b + ')';
      num6.style.color = 'rgb(' + profile.r + ',' + profile.g + ',' + profile.b + ')';
      containerI.style.gridTemplateColumns = profile.p*90 + "px " + profile.p*90 + "px " + profile.p*90 + "px " + profile.p*90 + "px " + profile.p*90 + "px " + profile.p*90 + "px";
      containerI.style.height = profile.p*90 + "px";
      containerI.style.columnGap = profile.p*6 + "px";
      containerI.style.width = profile.p*605 + "px";
      containerD.style.gridTemplateColumns = profile.p*289 + "px " + profile.p*289 + "px";
      containerD.style.height = profile.p*25 + "px";
      containerD.style.width = profile.p*605 + "px";
      containerIT.style.gridTemplateColumns = profile.p*575 + "px " + profile.p*30 + "px";
      containerIT.style.height = profile.p*90 + "px";
      containerIT.style.columnGap = profile.p*5 + "px";
      containerIT.style.width = profile.p*605 + "px";
      containerAll.style.width = profile.p*605 + "px";
      containerAll.style.height = profile.p*115 + "px";
      textD.style.fontSize = profile.p*14 + "px";
      textA.style.fontSize = profile.p*12 + "px";
      buttonS.style.fontSize = profile.p*12 + "px";
      buttonS.style.width = profile.p*22 + "px";
      buttonS.style.height = profile.p*22 + "px";
      buttonC.style.fontSize = profile.p*12 + "px";
      buttonC.style.width = profile.p*22 + "px";
      buttonC.style.height = profile.p*22 + "px";
      buttonD.style.fontSize = profile.p*12 + "px";
      buttonD.style.width = profile.p*22 + "px";
      buttonD.style.height = profile.p*22 + "px";
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
}

function readSettings() {
  var sliderP = document.getElementById("rangeP");
  var sliderR = document.getElementById("rangeR");
  var sliderG = document.getElementById("rangeG");
  var sliderB = document.getElementById("rangeB");
  var outputP = document.getElementById("padding");
  var outputR = document.getElementById("red");
  var outputG = document.getElementById("green");
  var outputB = document.getElementById("blue");
  var outputBox = document.getElementById("colorBox");

  fs.readFile(path.resolve(__dirname, 'profile.json'), "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const profile = JSON.parse(jsonString);
      outputP.innerHTML = profile.p/90;
      outputR.innerHTML = profile.r;
      outputG.innerHTML = profile.g;
      outputB.innerHTML = profile.b; 
      sliderP.value = profile.p/90;
      sliderR.value = profile.r;
      sliderG.value = profile.g;
      sliderB.value = profile.b;
      outputBox.style.backgroundColor = 'rgb(' + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ')';
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
}

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
    buttonD.innerHTML = "&#x1F513;&#xFE0E;";
    textD.style.color = "red";
    textD.innerHTML = "Drag locked";
    ipc.send('mouseLock');
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
    buttonD.innerHTML = "&#128274;&#xFE0E;";
    textD.style.color = "rgb(0, 255, 0)";
    textD.innerHTML = "Drag unlocked";
    ipc.send('mouseUnlock');
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