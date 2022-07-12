# Rust Overlay
* [General info](#general-info)
* [Instructions](#instructions)

## General info
This is a simple overlay for rust inventory numeration, it's purpose is only as a practice project for external overlays. It is implemented using Electron.
## Instrucciones
At this moment, the only way to run the overlay is by installing node.js and electron. In the future I'll make an installation build for Windows 10 since it is my main OS for deployment. 
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
4. The overlay has three options: close, settings and drag lock.
* Close: closes the program.
* Settings: Opens a child window that provides you with options to change the padding and color of the inventory. When you save your settings you will create a profile, this profile will always be loaded in the mainWindow, so you can keep your changes saved. In the case of the settings, the implementation is still needed so it will appear always with the default values.
* Drag lock: This is the option that will lock and unlock the overlay. When unlocked, you can drag the inventory to any place you want and select any option you want in the overlay `Use the green boxes as a guide to know if the overlay measures the same as the inventory`. Once locked, the overlay will become transparent and mouse input will no longer be recorded by the overlay. At this moment, the only way to interact with the overlay when locking is by opening the overlay and `tab`ing the options previously mentioned. Once you choose agan the drag lock, press enter and mouse input will be accepted again. `This will change in the future, at the moment it is the only way to interact with the overlay.`
