const {app, BrowserWindow} = require("electron");

let mainWindow = null;

app.on("ready", function() {
	mainWindow = new BrowserWindow({
		width: 400,
		height: 300,
		show: false
	});
	mainWindow.loadURL("file://${ __dirname }/index.html");
	mainWindow.once("ready-to-show", () => {
		mainWindow.show();
	});
	mainWindow.on("closed", function() {
		mainWindow = null;
	});
});
