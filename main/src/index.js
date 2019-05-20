const
    { app, BrowserWindow } = require('electron'),
    path = require('path');
let win = null;

require('electron-reload')(path.join(__dirname, '..', '..', 'renderer', 'dist', 'bundle.js'));

/**
 * Crates new window
 */
function createWindow() {
    win = new BrowserWindow({
        frame: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadURL(`file://${ __dirname }/../../renderer/dist/index.html`);
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (!win) createWindow();
});
