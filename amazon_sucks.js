
// amazon
if (document.URL.includes('amazon.com')) {
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://www.ebay.com/"); // go to alt web site
	}, false);
} 

// whole foods
else if (document.URL.includes('wholefoodsmarket.com')) {
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://www.traderjoes.com/"); // go to alt web site
	}, false);
} 

// audible
else if (document.URL.includes('audible.com')) { // FIXME -> css doesnt work??
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://www.scribd.com/"); // go to alt web site
	}, false);
} 

// comixology
else if (document.URL.includes('comixology.com')) { 
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://library.comicsplusapp.com/"); // go to alt web site
	}, false);
} 

// zappos
else if (document.URL.includes('zappos.com')) {
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://www.livefashionable.com/?sscid=41k4_wc7dc"); // go to alt web site
	}, false);
} 

// goodreads
else if (document.URL.includes('goodreads.com')) {
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://www.libib.com/"); // go to alt web site
	}, false);
} 
// twitch
else if (document.URL.includes('twitch.tv')) { //FIXMEE -> css doesnt work??
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://mixer.com/"); // go to alt web site
	}, false);
} 
// iMDB
else if (document.URL.includes('imdb.com')) { //FIXMEE -> css doesnt work??
	// make popup visible
	var pop = document.getElementById("popup");
	pop.style.display = "block";
   
	// after closing popup window
	document.getElementById('closeButton').addEventListener('click', function(e) {
		e.preventDefault();
		this.parentNode.style.display = 'none'; // close popup
		window.location.replace("https://www.rottentomatoes.com/"); // go to alt web site
	}, false);
} 


