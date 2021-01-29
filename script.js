
let timeBlock = $('.container');
let saveButton = $('.saveBtn');

let input9am = $('.input9am');
let input10am = $('.input10am');
let input11am = $('.input11am');
let input12pm = $('.input12pm');
let input1pm = $('.input1pm');
let input2pm = $('.input2pm');
let input3pm = $('.input3pm');
let input4pm = $('.input4pm');
let input5pm = $('.input5pm');

input9am.val(localStorage.getItem('entry9am'));
input10am.val(localStorage.getItem('entry10am'));
input11am.val(localStorage.getItem('entry11am'));
input12pm.val(localStorage.getItem('entry12pm'));
input1pm.val(localStorage.getItem('entry1pm'));
input2pm.val(localStorage.getItem('entry2pm'));
input3pm.val(localStorage.getItem('entry3pm'));
input4pm.val(localStorage.getItem('entry4pm'));
input5pm.val(localStorage.getItem('entry5pm'));

let save9am = $('.save9am');
let save10am = $('.save10am');
let save11am = $('.save11am');
let save12pm = $('.save12pm');
let save1pm = $('.save1pm');
let save2pm = $('.save2pm');
let save3pm = $('.save3pm');
let save4pm = $('.save4pm');
let save5pm = $('.save5pm');
let clearBtn = $('.clearBtn');

function getHeaderDate() {
    let currentHeaderDate = moment().format('MMMM D, YYYY');
    $('#currentDay').text(currentHeaderDate);
}
getHeaderDate();

let currentTime = parseInt(moment().format('HH'));

setInterval(checkTime, 600000);
checkTime();
// Color coding the text field depending on the time of day
function checkTime(){

    if(parseInt(input9am.attr('data-hour')) > currentTime){
        input9am.removeClass('past present future');
        input9am.addClass('future');
    } else if (parseInt(input9am.attr('data-hour')) === currentTime){
        input9am.removeClass('past present future');
        input9am.addClass('present');
    } else {
        input9am.removeClass('past present future');
        input9am.addClass('past');
    };

    if(parseInt(input10am.attr('data-hour')) > currentTime){
        input10am.removeClass('past present future');
        input10am.addClass('future');
    } else if (parseInt(input10am.attr('data-hour')) === currentTime){
        input10am.removeClass('past present future');
        input10am.addClass('present');
    } else {
        input10am.removeClass('past present future');
        input10am.addClass('past');
    };

    if(parseInt(input11am.attr('data-hour')) > currentTime){
        input11am.removeClass('past present future');
        input11am.addClass('future');
    } else if (parseInt(input11am.attr('data-hour')) === currentTime){
        input11am.removeClass('past present future');
        input11am.addClass('present');
    } else {
        input11am.removeClass('past present future');
        input11am.addClass('past');
    };

    if(parseInt(input12pm.attr('data-hour')) > currentTime){
        input12pm.removeClass('past present future');
        input12pm.addClass('future');
    } else if (parseInt(input12pm.attr('data-hour')) === currentTime){
        input12pm.removeClass('past present future');
        input12pm.addClass('present');
    } else {
        input12pm.removeClass('past present future');
        input12pm.addClass('past');
    };

    if(parseInt(input1pm.attr('data-hour')) > currentTime){
        input1pm.removeClass('past present future');
        input1pm.addClass('future');
    } else if (parseInt(input1pm.attr('data-hour')) === currentTime){
        input1pm.removeClass('past present future');
        input1pm.addClass('present');
    } else {
        input1pm.removeClass('past present future');
        input1pm.addClass('past');
    };

    if(parseInt(input2pm.attr('data-hour')) > currentTime){
        input2pm.removeClass('past present future');
        input2pm.addClass('future');
    } else if (parseInt(input2pm.attr('data-hour')) === currentTime){
        input2pm.removeClass('past present future');
        input2pm.addClass('present');
    } else {
        input2pm.removeClass('past present future');
        input2pm.addClass('past');
    };

    if(parseInt(input3pm.attr('data-hour')) > currentTime){
        input3pm.removeClass('past present future');
        input3pm.addClass('future');
    } else if (parseInt(input3pm.attr('data-hour')) === currentTime){
        input3pm.removeClass('past present future');
        input3pm.addClass('present');
    } else {
        input3pm.removeClass('past present future');
        input3pm.addClass('past');
    };

    if(parseInt(input4pm.attr('data-hour')) > currentTime){
        input4pm.removeClass('past present future');
        input4pm.addClass('future');
    } else if (parseInt(input4pm.attr('data-hour')) === currentTime){
        input4pm.removeClass('past present future');
        input4pm.addClass('present');
    } else {
        input4pm.removeClass('past present future');
        input4pm.addClass('past');
    };

    if(parseInt(input5pm.attr('data-hour')) > currentTime){
        input5pm.removeClass('past present future');
        input5pm.addClass('future');
    } else if (parseInt(input5pm.attr('data-hour')) === currentTime){
        input5pm.removeClass('past present future');
        input5pm.addClass('present');
    } else {
        input5pm.removeClass('past present future');
        input5pm.addClass('past');
    };
}

function clearPlanner(){
    localStorage.clear();

    input9am.val('');
    input10am.val('');
    input11am.val('');
    input12pm.val('');
    input1pm.val('');
    input2pm.val('');
    input3pm.val('');
    input4pm.val('');
    input5pm.val('');
}

clearBtn.click(function(){
    clearPlanner();
});

save9am.click(function (event){
    event.preventDefault();
    if (input9am.val() !== ''){
        localStorage.setItem('entry9am', input9am.val());
    }
});

save10am.click(function (event){
    event.preventDefault();
    if (input10am.val() !== ''){
        localStorage.setItem('entry10am', input10am.val());
    }
});

save11am.click(function (event){
    event.preventDefault();
    if (input11am.val() !== ''){
        localStorage.setItem('entry11am', input11am.val());
    }
});

save12pm.click(function (event){
    event.preventDefault();
    if (input12pm.val() !== ''){
        localStorage.setItem('entry12pm', input12pm.val());
    }
});

save1pm.click(function (event){
    event.preventDefault();
    if (input1pm.val() !== ''){
        localStorage.setItem('entry1pm', input1pm.val());
    }
});

save2pm.click(function (event){
    event.preventDefault();
    if (input2pm.val() !== ''){
        localStorage.setItem('entry2pm', input2pm.val());
    }
});

save3pm.click(function (event){
    event.preventDefault();
    if (input3pm.val() !== ''){
        localStorage.setItem('entry3pm', input3pm.val());
    }
});

save4pm.click(function (event){
    event.preventDefault();
    if (input4pm.val() !== ''){
        localStorage.setItem('entry4pm', input4pm.val());
    }
});

save5pm.click(function (event){
    event.preventDefault();
    if (input5pm.val() !== ''){
        localStorage.setItem('entry5pm', input5pm.val());
    }
});

