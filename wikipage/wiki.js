
var imgEl = document.querySelector('#img');
var titleEl = document.querySelector('#holiday-title');
var infoEl = document.querySelector('#info');
var wikiLinkEl = document.querySelector('#wiki');


function getApi(requestUrl){
//currently testing Australia Day
//need to include query parameter 'origin=*' to work
var holiday = "Australia Day"
holiday = capitalizeFirstLetter(holiday)
var requestUrl = "https://en.wikipedia.org/w/api.php?origin=*&action=parse&format=json&page=" + holiday

fetch(requestUrl)
.then(function (response){
    if (response.ok){
        response.json().then(function (data){
            //test
            console.log(data);

            //gets the title
            var apiTitle = data.parse.title

            //still testing
            //gets main info
            var apiText = data.parse.text["*"]
           
            // We want apiText$( "p:nth-child(2/3)" )  //currently do not know how to do
            //var apiUrl = data.parse.iwlinks[0].url
            var apiUrl = "https://en.wiktionary.org/wiki/" + holiday
            
            //gets random img name 
            //TODO: Get image url 
            var i = Math.floor(Math.random() * data.parse.images.length)
            var apiImg = data.parse.images[i]
            
                    console.log("apiUrl", apiUrl)
                    console.log("apiText", apiText)

            function renderTitle(){
                titleEl.innerHTML = apiTitle
            }
            function renderInfo(){
                infoEl.innerHTML = apiText
            }
            function renderUrlLink(){
                wikiLinkEl.setAttribute("href", apiUrl)
            }
            //renders from top to bottom of page
            renderTitle()
            renderInfo()
            renderUrlLink()
        });
    } else {
        alert ("Error: " + response.statusText + "\n  Page not found");
    }
 
})
}
getApi();

//no img url given in API 
function renderImage(){
    imgEl.setAttribute('src',)
}

//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }