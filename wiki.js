//Global variables
// document target areas
var mainHeader = document.getElementById("holiday-title");
var mainSnippetTitle = document.getElementById("holiday-name");

var infocardEl1 = document.getElementById("infocard1");
var infocardEl2 = document.getElementById("infocard2");
var infocardEl3 = document.getElementById("infocard3");
var infocardEl4 = document.getElementById("infocard4");

var infocard1Title = document.getElementById("infocard1-title");
var infocard2Title = document.getElementById("infocard2-title");
var infocard3Title = document.getElementById("infocard3-title");
var infocard4Title = document.getElementById("infocard4-title");

var infocard1Text = document.getElementById("infocard1-text");
var infocard2Text = document.getElementById("infocard2-text");
var infocard3Text = document.getElementById("infocard3-text");
var infocard4Text = document.getElementById("infocard4-text");

var wikiButton = document.getElementById("wikiButton");
var homeElBtn = document.getElementById("return-to-home");

// fetch holiday value from local storage (and stringify?) to be readable, currently setting local storage item manually to test functionality
var holidayValue = localStorage.getItem("HolidayName");

// request url with holiday query paramater added as a value (fetched from local storage)
var requestURL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=" +
  holidayValue;

// run fetch request and conditionally
function getAPI(requestURL) {
  fetch(requestURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // data to be rendered in the main header section of HTML page
        var title = data.query.search[0].title;
        var snippetMain = data.query.search[0].snippet;

        // creating vars for info cards
        var extraApiTitle1 = data.query.search[1].title;
        var extraApiTitle2 = data.query.search[2].title;
        var extraApiTitle3 = data.query.search[3].title;
        var extraApiTitle4 = data.query.search[4].title;

        var extraApiText1 = data.query.search[1].snippet;
        var extraApiText2 = data.query.search[2].snippet;
        var extraApiText3 = data.query.search[3].snippet;
        var extraApiText4 = data.query.search[4].snippet;

        var info1URL =
          "https://en.wikipedia.org/wiki/" + data.query.search[1].title;
        var info2URL =
          "https://en.wikipedea.org/wiki/" + data.query.search[2].title;
        var info3URL =
          "https://en.wikipedia.org/wiki/" + data.query.search[3].title;
        var info4URL =
          "https://en.wikipedia.org/wiki/" + data.query.search[4].title;

        // create a var for "learn more" link as this will change based on the holiday value
        var learnMoreURL = "https://en.wiktionary.org/wiki/" + holidayValue;

        renderTitle(title);
        renderInfo(snippetMain);
        renderExtraInfo1(extraApiTitle1, extraApiText1);
        renderExtraInfo2(extraApiTitle2, extraApiText2);
        renderExtraInfo3(extraApiTitle3, extraApiText3);
        renderExtraInfo4(extraApiTitle4, extraApiText4);
        renderExtraInfoLink(info1URL, info2URL, info3URL, info4URL);
        renderURL(learnMoreURL);

        //renders main title
        function renderTitle(title) {
          mainHeader.innerHTML = title;
        }

        // renders main snippet
        function renderInfo(snippetMain) {
          mainSnippetTitle.innerHTML = snippetMain;
        }

        // renders all info cards
        function renderExtraInfo1(extraApiTitle1, extraApiText1) {
          infocard1Title.innerHTML = extraApiTitle1;
          infocard1Text.innerHTML = extraApiText1;
        }
        function renderExtraInfo2(extraApiTitle2, extraApiText2) {
          infocard2Title.innerHTML = extraApiTitle2;
          infocard2Text.innerHTML = extraApiText2;
        }
        function renderExtraInfo3(extraApiTitle3, extraApiText3) {
          infocard3Title.innerHTML = extraApiTitle3;
          infocard3Text.innerHTML = extraApiText3;
        }
        function renderExtraInfo4(extraApiTitle4, extraApiText4) {
          infocard4Title.innerHTML = extraApiTitle4;
          infocard4Text.innerHTML = extraApiText4;
        }

        // render wikiInfo onto new page
        function renderURL(learnMoreURL) {
          wikiButton.setAttribute("href", learnMoreURL);
          wikiButton.setAttribute("target", "_blank");
        }

        //returns back to homepage
        homeElBtn.addEventListener("click", function () {
          window.location.assign("index.html");
        });

        function renderExtraInfoLink(info1URL, info2URL, info3URL, info4URL) {
          //opens the extrainfo from WikiAPI onto a new tab
          infocardEl1.addEventListener("click", function () {
            window.open(info1URL, "_blank");
          });

          infocardEl2.addEventListener("click", function () {
            window.open(info2URL, "_blank");
          });

          infocardEl3.addEventListener("click", function () {
            window.open(info3URL, "_blank");
          });

          infocardEl4.addEventListener("click", function () {
            window.open(info4URL, "_blank");
          });
        }
      });
    } else {
      alert("Error:" + response.statusTxt + "\n Page not found");
    }
  });
}

getAPI(requestURL);
