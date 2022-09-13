var holidayValue = localStorage.getItem("HolidayName")
var img=document.querySelector("#image-area")
var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=aLdZQGbKZzBD4Xi0ABfgK09P629ZlTAy&q=" + holidayValue + "&limit=25&offset=0&rating=g&lang=en";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log(data)
   
 var ImageURL=data.data[0].images.original.url
 console.log(data.data[0].images.original.url)
 function renderImage(ImageURL){
   img.setAttribute("src",ImageURL)
 }
 renderImage(ImageURL);
})