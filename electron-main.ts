import { app, BrowserWindow } from 'electron';
import { spawn } from 'child_process';
import path from 'path';
import waitOn from 'wait-on';

let nextServerProcess: ReturnType<typeof spawn> | null;
let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  waitOn({ resources: ['http://localhost:3000'] })
    .then(() => {
      mainWindow?.loadURL('http://localhost:3000');
      // Open the DevTools.
      mainWindow?.webContents.openDevTools();
    })
    .catch((err) => {
      console.error('Failed to start Next.js server:', err);
    });
}

function startNextServer() {
  nextServerProcess = spawn('npm', ['run', 'start-next'], {
    shell: true,
    stdio: 'inherit',
  });
}

app.on('ready', () => {
  startNextServer();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (nextServerProcess) {
      nextServerProcess.kill();
    }
    app.quit();
  }
});