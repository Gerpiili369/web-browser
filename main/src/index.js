const
    { app, BrowserWindow } = require('electron'),
    path = require('path');
let win;

require('electron-reload')(path.join(__dirname, '..', '..', 'renderer', 'dist', 'bundle.js'));

function createWindow() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, '/preload.js'),
        }
    });
    
    win.loadURL(`file://${ __dirname }/../../renderer/dist/index.html`);
    win.webContents.openDevTools();

    win.on('closed', () => win = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (!win) createWindow();
});
