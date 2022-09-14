var dateInputE1 = $('#datepicker');
var formE1 = $('#Day-form')
var m = moment();
// var arr1= [];
// var dateString ='';
var countryCodes = ['AU', 'US']
// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    altFormat: "dd/mm/yyyy",
    changeMonth: true,
    changeYear: true,
  });
});

//Accepting input date function

var handleSubmit = function (event) {
  // console.log('function called');
  event.preventDefault();
  var dateInput = dateInputE1.val();
  console.log(typeof dateInput);
  console.log(dateInput);
  // var myDate = moment(str, 'YYYY-MM-DD').toDate();

  var dateParts = dateInput.split('/');
  var month = dateParts[0]
  var day = dateParts[1]
  var year = dateParts[2]
  var dateString = year + '-' + month + '-' + day


  for (let i = 0; i < countryCodes.length; i++) {
    const country = countryCodes[i];
    getHoidayInfo(country, year, dateString)
  }


}

formE1.on('submit', handleSubmit);

function getHoidayInfo(country, year, dateString) {

  var requestUrl = 'https://date.nager.at/api/v3/publicholidays/' + year + '/' + country;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data[1].name);

      for (var i = 0; i < data.length; i++) {
        console.log(data[i].date.length);
        console.log(dateString.length);
        if ((data[i].date === dateString)) {
          console.log(data[i].name);
          // var showHoliday = document.querySelector('#Australia');
          // showHoliday.textContent = data[i].name;
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
}

// renderHolidayInfo("AU", { name: "Australia Day" })