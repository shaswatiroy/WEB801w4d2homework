/* Partners */
var images = [];
var imageNames = ["bustour", "cabinrental", "campingadv", "collegetours", "rentalbike", "tourgroup"];
var imageAltNames = ["Bus Tours", "Cabin Rental", "Camping Adventure", "College Tours", "Bike Rentals", "Tour Group"];
var imageList = [];
var imageAltList = [];
var image;
var closeTag = ">";
var openList = "<li class='partner'>";
var closeList = "</li>";

for (var i = 0; i < 6; i++) {
    images.push("<img src='images/partners/partner-"+imageNames[i]+".png'");
    imageAltList.push("alt='Partner "+imageAltNames[i]+"'");
    image = openList + images[i] + imageAltList[i] + closeTag + closeList; 
    imageList.push(image);
}
document.getElementById("partners").innerHTML = imageList;