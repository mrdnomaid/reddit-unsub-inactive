let subsToUnsub = [];
let days = 3;

function s(statusMsg) {
  document.getElementById('currently').innerHTML = statusMsg;
  console.info(statusMsg);
}

function show(id) {
  document.getElementById(id).style.display = 'block';
}

function fade(id) {
  document.getElementById(id).style['opacity'] = '0.5';
  document.getElementById(id).style['height'] = '32px';
  document.getElementById(id).style['overflow'] = 'hidden';
}

function calcCode() {
  let unsubString = '';
  let calcLen = subsToUnsub.length;
  let calcCommaB = false;
  let calcComma = '';
  for(stu of subsToUnsub) {
    if(calcCommaB) {
      calcComma = ',';
    }
    unsubString += `${calcComma}'${stu.subreddit}'`;
    calcCommaB = true;
  }
  document.getElementById('unsubCode').value = `
    const toUnsub = [${unsubString}];
    const butts = document.querySelectorAll('[data-sr_name]');

    for(butt of butts) {
      if(toUnsub.indexOf(butt.getAttribute('data-sr_name')) > -1) {
        butt.style['transform'] = 'scale(1.2)';
      }
    }
  `;
}

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    show('firefox');
}
