const currentWin = require('electron').remote.getCurrentWindow()

export function resizeWin(w, h) {
  currentWin.setSize(w, h)
  currentWin.center()
  currentWin.show()
}

export function hideWin() {
  currentWin.hide()
}
