const { app, BrowserWindow } =  require('electron')

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 1000,
        height: 750,
        title: 'Editor'
    })
    win.loadURL(`file://${__dirname}/index.html`)
})