const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');
let mainWindow;

// Function to create independent window or main window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 625,
    height: 140,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const {ipcMain} = require('electron')
  ipcMain.on('close-me', (evt, arg) => {
    app.quit()
  })
  mainWindow.setAlwaysOnTop(true, 'screen');
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

// Function to create child window of parent one
function createChildWindow() {
  childWindow = new BrowserWindow({
    width: 430,
    height: 550,
    modal: true,
    show: false,
    transparent: true,
    resizable: false,
    frame: false,
    autoHideMenuBar: true,

    // Make sure to add webPreferences with below configuration
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // Child window loads settings.html file
  childWindow.loadFile(path.join(__dirname, 'settings.html'));

  childWindow.once("ready-to-show", () => {
    childWindow.show();
  });


// Attach event listener to event that requests to update something in the second window
// from the first window
childWindow.on('request-update-prgb', (event, arg) => {
  // Request to update the label in the renderer process of the second window
  mainWindow.webContents.send('update-prgb', arg);
});
}


ipcMain.on("openChildWindow", (event, arg) => {
  createChildWindow();
});

ipcMain.on("closeChildWindow", (event, arg) => {
  childWindow.close();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
