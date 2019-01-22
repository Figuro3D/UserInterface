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

/*     
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jam!46635",
    database: "EPIDatabase"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connection successfully established");
    /*
    connection.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
    
    
    var sql = "INSERT INTO partTest (Part, Result) VALUES ?";
    var values = [
        ['Base Color', 1],
        ['Valve Open Direction', 0],
        ['Valve Closed', 1],
        ['Valve Color', 0],
        ['Warning Label', 1],
        ['Weight Label', 0],
        ['Product Serial Number', 1],
        ['Screws Inserted', 0],
        ['Fitting', 1],
        ['Lid', 0],
        ['Tank Size', 1]
    ];

    
    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
    

    connection.end(() => {
        console.log("Connection successfully Closed.");
    });
});
 */
//quit when all windows are clsoed
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
        connection.end();
    }
})