
var imgEl = document.querySelector('#img');
var titleEl = document.querySelector('#holiday-title');
var infoEl = document.querySelector('#info');
var wikiLinkEl = document.querySelector('#wiki');


function getApi(requestUrl){
//currently testing Australia Day
//need to include query parameter 'origin=*' to work
var holiday = "Australia Day"
var requestUrl = "https://en.wikipedia.org/w/api.php?origin=*&action=parse&format=json&page=" + holiday

fetch(requestUrl)
.then(function (response){
    if (response.ok){
        response.json().then(function (data){
            console.log(data);
            console.log(data.parse.iwlinks[1].url);

            var apiTitle = data.parse.title
            //still testing
            var apiText = data.parse.text["*"]
           
          //  $( "p:nth-child(3)" )
            var apiUrl = data.parse.iwlinks[1].url
            
                    console.log(apiText.length)

                    console.log(apiText)

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

function renderImage(){
    imgEl.setAttribute('src',)
}

