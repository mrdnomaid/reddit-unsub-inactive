function showToUnsub() {
  // Clear the pill list container and set the correct length
  document.getElementById('toUnsub').innerHTML = '';
  document.getElementById('toUnsubLength').innerHTML = subsToUnsub.length;

  for (uSub of subsToUnsub) {
    // Add a list item "pill" for every subreddit
    document.getElementById('toUnsub').innerHTML += `<li>${uSub.subreddit} <span>${parseInt(uSub.since / 86400)}d</span> <i class="fas fa-times-circle" onclick="removeSub('${uSub.subreddit}')"></i></li>`;
  }
}

function removeSub(removeMe) {
  subsToUnsub = subsToUnsub.filter(e => e.subreddit !== removeMe);
  showToUnsub();
  calcCode();
}
