var imgEl = document.querySelector('#img');
var titleEl = document.querySelector('#holiday-title');
var infoEl = document.querySelector('#info');
//test
//targets 4 ids 
for (var i = 1; i < 4; i++){
var extraInfoEl = document.querySelector(`#more-info-${i}`)
}
console.log("e", extraInfoEl)
var wikiLinkEl = document.querySelector('#wiki');
var homeBtnEl = document.querySelector('#return-to-home');



function getApi(requestUrl){
    //add index.html holiday tag id variable here  //christmas = placeholder for now
    var holiday = "christmas"
    holiday = capitalizeFirstLetter(holiday)

//need to include query parameter 'origin=*' to work
    var requestUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=" + holiday

fetch(requestUrl)
.then(function (response){
    if (response.ok){
        response.json().then(function (data){

        //initial debugging 
            // console.log(data);
            // console.log(data.query.search[0].title)
            // console.log(data.query.search[0].snippet)

          var apiTitle = data.query.search[0].title
          var headApiText = data.query.search[0].snippet 
            //test 
          for (var i = 0; i < 4; i++){
          var extraApiText = data.query.search[i].snippet
          }
          console.log(extraApiText)
    
          var apiUrl = "https://en.wiktionary.org/wiki/" + holiday
      
        //renders from top to bottom of page
        renderTitle(apiTitle)
        renderInfo(headApiText, extraApiText)
        renderUrlLink(apiUrl)

        });
    } else {
        alert ("Error: " + response.statusText + "\n  Page not found");
    }
 
})
}
getApi();

//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


//render functions 
  function renderTitle(apiTitle){
    titleEl.innerHTML = apiTitle
 }

 function renderInfo(headApiText, extraApiText){
    infoEl.innerHTML = headApiText
    //need testing
    extraInfoEl.innerHTML = extraInfoEl
}

function renderUrlLink(apiUrl){
    wikiLinkEl.setAttribute("href", apiUrl)
}

homeBtnEl.addEventListener('click', function(){
    //not tested yet
    window.location.assign('./index.html')
})