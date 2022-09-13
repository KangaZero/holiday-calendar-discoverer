function fetchHolidayInfo(requestURL) {

    // fetch holiday value from local storage (and stringify?) to be readable, currently setting local storage item manually to test functionality
   
    var holidayValue = localStorage.getItem("HolidayName")

    // request url with holiday query paramater added as a value (fetched from local storage)
    var requestURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=" + holidayValue

    // run fetch request and conditionally 
    fetch(requestURL)
        .then(function (response){
        if (response.ok) {
            response.json().then(function(data){
                // test for the query return values
                console.log(data);

                // data to be rendered in the main header section of HTML page
                var title = data.query.search[0].title
                var snippetMain = data.query.search[0].snippet

                // // data to be rendered in each of the extra info cards
                // for (var i = 1; i<5; i++){
                //     window['infocard' + i] = data.query.search[i].snippet
                // }

            // creating vars for info cards
            var extraApiTitle1 = data.query.search[1].title
            var extraApiTitle2 = data.query.search[2].title
            var extraApiTitle3 = data.query.search[3].title
            var extraApiTitle4 = data.query.search[4].title

            var extraApiText1 = data.query.search[1].snippet
            var extraApiText2 = data.query.search[2].snippet
            var extraApiText3 = data.query.search[3].snippet
            var extraApiText4 = data.query.search[4].snippet

            // create a var for "learn more" link as this will change based on the holiday value
            var learnMoreURL = "https://en.wiktionary.org/wiki/" + holidayValue

            renderTitle(title)
            renderInfo(snippetMain)
            renderExtraInfo1(extraApiTitle1, extraApiText1)
            renderExtraInfo2(extraApiTitle2, extraApiText2)
            renderExtraInfo3(extraApiTitle3, extraApiText3)
            renderExtraInfo4(extraApiTitle4, extraApiText4)
            renderURL(learnMoreURL)

        });
    } else {
        alert("Error:" + response.statusTxt + "\n Page not found");
    }

})
}

fetchHolidayInfo();

// document target areas
var mainHeader = document.getElementById("holiday-title");
var mainSnippetTitle = document.getElementById("holiday-name");
var infocard1Title = document.getElementById("infocard1-title");
var infocard2Title = document.getElementById("infocard2-title");
var infocard3Title = document.getElementById("infocard3-title");
var infocard4Title = document.getElementById("infocard4-title");
var infocard1Text = document.getElementById("infocard1-text");
var infocard2Text = document.getElementById("infocard2-text");
var infocard3Text = document.getElementById("infocard3-text");
var infocard4Text = document.getElementById("infocard4-text");
var wikiButton = document.getElementById("wikiButton");



//renders main title
function renderTitle(title){
   mainHeader.innerHTML = title
 }

// renders main snippet
 function renderInfo(snippetMain){
    mainSnippetTitle.innerHTML = snippetMain
}

// renders all info cards
function renderExtraInfo1(extraApiTitle1, extraApiText1){
    infocard1Title.innerHTML = extraApiTitle1;
    infocard1Text.innerHTML = extraApiText1
}
function renderExtraInfo2(extraApiTitle2, extraApiText2){
    infocard2Title.innerHTML = extraApiTitle2;
    infocard2Text.innerHTML = extraApiText2
}
function renderExtraInfo3(extraApiTitle3, extraApiText3){
    infocard3Title.innerHTML = extraApiTitle3;
    infocard3Text.innerHTML = extraApiText3
}
function renderExtraInfo4(extraApiTitle4, extraApiText4){
    infocard4Title.innerHTML = extraApiTitle4;
    infocard4Text.innerHTML = extraApiText4
}


// render button
function renderURL(learnMoreURL){
    wikiButton.setAttribute("href", learnMoreURL)
}


var homeBtnEl = document.getElementById('return-to-home')
homeBtnEl.addEventListener('click', function(){
    //not tested yet
    window.location.assign('homepage.html')
})

// ignore this part of the code, I'm trying to create an event listener on the info cards so that we don't need to append a button to take us to a new page
var info1URL = "https://en.wikipedia.org/wiki/" + data.query.search[1].title
var info2URL = "https://en.wikipedea.org/wiki/"+ data.query.search[2].title
var info3URL = "https://en.wikipedia.org/wiki/" + data.query.search[3].title
var info4URL ="https://en.wikipedia.org/wiki/" + data.query.search[4].title

infocard1.addEventListener('click',function(){
    window.location.assign = info1URL
})