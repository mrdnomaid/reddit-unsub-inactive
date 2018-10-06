function checkSub(subreddit, index, total) {
  subreddit = subreddit.replace('https://www.reddit.com/r/','').replace('https://old.reddit.com/r/','').replace('https://reddit.com/r/','');
  s(`Queuing <b>${subreddit}</b> (${index + 1}/${total})`);
  let now = parseInt(Date.now() / 1000);
  $.getJSON(`https://reddit.com/r/${subreddit}/new.json?limit=1&jsonp=?`, function(d) {
    s(`Received <b>${subreddit}</b> (${index + 1}/${total})`);

    let last = d['data']['children']['0']['data']['created'];
    let since = now - last;

    // console.log(`--------------------\n${subreddit}:`);
    // console.log(`now: ${now}`);
    // console.log(`last post: ${last}`);
    // console.log(`since last: ${since}`);
    // console.log(`thresh: ${days}`);

    if (since > days) {
      s(`Adding <b>${subreddit}</b> (${index + 1}/${total})`);
      subsToUnsub.push({subreddit,since});
      showToUnsub();
    }


    if ((index + 1) == total) {
      calcCode();
      show('step4');
      fade('step2');
      window.location.hash = 'step4';
    }
  });
}
