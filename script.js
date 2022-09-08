var dateInputE1 =$('#datepicker');
var formE1 = $('#Day-form')
var m = moment();
var arr1= [];
var dateString ='';
var countryCodes= ['AU','','','','','','']
// Datepicker widget
$(function () {
    $('#datepicker').datepicker({

      changeMonth: true,
      changeYear: true,
    });
  });

  //Accepting input date function

 var handleSubmit = function (event) {
   // console.log('function called');
    event.preventDefault();
    var dateInput =dateInputE1.val();
    console.log(typeof dateInput);
    console.log(dateInput);
  //  var myDate= moment(str, 'YYYY-MM-DD').toDate();

   arr1 = dateInput.split('/');
   

   dateString = arr1[2]+'-'+ arr1[0]+ '-'+ arr1[1];
   console.log(dateString.length);
  
  console.log('Month: ', arr1[0]);
  console.log('date: ', arr1[1]);
  console.log('year: ', arr1[2]);
  console.log('Date entered :: '+typeof dateString);
  

  getHoidayInfo()

 }

 formE1.on('submit',handleSubmit);

function getHoidayInfo () { 
  
  var requestUrl = 'https://date.nager.at/api/v3/publicholidays/'+ arr1[2] + '/AU';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function(data){
   // console.log(data[1].name);
   
     for (var i = 0; i < data.length; i++) {
      console.log( data[i].date.length);
      console.log(dateString.length);
      if(( data[i].date === dateString )){
        console.log(data[i].name);
        var showHoliday = document.querySelector('#Australia');
        showHoliday.textContent=data[i].name;
      }
      else{
        console.log("No holiday Found");
      }
    }
         
  });
 
}


