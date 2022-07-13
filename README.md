# Rust Overlay
* [General info](#general-info)
* [Installation](#installation)
* [Instructions](#instructions)
* [Sources](#sources)

## General info
This is a simple overlay for rust inventory numeration, it's purpose is only as a practice project for external overlays. It is implemented using Electron.

## Installation
There are three main ways to use this application.
### Running the app with Node.
This requires you to have node and electron installed in your system. For additional information visit: 
* Windows: https://www.techomoro.com/how-to-install-and-set-up-electron-on-windows-10/
* Linux: https://www.techomoro.com/how-to-install-and-set-up-electron-on-ubuntu-19-04-disco-dingo/
* Mac: https://www.youtube.com/watch?v=5NQ-NbjLLMw
1. Clone the repository.
```
$ git clone https://github.com/gonnaflick/Rust-Overlay.git
```
2. Install all the dependencies.
```
$ npm install
```
3. Start the overlay.
```
$ npm start
```
* Note: The main beneffit or running the application like this is that you get to modify it as you like, add features or remove them depending on your use and run it easily without much work.*

### Build the app and run it as an executable.
This requires you to have node and electron installed in your system. For additional information visit: 
* Windows: https://www.techomoro.com/how-to-install-and-set-up-electron-on-windows-10/
* Linux: https://www.techomoro.com/how-to-install-and-set-up-electron-on-ubuntu-19-04-disco-dingo/
* Mac: https://www.youtube.com/watch?v=5NQ-NbjLLMw
The additional files needed to build the app are already found in the repository.

1. Clone the repository.
```
$ git clone https://github.com/gonnaflick/Rust-Overlay.git
```
2. Install all the dependencies.
```
$ npm install
```
3. Install electron packager.
```
$ npm install electron-packager
```
#### MacOS
4. Run the package.
```
$ npm run package-mac
```
#### Windows 10
4. Run the package.
```
$ npm run package-win
```
#### Linux (only tested on Ubuntu)
```
$ npm run package-linux
```
### Use the installer
This is the best way to install it if you don't want to configure anything.
1. Download the installer from the following link.
https://drive.google.com/drive/folders/1rda5_wwNZDh7TKwfHvgs423672IqnKax?usp=sharing
2. Unzip it and enter to the folder that contains your OS's name on the folder. (At this moment, only the Windows 10 installer is available).
3. Run the installer.
4. Select your installation folder. `REMEMBER TO CREATE FIRST A FOLDER THEN SELECT THAT FOLDER`
5. Wait for the installation to finish, a shorcut should appear on both the start menu and desktop.
## Instructions
The overlay has three options: close, settings and drag lock.
* **Close:** Closes the program. This also applies for the settings menu.
* **Settings:** Opens a child window that provides you with options to change the padding and color of the inventory. When you save your settings you will create a profile, this profile will always be loaded in the mainWindow, so you can keep your changes saved. In the case of the settings, the implementation is still needed so it will appear always with the default values.
* **Drag lock:** This is the option that will lock and unlock the overlay. When unlocked, you can drag the inventory to any place you want and select any option you want in the overlay `Use the green boxes as a guide to know if the overlay measures the same as the inventory`. Once locked, the overlay will become transparent and mouse input will no longer be recorded by the overlay. At this moment, the only way to interact with the overlay when locking is by opening the overlay and `tab`ing the options previously mentioned. Once you choose agan the drag lock, press enter and mouse input will be accepted again. `This will change in the future, at the moment it is the only way to interact with the overlay.`

## Sources
* https://www.christianengvall.se/electron-packager-tutorial/
* https://www.christianengvall.se/electron-windows-installer/
* https://ourcodeworld.com/articles/read/927/how-to-create-a-msi-installer-in-windows-for-an-electron-framework-application
* https://www.youtube.com/watch?v=zWuuk_j1iwM&list=LL&index=4&t=587s
* https://github.com/felixrieseberg/electron-wix-msi
* https://www.youtube.com/watch?v=KDVahubc_54
