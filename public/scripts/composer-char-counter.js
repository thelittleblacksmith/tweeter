$(document).ready(function() {
  const charCounter = function() {
    const tweetLength = $(this).val().length;
    const $counter = $(this).siblings(".counter");
    $counter.text(140 - tweetLength);
    $counter.toggleClass("error", tweetLength >= 140);
  };

  $("#newTweetForm textarea").on("keyup change", charCounter);
});
