function validateCredit(field) {
    var a = document.getElementById(field).value;

    var filter = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(field) {
    var a = document.getElementById(field).value;

    var filter = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validatePhone(field) {
    var a = document.getElementById(field).value;

    var filter = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)

const setDateFormat = "mm/dd/yy";

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){
    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Wrong format for credit card number");
            $("#credit").val("");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone number");
            $("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });
    $("#email").on("change", function(){
        if (!validateEmail("email")){
            alert("Wrong format for email address");
            $("#email").val("");
            $("#email").addClass("error");
        }
        else {
            $("#email").removeClass("error");
        }
    });
    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#meeting-time" ).datepicker(
        {
            dateFormat: setDateFormat,
            minDate: new Date('06/28/2020'),
            maxDate: '+3M',
            // used to disable some dates
            beforeShowDay: disableDates
        }
    );

    $("input").tooltip({container:'body'});
});
