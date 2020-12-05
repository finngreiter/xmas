const { app, BrowserWindow } = require('electron');

let win;

function xmw() {
  win = new BrowserWindow({
    width: 500,
    height: 300,
    resizable: false,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile('vw/index.html');
}

app.whenReady().then(() => {
  xmw();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) xmw();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
