

const keyLayoutEN = [
  {
    0: { value: '`', extra: '~', class: 'Backquote' },
    1: { value: '1', extra: '!', class: 'Digit1' },
    2: { value: '2', extra: '@', class: 'Digit2' },
    3: { value: '3', extra: '#', class: 'Digit3' },
    4: { value: '4', extra: '$', class: 'Digit4' },
    5: { value: '5', extra: '%', class: 'Digit5' },
    6: { value: '6', extra: '^', class: 'Digit6' },
    7: { value: '7', extra: '&', class: 'Digit7' },
    8: { value: '8', extra: '*', class: 'Digit8' },
    9: { value: '9', extra: '(', class: 'Digit9' },
    10: { value: '0', extra: ')', class: 'Digit0' },
    11: { value: '-', extra: '_', class: 'Minus' },
    12: { value: '=', extra: '+', class: 'Equal' },
  },
  {
    0: { value: 'Q', extra: '', class: 'KeyQ' },
    1: { value: 'W', extra: '', class: 'KeyW' },
    2: { value: 'E', extra: '', class: 'KeyE' },
    3: { value: 'R', extra: '', class: 'KeyR' },
    4: { value: 'T', extra: '', class: 'KeyT' },
    5: { value: 'Y', extra: '', class: 'KeyY' },
    6: { value: 'U', extra: '', class: 'KeyU' },
    7: { value: 'I', extra: '', class: 'KeyI' },
    8: { value: 'O', extra: '', class: 'KeyO' },
    9: { value: 'P', extra: '', class: 'KeyP' },
    10: { value: '[', extra: '{', class: 'BracketLeft' },
    11: { value: ']', extra: '}', class: 'BracketRight' },
  },
  {
    0: { value: 'A', extra: '', class: 'KeyA' },
    1: { value: 'S', extra: '', class: 'KeyS' },
    2: { value: 'D', extra: '', class: 'KeyD' },
    3: { value: 'F', extra: '', class: 'KeyF' },
    4: { value: 'G', extra: '', class: 'KeyG' },
    5: { value: 'H', extra: '', class: 'KeyH' },
    6: { value: 'J', extra: '', class: 'KeyJ' },
    7: { value: 'K', extra: '', class: 'KeyK' },
    8: { value: 'L', extra: '', class: 'KeyL' },
    9: { value: ';', extra: ':', class: 'Semicolon' },
    10: { value: "'", extra: '"', class: 'Quote' },
  },
  {
    0: { value: '\\', extra: '|', class: 'Backslash' },
    1: { value: 'Z', extra: '', class: 'KeyZ' },
    2: { value: 'X', extra: '', class: 'KeyX' },
    3: { value: 'C', extra: '', class: 'KeyC' },
    4: { value: 'V', extra: '', class: 'KeyV' },
    5: { value: 'B', extra: '', class: 'KeyB' },
    6: { value: 'N', extra: '', class: 'KeyN' },
    7: { value: 'M', extra: '', class: 'KeyM' },
    8: { value: ',', extra: '<', class: 'Comma' },
    9: { value: '.', extra: '>', class: 'Period' },
    10: { value: '/', extra: '?', class: 'Slash' },
    11: { value: '▲', extra: '', class: 'ArrowUp' },
    13: { value: 'Shift', extra: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', extra: '', class: 'ControlLeft' },
    1: { value: 'Win', extra: '', class: 'MetaLeft' },
    2: { value: 'Alt', extra: '', class: 'AltLeft' },
    3: { value: 'SPACE', extra: '', class: 'Space' },
    4: { value: 'Alt', extra: '', class: 'AltRight' },
    5: { value: 'Ctrl', extra: '', class: 'ControlRight' },
    6: { value: '◄', extra: '', class: 'ArrowLeft' },
    7: { value: '▼', extra: '', class: 'ArrowDown' },
    8: { value: '►', extra: '', class: 'ArrowRight' },
  },
]
const keyLayoutRU = [
  {
    0: { value: 'Ё', extra: '', class: 'Backquote' },
    1: { value: '1', extra: '!', class: 'Digit1' },
    2: { value: '2', extra: '@', class: 'Digit2' },
    3: { value: '3', extra: '#', class: 'Digit3' },
    4: { value: '4', extra: '$', class: 'Digit4' },
    5: { value: '5', extra: '%', class: 'Digit5' },
    6: { value: '6', extra: '^', class: 'Digit6' },
    7: { value: '7', extra: '&', class: 'Digit7' },
    8: { value: '8', extra: '*', class: 'Digit8' },
    9: { value: '9', extra: '(', class: 'Digit9' },
    10: { value: '0', extra: ')', class: 'Digit0' },
    11: { value: '-', extra: '_', class: 'Minus' },
    12: { value: '=', extra: '+', class: 'Equal' },
  },
  {
    0: { value: 'Й', extra: '', class: 'KeyQ' },
    1: { value: 'Ц', extra: '', class: 'KeyW' },
    2: { value: 'У', extra: '', class: 'KeyE' },
    3: { value: 'К', extra: '', class: 'KeyR' },
    4: { value: 'Е', extra: '', class: 'KeyT' },
    5: { value: 'Н', extra: '', class: 'KeyY' },
    6: { value: 'Г', extra: '', class: 'KeyU' },
    7: { value: 'Ш', extra: '', class: 'KeyI' },
    8: { value: 'Щ', extra: '', class: 'KeyO' },
    9: { value: 'З', extra: '', class: 'KeyP' },
    10: { value: 'Х', extra: '', class: 'BracketLeft' },
    11: { value: 'Ъ', extra: '', class: 'BracketRight' },
  },
  {
    0: { value: 'Ф', extra: '', class: 'KeyA' },
    1: { value: 'Ы', extra: '', class: 'KeyS' },
    2: { value: 'В', extra: '', class: 'KeyD' },
    3: { value: 'А', extra: '', class: 'KeyF' },
    4: { value: 'П', extra: '', class: 'KeyG' },
    5: { value: 'Р', extra: '', class: 'KeyH' },
    6: { value: 'О', extra: '', class: 'KeyJ' },
    7: { value: 'Л', extra: '', class: 'KeyK' },
    8: { value: 'Д', extra: '', class: 'KeyL' },
    9: { value: 'Ж', extra: '', class: 'Semicolon' },
    10: { value: 'Э', extra: '', class: 'Quote' },
  },
  {
    0: { value: '\\', extra: '|', class: 'Backslash' },
    1: { value: 'Я', extra: '', class: 'KeyZ' },
    2: { value: 'Ч', extra: '', class: 'KeyX' },
    3: { value: 'С', extra: '', class: 'KeyC' },
    4: { value: 'М', extra: '', class: 'KeyV' },
    5: { value: 'И', extra: '', class: 'KeyB' },
    6: { value: 'Т', extra: '', class: 'KeyN' },
    7: { value: 'Ь', extra: '', class: 'KeyM' },
    8: { value: 'Б', extra: '', class: 'Comma' },
    9: { value: 'Ю', extra: '', class: 'Period' },
    10: { value: '.', extra: ',', class: 'Slash' },
    11: { value: '▲', extra: '', class: 'ArrowUp' },
    13: { value: 'Shift', extra: '', class: 'ShiftRight' },
  },
  {
    0: { value: 'Ctrl', extra: '', class: 'ControlLeft' },
    1: { value: 'Win', extra: '', class: 'MetaLeft' },
    2: { value: 'Alt', extra: '', class: 'AltLeft' },
    3: { value: 'SPACE', extra: '', class: 'Space' },
    4: { value: 'Alt', extra: '', class: 'AltRight' },
    5: { value: 'Ctrl', extra: '', class: 'ControlRight' },
    6: { value: '◄', extra: '', class: 'ArrowLeft' },
    7: { value: '▼', extra: '', class: 'ArrowDown' },
    8: { value: '►', extra: '', class: 'ArrowRight' },
  },
]


const codeSet = {
    ShiftLeft: false,
    ShiftRight: false,
    ControlLeft: false,
    ControlRight: false,
  }
  
  let lang = 'eng'
  let language = keyLayoutEN
  let caps = false
  let capsSwitch = false
  let shiftCaps = false
  let shiftSwitch = false
  let intervalSwitchLang
  let switchedLanguage = false
  
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('lang', lang)
    localStorage.setItem('caps', caps)
  })
  
  window.addEventListener('load', () => {
    if (localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang')
    }
    if (localStorage.getItem('caps') === 'true') {
      caps = true
    }
  })
  
  function writeText(content) {
    const text = document.querySelector('.text')
    const start = text.selectionStart
    const end = text.selectionEnd
    if (caps) {
      content.toUpperCase()
    } else {
      content.toLowerCase()
    }
    text.textContent =
      text.value.substring(0, start) + content + text.value.substring(end)
    text.focus()
    text.setSelectionRange(start + 1, start + 1)
  }
  
  function textUp(e) {
    e.textContent = e.textContent.toLowerCase()
  }
  
  function textLow(e) {
    e.textContent = e.textContent.toUpperCase()
  }
  
  function toUpToLow() {
    let index = 0
    if (!caps) {
      document.querySelectorAll('.value').forEach((el) => {
        index += 1
        if (index < 51) {
          textUp(el)
        }
      })
    } else {
      document.querySelectorAll('.value').forEach((el) => {
        index += 1
        if (index < 51) {
          textLow(el)
        }
      })
    }
  }
  
  