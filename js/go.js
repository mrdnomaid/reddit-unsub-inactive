function doTheThing(url) {
  show('step2');

  // Convert days to seconds
  days = parseInt(document.getElementById('daysThreshold').value * 86400);

  if (url.length < 5) { // Easier than checking if there's anything there at all
    s('<b>ERROR:</b> Please enter a URL and try again!')
  } else {
    s('URL entered: Checking!');
    let subs = url.replace('https://www.reddit.com/r/','').replace('https://old.reddit.com/r/','').replace('https://reddit.com/r/','').split('+');

    if (subs.length < 0) {
      s('Found <b>no subreddits</b>, do you have the right URL?')
    } else {
      s(`Found <b>${subs.length}</b> subreddits`);
      fade('step1');
      show('step3');

      // Loop through every subreddit in the array and run checkSub on it.
      for (let i = 0; i < subs.length; i++) { // (Old-style for-loop here to make sure every subreddit is actually checked)
        window.setTimeout(function() {
          checkSub(subs[i], i, subs.length);
        }, i * 100);
      }
    }
  }
}
