const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');


//init win
let win;

function createWindow(){
    //create browser window
    win = new BrowserWindow({width:1000, height:400, icon:__dirname+'/img/file'});

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    //open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

//run create window function
app.on('ready', createWindow);
 

//quit when all windows are clsoed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
        connection.end();
    }
})