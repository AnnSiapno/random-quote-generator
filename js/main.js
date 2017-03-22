$(document).ready(function() {

	var quote = [
	"Don't cry because it's over. Smile because it happened.",
	"The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
	"Adults are just outdated children.",
	"Today you are you, that is truer than true. There is no one alive who is you'er than you.",
	"Oh the places you'll go. Today is your day! Your mountain is waiting. So... Get on your way!",
	"Be who you are and say how you feel, because those who mind don't matter and those who matter don't mind.",
	"Today I shall behave, as if this is the day I will be remembered.",
	"Today was good. Today was fun. Tomorrow is another one.",
	"Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.",
	"Sometimes the questions are complicated and the answers are simple.",
	];

  var number;
      number = Math.floor(Math.random() * 10);
     $("#quote").html('"' + quote[number] + '"');
     $("#source").html("- DR. SEUSS");

	// GENERATES A NEW RANDOM QUOTE

	$("#button").on("click", function(ev){
    	number = Math.floor(Math.random() * 10);
     $("#quote").html('"' + quote[number] + '"');
     $("#source").html("- DR. SEUSS");

     // FOR THE TWEET BUTTON

    var tweet = '"' + quote[number] + '"' + "- DR. SUESS";

         ev.preventDefault();
    // Remove existing iframe
    $('#tweetBtn iframe').remove();
    // Generate new markup
    var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-url', 'http://annsiapno.com')
        .attr('data-text', tweet);
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
});

    });
