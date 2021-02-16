// Convert serialized array data of form in JSON
var serializeArrayToJSON = function(data, form_id) {
    // either pass form id or serializearray data of the form
    var rdata = {};
    if (data == undefined) {
        if (form_id == undefined) {
            alert("please provide either form id or serialize array data.");
        } else {
            data = $("#"+form_id).serializeArray();
        }
    }
    $.each(data, function(k,v){
        rdata[v.name] = v.value;
    });
    return rdata;
};

// timer 
function Timer(dateTimeString,elementIDToShowTimer) {
    this.timer = null;
    this.dateTimeString = dateTimeString; // format "Jan 5, 2021 15:37:25"
    this.elementIDToShowTimer = elementIDToShowTimer;
}

Timer.prototype.countDown = function(callBack) {
    // console.log(this.dateTimeString,this.elementIDToShowTimer);
    var countDownDate = new Date(this.dateTimeString).getTime();
    // Update the count down every 1 second
    var elID = this.elementIDToShowTimer;
    var timer = this.timer;
    timer = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var el = document.getElementById(elID);
        if (el && el != null && el != undefined) {
            el.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(timer);
                el.innerHTML = "";
                if (typeof callBack != undefined) {
                    callBack();
                }
            }
        } else {
            clearInterval(timer);
        }
    }, 1000);
};

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#profile_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}
// use readURL
$("body").on("change", "#pic_btn", function() {
    readURL(this);
});
