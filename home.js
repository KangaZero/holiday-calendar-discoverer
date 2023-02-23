var dateInputE1 = $("#datepicker");
var formE1 = $("#Day-form");
matchfound = new Boolean();

var countryCodes = ["AU", "US", "CN", "JP", "DE", "SG", "IT", "NZ", "DK", "TR"];
// Datepicker widget
$(function () {
  $("#datepicker").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
  });
});

//Accepting input date function

var handleSubmit = function (event) {
  event.preventDefault();
  var dateInput = dateInputE1.val();

  //extracting year from the input date
  var year = moment(dateInput, "yy-mm-dd").year();

  for (let i = 0; i < countryCodes.length; i++) {
    const country = countryCodes[i];
    matchfound = false;
    //calling getHolidayInfo
    getHoidayInfo(country, year, dateInput);
    if (matchfound === false) {
      document.getElementById(country).textContent =
        "There are no holidays on this date for this country";
    }
  }
};

formE1.on("submit", handleSubmit);

function getHoidayInfo(country, year, dateInput) {
  var requestUrl =
    "https://date.nager.at/api/v3/publicholidays/" + year + "/" + country;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].date === dateInput) {
          var country = data[i].countryCode;
          renderHolidayInfo(country, data[i]);
          matchfound = true;
        } else {
          console.log("No holiday Found");
        }
      }
    });
}

function renderHolidayInfo(country, holidayInfo) {
  var showHolidayEl = document.getElementById(country);
  showHolidayEl.textContent = holidayInfo.name;

  showHolidayEl.classList.add("p-2");
  var showHolidayE1Parent = document.getElementById(country + "1");
  showHolidayE1Parent.classList.add(
    "hover:border-brightRed",
    "hover:border-8",
    "hover:bg-darkBlue",
    "hover:text-white",
    "cursor-pointer"
  );
  //making the Country card clickable for fetching more info
  showHolidayEl.onclick = function () {
    localStorage.setItem("HolidayName", holidayInfo.name);
    window.location.href = "wikipage.html";
  };
}
