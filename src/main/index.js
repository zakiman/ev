import {
  app,
  BrowserWindow,
  Menu,
  Tray
} from 'electron'

const path = require('path')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let win, tray
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  // Open the Vue.js devtools
  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension('C:\\Users\\issuser\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\nhdogjmejiglipccpnnnanhbledajbpd\\4.1.4_0')
  }
  // 窗口初始化
  win = new BrowserWindow({
    width: 350,
    height: 350,
    minWidth: 350,
    minHeight: 350,
    frame: false
  })
  win.loadURL(winURL)
  win.on('closed', () => {
    win = null
  })

  // 托盘图标及图标右键菜单
  tray = new Tray(path.join(__dirname, 'app.ico'))
  const contextMenu = Menu.buildFromTemplate([{
    label: '退出',
    click: () => {
      // 因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况
      app.quit()
      app.quit()
    }
  }])

  tray.setToolTip('龙信')
  tray.setContextMenu(contextMenu)

  tray.on('click', () => {
    win.show()
    win.setSkipTaskbar(false)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
