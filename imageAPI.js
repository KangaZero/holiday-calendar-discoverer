

var holidayName = localStorage.getItem("HolidayName");
var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=aLdZQGbKZzBD4Xi0ABfgK09P629ZlTAy&q=" + holidayName + "&limit=25&offset=0&rating=g&lang=en";

var imageEl=document.querySelector("#image-area")

function getImageAPI(requestUrl){
fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        //gets gif url from API
    var imageUrl = data.data[0].images.fixed_height.url

 function renderImage(imageUrl){
    imageEl.setAttribute("src",imageUrl)
 }
 renderImage(imageUrl);
})
};

getImageAPI(requestUrl);