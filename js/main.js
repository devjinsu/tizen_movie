(function () {
	var getJSON = function(url, callback) {
	    var xhr = new XMLHttpRequest();
		console.log(url);
	    xhr.open('GET', url, true);
	    xhr.responseType = 'json';
	    xhr.onload = function() {
	      var status = xhr.status;
			console.log(status);
	      if (status === 200) {
	        callback(null, xhr.response);
	      } else {
	        callback(status, xhr.response);
	      }
	    };
	    xhr.send();
	};
	
	window.addEventListener("tizenhwkey", function (ev) {
		var activePopup = null,
			page = null,
			pageid = "";

		if (ev.keyName === "back") {
			activePopup = document.querySelector(".ui-popup-active");
			page = document.getElementsByClassName("ui-page-active")[0];
			pageid = page ? page.id : "";

			if (pageid === "main" && !activePopup) {
				try {
					tizen.application.getCurrentApplication().exit();
				} catch (ignore) {
				}
			} else {
				window.history.back();
			}
		}
	});	
	
	function addMovietoList(root, movies) {
		 console.log(JSON.stringify(movies));
		  var ul = document.createElement('ul');
		  ul.className = "ui-listview";
		  var li;
		  var span;
		  var a;
		  
		  root.appendChild(ul); // append the created ul to the root

		  movies.forEach(function(item) {
		    li = document.createElement('li'); // create a new list item
		    //li.className = 'ui-li-static li-has-multiline';
		    li.className = 'ui-li-anchor li-has-multiline';
		    //li.appendChild(document.createTextNode(item.title)); // append the text to the li
		    //<a href="liststyles.html">List Styles</a>

		    span = document.createElement('span'); // create sub text
		    span.className = 'li-text-sub';
		    span.appendChild(document.createTextNode(' popularity: ' + item.popularity)); // append the text to the span
		    
		    a = document.createElement('a');
		    a.setAttribute('href', '/components/movie_detail.html?movieID='+item.id);
		    a.appendChild(document.createTextNode(item.title)); // append the text to the li
		    
		    li.appendChild(a);
		    li.appendChild(span);
		    ul.appendChild(li); // append the list item to the ul
		  });
		}
	
//	var div = document.getElementById('showing_list');
//	var rawData = JSON.parse('{"results":[{"vote_count":3115,"id":299536,"video":false,"vote_average":8.6,"title":"Avengers: Infinity War","popularity":487.33105,"poster_path":"\/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg","original_language":"en","original_title":"Avengers: Infinity War","genre_ids":[12,878,14,28],"backdrop_path":"\/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg","adult":false,"overview":"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.","release_date":"2018-04-25"},{"vote_count":491,"id":427641,"video":false,"vote_average":5.8,"title":"Rampage","popularity":130.920398,"poster_path":"\/30oXQKwibh0uANGMs0Sytw3uN22.jpg","original_language":"en","original_title":"Rampage","genre_ids":[28,12,878],"backdrop_path":"\/wrqUiMXttHE4UBFMhLHlN601MZh.jpg","adult":false,"overview":"Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.","release_date":"2018-04-12"},{"vote_count":1843,"id":333339,"video":false,"vote_average":7.8,"title":"Ready Player One","popularity":105.675663,"poster_path":"\/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg","original_language":"en","original_title":"Ready Player One","genre_ids":[12,878,28],"backdrop_path":"\/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg","adult":false,"overview":"When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.","release_date":"2018-03-28"},{"vote_count":484,"id":445571,"video":false,"vote_average":7.2,"title":"Game Night","popularity":70.410755,"poster_path":"\/85R8LMyn9f2Lev2YPBF8Nughrkv.jpg","original_language":"en","original_title":"Game Night","genre_ids":[9648,35,80,53],"backdrop_path":"\/4hU1pC7MGQ7wU9ldkRJYNHK3vgb.jpg","adult":false,"overview":"Max and Annies weekly game night gets kicked up a notch when Maxs brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, its all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.","release_date":"2018-02-22"},{"vote_count":940,"id":447332,"video":false,"vote_average":7.3,"title":"A Quiet Place","popularity":68.6715,"poster_path":"\/nAU74GmpUk7t5iklEp3bufwDq4n.jpg","original_language":"en","original_title":"A Quiet Place","genre_ids":[18,27,53,878],"backdrop_path":"\/roYyPiQDQKmIKUEhO912693tSja.jpg","adult":false,"overview":"A family is forced to live in silence while hiding from creatures that hunt by sound.","release_date":"2018-04-05"},{"vote_count":999,"id":401981,"video":false,"vote_average":6.5,"title":"Red Sparrow","popularity":65.966821,"poster_path":"\/vLCogyfQGxVLDC1gqUdNAIkc29L.jpg","original_language":"en","original_title":"Red Sparrow","genre_ids":[9648,53],"backdrop_path":"\/sGzuQYSTwJvLBc2PnuSVLHhuFeh.jpg","adult":false,"overview":"Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Diminika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.","release_date":"2018-03-01"},{"vote_count":255,"id":476926,"video":false,"vote_average":5.5,"title":"The Titan","popularity":55.155065,"poster_path":"\/qRmQazyIBZR4pQIk9VruiZul0Au.jpg","original_language":"en","original_title":"The Titan","genre_ids":[878,53],"backdrop_path":"\/lvI088LImIcFNwLcniGyKMRbAK7.jpg","adult":false,"overview":"On a bleak future Earth, a soldier endures a radical genetic transformation to save humanity. But his wife fears hes becoming more creature than man.","release_date":"2018-03-30"},{"vote_count":4048,"id":353486,"video":false,"vote_average":6.6,"title":"Jumanji: Welcome to the Jungle","popularity":50.250343,"poster_path":"\/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg","original_language":"en","original_title":"Jumanji: Welcome to the Jungle","genre_ids":[28,12,35,10751,878],"backdrop_path":"\/rz3TAyd5kmiJmozp3GUbYeB5Kep.jpg","adult":false,"overview":"The tables are turned as four teenagers are sucked into Jumanjis world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, theyll play as characters from the game.","release_date":"2017-12-09"},{"vote_count":15,"id":383498,"video":false,"vote_average":7.3,"title":"Deadpool 2","popularity":47.989669,"poster_path":"\/rLIIGGCdj6EGxZKY8aqIYBfsib6.jpg","original_language":"en","original_title":"Deadpool 2","genre_ids":[28,35,878],"backdrop_path":"\/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg","adult":false,"overview":"Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boys life.","release_date":"2018-05-10"},{"vote_count":1034,"id":399035,"video":false,"vote_average":5.8,"title":"The Commuter","popularity":45.519668,"poster_path":"\/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg","original_language":"en","original_title":"The Commuter","genre_ids":[28,80,18,9648,53],"backdrop_path":"\/clmYuR1t4TtKcakIOvYIPrjyxDc.jpg","adult":false,"overview":"A businessman on his daily commute home gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.","release_date":"2018-01-11"},{"vote_count":245,"id":453201,"video":false,"vote_average":5.1,"title":"The 15:17 to Paris","popularity":43.53825,"poster_path":"\/qxJQ0VBCuJkJhJmuWzxI408ngwd.jpg","original_language":"en","original_title":"The 15:17 to Paris","genre_ids":[18,36,53],"backdrop_path":"\/wybwzeZ7mQDftmmrxOhcht35Qij.jpg","adult":false,"overview":"In August 2015, an ISIS terrorist boarded train #9364 from Brussels to Paris. Armed with an AK-47 and enough ammo to kill more than 500 people, the terrorist might have succeeded except for three American friends who refused to give in to fear. One was a college student, one was a martial arts enthusiast and airman first class in the U.S. Air Force, and the other was a member of the Oregon National Guard, and all three pals proved fearless as they charged and ultimately overpowered the gunman after he emerged from a bathroom armed and ready to kill.","release_date":"2018-02-02"},{"vote_count":510,"id":429351,"video":false,"vote_average":4.8,"title":"12 Strong","popularity":41.646778,"poster_path":"\/j18021qCeRi3yUBtqd2UFj1c0RQ.jpg","original_language":"en","original_title":"12 Strong","genre_ids":[10752,18,36],"backdrop_path":"\/wacEk5YSNE41QeKseilyytksXmv.jpg","adult":false,"overview":"A team of CIA agents and special forces head into Afghanistan in the aftermath of the September 11th attacks in an attempt to dismantle the Taliban.","release_date":"2018-01-18"},{"vote_count":84,"id":437557,"video":false,"vote_average":6.4,"title":"Blockers","popularity":41.204606,"poster_path":"\/cx0LpfM6Drla8uzFfMT09uqKPRu.jpg","original_language":"en","original_title":"Blockers","genre_ids":[35],"backdrop_path":"\/fqPIDVSTl6f1l02fb2rRVYPl5JE.jpg","adult":false,"overview":"When three parents discover their daughters’ pact to lose their virginity at prom, they launch a covert one-night operation to stop the teens from sealing the deal.","release_date":"2018-03-30"},{"vote_count":63,"id":396806,"video":false,"vote_average":6.1,"title":"Anon","popularity":38.980656,"poster_path":"\/xhBTO9n3fxy3HJt7WlR9h9vvVmk.jpg","original_language":"en","original_title":"Anon","genre_ids":[878,53],"backdrop_path":"\/arYvUXhpNRU2GQQut67P5cR0c5m.jpg","adult":false,"overview":"Set in a near-future world where there is no privacy, ignorance or anonymity, our private memories are recorded and crime almost ceases to exist. In trying to solve a series of unsolved murders, Sal Frieland stumbles onto a young woman who appears to have subverted the system and disappeared. She has no identity, no history and no record. Sal realizes it may not be the end of crime but the beginning. Known only as The Girl, Sal must find her before he becomes the next victim.","release_date":"2018-05-03"},{"vote_count":795,"id":396371,"video":false,"vote_average":7,"title":"Mollys Game","popularity":33.982797,"poster_path":"\/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg","original_language":"en","original_title":"Mollys Game","genre_ids":[80,18],"backdrop_path":"\/yvbXGWjg30sj7rohEZvSe90jSJC.jpg","adult":false,"overview":"Molly Bloom, a young skier and former Olympic hopeful becomes a successful entrepreneur (and a target of an FBI investigation) when she establishes a high-stakes, international poker game.","release_date":"2017-12-21"},{"vote_count":1277,"id":446354,"video":false,"vote_average":7,"title":"The Post","popularity":33.934996,"poster_path":"\/h4XG3g6uMMPIBPjAoQhC2QIMdkl.jpg","original_language":"en","original_title":"The Post","genre_ids":[18,36],"backdrop_path":"\/8sb4aBST28vN3rBz704XJczS0Ld.jpg","adult":false,"overview":"A cover-up that spanned four U.S. Presidents pushed the countrys first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.","release_date":"2018-01-11"},{"vote_count":107,"id":460019,"video":false,"vote_average":6.1,"title":"Truth or Dare","popularity":31.490804,"poster_path":"\/zbvziwnZa91AJD78Si0hUb5JP5X.jpg","original_language":"en","original_title":"Truth or Dare","genre_ids":[53,27],"backdrop_path":"\/eQ5xu2pQ5Kergubto5PbbUzey28.jpg","adult":false,"overview":"A harmless game of “Truth or Dare” among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.","release_date":"2018-04-12"},{"vote_count":1741,"id":300668,"video":false,"vote_average":6.3,"title":"Annihilation","popularity":31.316301,"poster_path":"\/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg","original_language":"en","original_title":"Annihilation","genre_ids":[9648,878,18],"backdrop_path":"\/5zfVNTrkhMu673zma6qhFzG01ig.jpg","adult":false,"overview":"A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature dont apply.","release_date":"2018-02-22"},{"vote_count":419,"id":384680,"video":false,"vote_average":6.4,"title":"Hostiles","popularity":31.147036,"poster_path":"\/rqoezyB51GfhiloOB5ZErg5HXas.jpg","original_language":"en","original_title":"Hostiles","genre_ids":[12,18,37,36],"backdrop_path":"\/ozdXqMwijV192aSrojjFQMGeWSh.jpg","adult":false,"overview":"A legendary Native American-hating Army captain nearing retirement in 1892 is given one last assignment: to escort a Cheyenne chief and his family through dangerous territory back to his Montana reservation.","release_date":"2017-12-22"},{"vote_count":629,"id":268896,"video":false,"vote_average":5.9,"title":"Pacific Rim: Uprising","popularity":30.77642,"poster_path":"\/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg","original_language":"en","original_title":"Pacific Rim: Uprising","genre_ids":[28,14,878,12],"backdrop_path":"\/mo5EJsExrQCroqPDwUwp6jeq0xS.jpg","adult":false,"overview":"It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.","release_date":"2018-03-21"}],"page":1,"total_results":981,"dates":{"maximum":"2018-05-18","minimum":"2018-03-30"},"total_pages":50}');
//
//	console.log(JSON.stringify(rawData));
//	addMovietoList(div,rawData.results);
	
	/**
     * Reads data from internet by XMLHttpRequest, and store received data to the local array.
     * @private
     */
    function getDataFromXML() {
    	var showing_div = document.getElementById('showing_list');
	getJSON('https://api.themoviedb.org/3/movie/now_playing?api_key=3ac6156386eb43ab5c13f23e23ca9e4a&language=en-US&page=1',
			function(err, data) {
			  if (err !== null) {
		    		console.error('error get movies');
			  } else {
		    		console.log(JSON.stringify(data));
		    		addMovietoList(showing_div,data.results);
			  }
			});
	
	var upcoming_div = document.getElementById('upcoming_list');
	getJSON('https://api.themoviedb.org/3/movie/upcoming?api_key=3ac6156386eb43ab5c13f23e23ca9e4a&language=en-US&page=1',
			function(err, data) {
			  if (err !== null) {
		    		console.error('error get movies');
			  } else {
		    		console.log(JSON.stringify(data));
		    		addMovietoList(upcoming_div,data.results);
			  }
			});
    }
    
	/**
     * Initiates the application.
     * @private
     */
    function init() {
        getDataFromXML();

    }
	
	window.onload = init;
}());

