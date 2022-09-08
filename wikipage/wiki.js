var imgEl = document.querySelector('#img');
var titleEl = document.querySelector('#holiday-title');
var infoEl = document.querySelector('#info');
//unable to loop for now
// for (var i = 1; i < 4; i++){
//     var extraInfoEl{i} = document.querySelector(`#more-info-${i}`)
// }
var extraInfoEl1 = document.querySelector("#more-info-1")
var extraInfoEl2 = document.querySelector("#more-info-2")
var extraInfoEl3 = document.querySelector("#more-info-3")
var extraInfoEl4 = document.querySelector("#more-info-4")
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
            console.log(data);
            // console.log(data.query.search[0].title)
             console.log(data.query.search[1].snippet)

          var apiTitle = data.query.search[0].title
          var headApiText = data.query.search[0].snippet 
          //will try to loop
          var extraApiText1 = data.query.search[1].snippet
          var extraApiText2 = data.query.search[2].snippet
          var extraApiText3 = data.query.search[3].snippet
          var extraApiText4 = data.query.search[4].snippet
          
      
          var apiUrl = "https://en.wiktionary.org/wiki/" + holiday
      
        //renders from top to bottom of page
        renderTitle(apiTitle)
        renderInfo(headApiText, extraApiText1, extraApiText2, extraApiText3, extraApiText4)
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

 function renderInfo(headApiText, extraApiText1, extraApiText2, extraApiText3, extraApiText4){
    infoEl.innerHTML = headApiText
    //will try to loop 
    extraInfoEl1.innerHTML = extraApiText1
    extraInfoEl2.innerHTML = extraApiText2
    extraInfoEl3.innerHTML = extraApiText3
    extraInfoEl4.innerHTML = extraApiText4
}

function renderUrlLink(apiUrl){
    wikiLinkEl.setAttribute("href", apiUrl)
}

homeBtnEl.addEventListener('click', function(){
    //not tested yet
    window.location.assign('./index.html')
})

