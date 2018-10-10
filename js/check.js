function checkSub(subreddit, index, total) {
  // Get rid of the reddit URLs
  subreddit = subreddit.replace('https://www.reddit.com/r/','').replace('https://old.reddit.com/r/','').replace('https://reddit.com/r/','');
  s(`Queuing <b>${subreddit}</b> (${index + 1}/${total})`);
  let now = parseInt(Date.now() / 1000);
  // Get the last post from the requested subreddit
  $.getJSON(`https://reddit.com/r/${subreddit}/new.json?limit=1&jsonp=?`, function(d) {
    s(`Received <b>${subreddit}</b> (${index + 1}/${total})`);

    let last = d['data']['children']['0']['data']['created']; // The creation date of the post
    let since = now - last; // Time since

    // console.log(`--------------------\n${subreddit}:`);
    // console.log(`now: ${now}`);
    // console.log(`last post: ${last}`);
    // console.log(`since last: ${since}`);
    // console.log(`thresh: ${days}`);

    if (since > days) {
      s(`Adding <b>${subreddit}</b> (${index + 1}/${total})`);
      // Add the subreddit name and the time since last post to the array
      subsToUnsub.push({subreddit,since});
      showToUnsub();
    }

    // If we're on the last itteration show step 4 and "generate" the code
    if ((index + 1) == total) {
      calcCode();
      show('step4');
      fade('step2');
    }
  });
}
