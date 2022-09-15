

var holidayName = localStorage.getItem("HolidayName");
var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=aLdZQGbKZzBD4Xi0ABfgK09P629ZlTAy&q=" + holidayName + "&limit=25&offset=0&rating=g&lang=en";

var imageEl1=document.querySelector("#image-area1")
var imageEl2=document.querySelector("#image-area2")
var imageEl3=document.querySelector("#image-area3")

function getImageAPI(requestUrl){
fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        //gets gif url from API
    var imageUrl1 = data.data[0].images.fixed_height.url
    var imageUrl2 = data.data[1].images.fixed_height.url
    var imageUrl3 = data.data[2].images.fixed_height.url

 function renderImage(imageUrl1,imageUrl2,imageUrl3){
    imageEl1.setAttribute("src",imageUrl1)
    imageEl2.setAttribute("src",imageUrl2)
    imageEl3.setAttribute("src",imageUrl3)
 }
 renderImage(imageUrl1,imageUrl2,imageUrl3);
})
};

getImageAPI(requestUrl);