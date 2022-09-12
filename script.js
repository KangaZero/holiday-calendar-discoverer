var dateInputE1 = $('#datepicker');
var formE1 = $('#Day-form')
var m = moment();

var countryCodes = ['AU', 'US', 'CN', 'CO', 'TR', 'SG', 'IT', 'NZ']

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
  });
});

//Accepting input date function

var handleSubmit = function (event) {

  event.preventDefault();
  var dateInput = dateInputE1.val();

  console.log("input date " + dateInput);
  //extracting year from the input date
  var year = moment(dateInput, "yy-mm-dd").year();




  for (let i = 0; i < countryCodes.length; i++) {
    const country = countryCodes[i];
    getHoidayInfo(country, year, dateInput)
  }


}

formE1.on('submit', handleSubmit);

function getHoidayInfo(country, year, dateInput) {

  var requestUrl = 'https://date.nager.at/api/v3/publicholidays/' + year + '/' + country;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {


      for (var i = 0; i < data.length; i++) {


        if ((data[i].date === dateInput)) {
          console.log(data[i].date); console.log(dateInput);
          var country = (data[i].countryCode);
          console.log(country)
          renderHolidayInfo(country, data[i])
        }
        else {
          console.log("No holiday Found");
        }
      }

    });
}


function renderHolidayInfo(country, holidayInfo) {

  var showHolidayEl = document.getElementById(country);
  showHolidayEl.textContent = holidayInfo.name;
  var btn1 = document.createElement('button');
  btn1.innerHTML = 'Info';
  btn1.classList.add('bg-blue-500', 'mg-5');
  btn1.value = country;
  showHolidayEl.appendChild(btn1);
  //add css to buttons
  btn1.onclick = function () {


    localStorage.setItem("HolidayName", holidayInfo.name);
    window.location.href = "../wikipage.html";

  };


}

// renderHolidayInfo("AU", { name: "Australia Day" })



