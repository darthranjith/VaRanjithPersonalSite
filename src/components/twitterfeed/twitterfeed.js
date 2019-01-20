import React, { Component } from 'react';

var twitterFetcher = require('twitter-fetcher');

class TwitterFeed extends Component {
    componentDidMount = () => {
        var latest_tweets = document.getElementById('latest-tweets'); 
		if(latest_tweets) {
			var config = {
			  "profile": {"screenName": "varanjith"},
			  "domId": '',
			  "maxTweets": 1,
			  "enableLinks": true,
			  "showUser": false,
			  "showTime": true,
			  "dateFunction": '',
			  "showRetweet": false,
			  "customCallback": handleTweets,
			  "showInteraction": true
            };
            
			function handleTweets(tweets){
			  var x = tweets.length;
			  var n = 0;
			  var html = '<ul>';
			  while(n < x) {
				html += '<li>' + tweets[n] + '</li>';
				n++;
			  }
			  html += '</ul>';
			  document.getElementById('latest-tweets').innerHTML=html;
			}
			twitterFetcher.fetch(config);
		}
    }

    render() {
        return (
            <div>
                <h2 className="section-title"><span><i className="icon-twitter"></i>LATEST TWEET</span></h2>
                <div id="latest-tweets" className="widget-twitter"></div>
            </div>
        );
    }
}

export default TwitterFeed;

