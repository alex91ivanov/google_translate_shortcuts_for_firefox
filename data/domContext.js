var click = {
  mouseover: new MouseEvent('mouseover'),
  mousedown: new MouseEvent('mousedown'),
  mouseup: new MouseEvent('mouseup'),
  mouseout: new MouseEvent('mouseout')
};

function emulateClick(thisElement) {
  for (i in click) {
    thisElement.dispatchEvent(click[i]);
  }
}

window.addEventListener('keydown', function swapLanguage(e) {
    console.log(e);
    if (e.altKey) {
      e.preventDefault();
      switch (e.keyCode) {
        case 68:
          // [alt]+[d] - switch language
          emulateClick(document.getElementById('gt-swap'));
          emulateClick(document.querySelectorAll('span.jfk-button-img')[1]);
          break;
        case 75:
          // [alt]+[k] - remove text
          emulateClick(document.getElementById('gt-clear'));
          emulateClick(document.querySelectorAll('span.jfk-button-img')[2]);
          break;
        case 76:
          // [alt]+[l] - listen audio sample
          emulateClick(document.getElementById('gt-src-listen'));
          emulateClick(document.querySelectorAll('jfk-button-img')[4]);
          break;
      }
    }
  },
  true);
