if (document.URL.includes('amazon.com') || document.URL.includes('wholefoodsmarket.com') || document.URL.includes('audible.com') || document.URL.includes('comixology.com') || document.URL.includes('zappos.com') || document.URL.includes('goodreads.com') || document.URL.includes('twitch.tv') || document.URL.includes('imdb.com')){
// create a variable with the HTML code for pop up window
var html =  "<div class='pop-content'>"
	html += "	<div class='pop-header'>"
		html += "	<h1>Hey there buddy...</h1>"
	html += "	</div>"
	html += "	<div class='pop-body'>"
		html += "	<p>We noticed you were trying to go to a web site owned by Amazon. Apart from owning the Amazon site itself, they also have their horrible money-grubbing fingers in a bunch of other industries. As someone doing their best to be an ethical consumer in this capitalist hellscape, it is important to be aware of supercorporations and their subsidiaries.</p>"
		html += "	<p>There is no truly ethical consumption under capitalism because all labor is coerced, but Amazon is one of the least ethical companies that exist in this country. Through loopholes and underhanded business dealings, they <a href = 'https://www.businessinsider.com/amazon-not-paying-taxes-trump-bezos-2018-4'>avoid paying taxes</a> and treat their employees <a href = 'https://www.newsweek.com/amazon-drivers-warehouse-conditions-workers-complains-jeff-bezos-bernie-1118849'>horribly</a>, among <a href = 'https://en.wikipedia.org/wiki/Amazon_(company)#Controversies'>other things</a>. Let's take you somewhere (marginally) better.</p>"
	html += "	</div>"
	html += "	<div class='pop-footer'>"
		html += "<button id='closeButton'>Ok I'm sorry</button>"
		html += "<p>For a list of Amazon's major subsidiaries, <a href='https://en.wikipedia.org/wiki/Amazon_(company)#Subsidiaries'>click here</a>.</p>"
	html += "	</div>"
html += "	</div>"

let popupwindow = document.createElement('div');
popupwindow.id = "popup";
popupwindow.class = "pop";
  popupwindow.style.display = "block"; /* Hidden by default */
  popupwindow.style.position= "fixed"; /* Stay in place when scrolling*/
  popupwindow.style.zIndex= "1000"; /* in front of all other page elements */
  popupwindow.style.left="0px"; /*background margin*/
  popupwindow.style.top= "0px"; /*background margin*/
  popupwindow.style.width= "100%"; 
  popupwindow.style.height= "100%"; 
  popupwindow.style.overflow= "auto"; 
  popupwindow.style.backgroundColor = "rgba(0,0,0,0.6)"; /* black, 60% opacity */

    // set html to the innerHTML
    popupwindow.innerHTML = html;
    // append the div to the body so that it is displayed on the page
    document.body.append(popupwindow)
// write to document
//document.write(html); // this method overwrites all content on the page
}