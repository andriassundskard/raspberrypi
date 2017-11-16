const {app, BrowserWindow} = require("electron");

let mainWindow = null;

// Remove top menu
app.on('browser-window-created',function(e,window) {
	window.setMenu(null);
});

app.on("ready", function() {
	mainWindow = new BrowserWindow({
		show: false
	});
	mainWindow.loadURL("file://${ __dirname }/index.html");
	mainWindow.once("ready-to-show", () => {
		mainWindow.maximize();
		mainWindow.show();
	});
	mainWindow.on("closed", function() {
		mainWindow = null;
	});
});
