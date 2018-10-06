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
  let codeString = '';

  let i = 0;
  for(stu of subsToUnsub) {
    i++;
    codeString += `window.setTimeout(function(){document.querySelector('[data-sr_name="${stu.subreddit}"]').children[0].click();console.info('Tried to unsubscribe from ${stu.subreddit} (${i+1}/${subsToUnsub.length})')},${i*1000});`;
  }

  document.getElementById('unsubCode').value = codeString.replace(/\n/g,'');
}

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    show('firefox');
}
