const fs = require('fs');
const ipc = window.require('electron').ipcRenderer;
var path = require('path');

// Function that will be called on click 
// event of "Go to settings window" button
function goToSettingsWindow() {

  // Make sure to do ipc.send('some String'), 
  // where 'some String' must be same with 
  // the first parameter of ipcMain.on() in app.js 
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
    p: (90 * outputP),
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
      containerI.style.gridTemplateColumns = profile.p + "px " + profile.p + "px " + profile.p + "px " + profile.p + "px " + profile.p + "px " + profile.p + "px";
      containerI.style.height = profile.p + "px";
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
