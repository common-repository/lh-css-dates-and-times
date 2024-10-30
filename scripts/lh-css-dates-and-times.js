(function() {

function lh_css_dates_and_times_do_date(){
    
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd;
} 

if(mm<10) {
    mm = '0'+mm;
} 

var date = 'cssdt-' + dd + '-' + mm + '-' + yyyy;

return date;
    
    
    

}

function lh_css_dates_and_times_do_hour(){
    
var today = new Date();
var curHr = today.getHours();

var hour = 'cssdt-hour-' + curHr;    

return hour;

}


function lh_css_dates_and_times_do_time_of_day(){
    
var today = new Date();
var curHr = today.getHours();
var period;

if (curHr < 6) {
period = 'night'; 
} else if (curHr < 12) {
period = 'morning';
} else if (curHr < 18) {
period = 'afternoon';
} else {
period = 'evening';
}
    
var timeofday = 'cssdt-' + period;    

return timeofday;

}

function lh_css_dates_and_times_do_am_pm(){
    
var today = new Date();
var curHr = today.getHours();
var period;

if (curHr < 12) {
period = 'am'; 
} else {
period = 'pm';
}
    
var ampm = 'cssdt-' + period;    

return ampm;

}


function lh_css_dates_and_times_do_weekday(){
    
var today = new Date();


var weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];


var weekday = 'cssdt-' + weekdays[ today.getDay() ];

return weekday;
    
    
    

}

function lh_css_dates_and_times_do_monthday(){
    
var today = new Date();

var dd = today.getDate();


if(dd<10) {
    dd = '0'+dd;
} 


var monthday = 'cssdt-monthday-' + dd;

return monthday;
    
    
    

}




function lh_css_dates_and_times_do_month(){
    
    
    
var today = new Date();


var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];


var month = 'cssdt-' + months[ today.getMonth() ];

return month;
    
    
    

}

function lh_css_dates_and_times_do_yearday(){
    
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

if(dd<10) {
    dd = '0'+dd;
} 

if(mm<10) {
    mm = '0'+mm;
} 

var yearday = 'cssdt-yearday-' + dd + '-' + mm;

return yearday;
    
    
    
    

}

function lh_css_dates_and_times_do_year(){
    
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd;
} 

if(mm<10) {
    mm = '0'+mm;
} 

var year = 'cssdt-' + yyyy;

return year;
    
    
    

}

function lh_css_dates_and_times_run(){
    
console.log("css dates times running");
    
var remove = [];

var i;

for (i = 0; i < document.body.classList.length; i++) {
if (document.body.classList.item(i).startsWith("cssdt-")){
    
remove.push(document.body.classList.item(i));

}
}

for (i = 0; i < remove.length; i++) {
    
document.body.classList.remove(remove[i]);
    
}

    
    
    
document.body.classList.add(lh_css_dates_and_times_do_date());
document.body.classList.add(lh_css_dates_and_times_do_hour());
document.body.classList.add(lh_css_dates_and_times_do_am_pm());
document.body.classList.add(lh_css_dates_and_times_do_time_of_day());
document.body.classList.add(lh_css_dates_and_times_do_weekday());
document.body.classList.add(lh_css_dates_and_times_do_monthday());
document.body.classList.add(lh_css_dates_and_times_do_month());
document.body.classList.add(lh_css_dates_and_times_do_yearday());
document.body.classList.add(lh_css_dates_and_times_do_year()); 




}


if ((document.readyState === "complete") || (document.readyState === "interactive")) {
    
console.log("ready state complete");
    
lh_css_dates_and_times_run();    
    
} else {
    
console.log("ready state incomplete");

document.addEventListener("DOMContentLoaded", function() {
    
lh_css_dates_and_times_run();


    });
    
}

})();