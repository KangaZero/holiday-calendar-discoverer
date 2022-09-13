var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=aLdZQGbKZzBD4Xi0ABfgK09P629ZlTAy&q=Christmas&limit=25&offset=0&rating=g&lang=en";
var getImage=document.querySelector("#image")
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
    console.log(data)
    console.log("https://media0.giphy.com/media/l0MYw0DsFJc0kU0Jq/giphy.gif?cid=465763144wynjii8f9kumxv0stmvoyayhjzilsg7t1gxm00l&rid=giphy.gif&ct=g")
 var ImageURL=data.data[0].images.original.url
 function renderImage(ImageURL){
    getImage.setAttribute("src",ImageURL)
 }
 renderImage(ImageURL);
})