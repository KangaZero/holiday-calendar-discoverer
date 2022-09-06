var dateInputE1 =$('#datepicker');
var formE1 = $('#Day-form')
var m = moment();

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

  var arr1 = dateInput.split('/');
 
  
  console.log('Month: ', arr1[0]);
  console.log('date: ', arr1[1]);
  console.log('year: ', arr1[2]);

//getHoidayInfo()

 }

 formE1.on('submit',handleSubmit);


