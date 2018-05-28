import {
  app,
  BrowserWindow,
  Menu,
  Tray,
  ipcMain as ipc
} from 'electron'

const path = require('path')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWin, settingWin, tray
const mainURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`
const settingURL = process.env.NODE_ENV === 'development' ? 'http://localhost:9080/#/settings' : `file://${__dirname}/index.html#settings`

function createWindow() {
  // Open the Vue.js devtools
  if (process.env.NODE_ENV === 'development') {
    BrowserWindow.addDevToolsExtension('C:\\Users\\issuser\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\nhdogjmejiglipccpnnnanhbledajbpd\\4.1.4_0')
  }
  // 窗口初始化
  mainWin = new BrowserWindow({
    width: 350,
    height: 350,
    minWidth: 350,
    minHeight: 350,
    webPreferences: {
      webSecurity: false
    },
    frame: false
  })
  mainWin.loadURL(mainURL)
  mainWin.on('closed', () => {
    mainWin = null
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
    mainWin.show()
    mainWin.setSkipTaskbar(false)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWin === null) {
    createWindow()
  }
})

// 设置
ipc.on('settings', (event, arg) => {
  settingWin = new BrowserWindow({
    width: 478,
    height: 601,
    webPreferences: {
      webSecurity: false
    },
    frame: false
  })
  settingWin.loadURL(settingURL)

  settingWin.on('close', function () {
    settingWin = null
  })
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