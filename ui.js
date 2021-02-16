// pop up confirm message 
if (typeof pop_confirm === 'undefined') {
    function pop_confirm(message, yesCallback) {
        var messageHtml = `
            <div style="width: 100%;height: 100vh;background: #06060633;position: fixed;top: 0;left: 0;z-index: 999999;">
                <div style="top:30%;width:98%;max-width: 390px;height: 200px;position: relative;z-index: 999999999;margin: 0 auto;border: 1px solid #ccc;box-shadow: 7px 7px 10px #00000073;background: #fff;">
                <p style="text-align:left;font-size:20px;background: #f1f1f1;font-weight: 700;padding: 5px;margin: 0;">Confirm</p>
                <hr style="margin:0;padding:0;">
                <p style="font-size: 18px;margin:10px;text-align: center;">${message}</p>
                <div style="position: absolute;bottom: 0;width: 100%;padding: 10px;text-align: center;">
                    <button onclick="javascript:return pop_confirm('yesCallback', ${yesCallback});" style="background: #28a745;color: #fff;font-size: 20px;border:1px solid #28a745;border-radius: 5px;box-shadow: 10px 10px 10px #ccc;margin: 0px 15px;width:60px;" onclick="">YES</button>
                    <button onclick="pop_confirm(false)" style="background: #F44336;color: #fff;font-size: 20px;border:1px solid #f91f0f;border-radius: 5px;box-shadow: 10px 10px 10px #ccc;margin: 0px 15px;width:60px;" onclick="">NO</button>
                </div>
                </div>
            </div>
            `;
        try{
            message  = (!message || message == "undefined") ? false : message;
            var popupContainer = document.querySelector(".pop_message_container");
            if (!message) {
                (popupContainer != null) ? popupContainer.remove() : '';
            } else {
                if (message == 'yesCallback') {
                    if (typeof yesCallback == 'function') {
                        yesCallback();
                    }
                    (popupContainer != null) ? popupContainer.remove() : '';
                    return true;
                } else {
                    var div = document.createElement('div');
                    div.classList.add("pop_message_container");
                    div.innerHTML = messageHtml;
                    document.body.appendChild(div);
                }
            }
        } catch(err){console.log(err.message);}
    }
}

// pop up alert message 
if (typeof pop_message === 'undefined') {
    function pop_message(message,messageType="success", redirectTo = '') {
        var headColor = (messageType.toString().toLowerCase() == 'success') ? "green" : "red";
        var headMessage  = (messageType.toString().toLowerCase() == 'success') ? "SUCCESS!" : "WARNING!";
        var messageHtml = `
            <div style="width: 100%;height: 100vh;background: #06060633;position: fixed;top: 0;left: 0;z-index: 999999;">
                <div style="top:30%;width:98%;max-width: 390px;height: 200px;position: relative;z-index: 999999999;margin: 0 auto;border: 1px solid #ccc;box-shadow: 7px 7px 10px #00000073;background: #fff;">
                    <p style="color:${headColor};text-align:center;font-size:20px;background: #f1f1f1;font-weight: 700;padding: 5px;margin: 0;">${headMessage.toUpperCase()}</p>
                    <hr style="margin:0;padding:0;">
                    <p style="font-size: 18px;margin:10px;text-align: center;">${message}</p>
                    <div style="position: absolute;bottom: 0;width: 100%;padding: 10px;text-align: center;">
                    <button onclick="pop_message(false, '', '${redirectTo}')" style="background: #2084ff;color: #fff;font-size: 20px;border:1px solid #5bc0de;border-radius: 5px;box-shadow: 10px 10px 10px #ccc;margin: 0px 15px;width:60px;" onclick="">OK</button>
                    </div>
                </div>
            </div>
            `;
        try{
            message  = (!message || message == "undefined") ? false : message;
            if (!message) {
                var popupContainer = document.querySelector(".pop_message_container");
                (popupContainer != null) ? popupContainer.remove() : '';
                if (redirectTo != '') {
                    window.location.href=redirectTo;
                }
            } else {
                var div = document.createElement('div');
                div.classList.add("pop_message_container");
                div.innerHTML = messageHtml;
                document.body.appendChild(div);
            }
        } catch(err){console.log(err.message);}
    }
}

// JS LOADER
if (typeof js_loader === 'undefined') {
    var js_loader = function(show, containerID) {
        /** 
         * show=1 hide=0
         * NOTE: Change image for loader below
         **/ 
        var imgURL          = 'https://vidyasagarf.accevate.com/img/ajax_loader.gif';
        var imgURL          = false;
        var append_html     = '';
        var styleDiv        = '';
        var containerWidth  = 0;
        var containerHeight = 0;
        var leftPos         = 0;
        if (typeof containerID !== 'undefined') { // position reletive
            container = $('#'+containerID);
            containerHeight = container.height();
            containerWidth  = container.width();
            styleDiv  += "position:relative;padding:2px;width:65px;height:65px;"; 
        } else { // position fixed
            container = $('body');
            styleDiv  += "position:fixed;padding:2px;z-index:999999;";
            containerWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            containerHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            // console.log(containerID,containerHeight);
        }

        leftPos         = parseInt(containerWidth/2) - 32;
        topPos          = parseInt(containerHeight/2) - 32;
        styleDiv        += "top:"+topPos+"px;left:"+leftPos+"px;padding:2px;";
        append_html     += '<div id="my_js_loader" class="text-center" style="'+ styleDiv +'">';
        if (!imgURL) {
            append_html     += '<div class="spinner-border text-info d-inline-block"></div>';
        } else {
            append_html     += '<img src="'+imgURL+'" width="64" height="64">';
        }
        append_html     += '</div>';
        append_html     += '<div id="backdrop_div" style="width: 100%;height: 100vh;position: fixed;z-index: 999999;left: 0;top: 0;background: #0000001f;"></div>';
        // show = 1 / hide = 0
        $('#backdrop_div').css({"background": "#cecece"}); 
        if (show == 1) {
            container.prepend(append_html);
            
        } else {
            // container.css({"background": "#fff"});
            $("#my_js_loader").remove();
            $("#backdrop_div").remove();
        }
    };
}

// JS LOADER
if (typeof js_loader !== 'function') {
    function js_loader(showLoader,msg) {
        msg = msg || 'Please wait';
        var showLoader = showLoader || 0;
        var loaderHtml = `
            <div style="width: 100%;height: 100vh;background: #0a0a0a69;position: fixed;top: 0;z-index: 999999;text-align: center;padding-top: 20%;font-size: 20px;font-family: monospace;">
                <span class="text-dark" style="background: #fff;padding: 10px;border-radius: 5px;color: #343a40;margin-top: 15%;display: inline-block;">
                    <span style="font-size:14px;">${msg}.</span><span class="spinner-border align-middle"></span>
                </span>
                
            </div>`;
        var exist_loader = document.querySelector('.js_loader');
        var div = document.createElement('div');
        div.classList.add('js_loader');
        div.innerHTML = loaderHtml;
        if (showLoader) {
            (exist_loader == null) ? document.body.appendChild(div) : console.log('Loader already exist.');
        } else {
            (exist_loader == null) ? console.log('Loader already removed.') : exist_loader.remove();
        }
    }
}

// BS 4 Alert message to show after ajax or any other operation
var bs_alert_msg = function(msg, alert_class) {
    var bs_alert_msg = '';
    if (alert_class === undefined) {
        alert_class = 'success';
    }
    bs_alert_msg += '<div class="alert alert-'+alert_class+' alert-dismissible col-md-12">';
    bs_alert_msg += '<button type="button" class="close" data-dismiss="alert">&times;</button>';
    bs_alert_msg += '<strong>'+msg+'</strong>';
    bs_alert_msg += '</div>';
    return bs_alert_msg;
};

// getSelectedOptionText
function getSelectedOptionText(selectElelentID) {
    var sel	= document.getElementById(selectElelentID);
    var selOpt = sel.options[sel.selectedIndex];
    if (selOpt !== undefined) {
        return selOpt.innerText;
    } else {
        return '';
    }
}

// setNonBlankfieldBG
document.querySelectorAll("select").forEach(function(sel,i){
        sel.addEventListener("change",setNonBlankfieldBG);
});
document.querySelectorAll("input").forEach(function(sel,i){
    sel.addEventListener("blur",setNonBlankfieldBG);
});
// on change of input change bg color if value not blank 
function setNonBlankfieldBG() {
    $("input:not([type='button']):not([type='submit']):not([type='reset'])").css({"background":"#fff"});
    $("select").css({"background":"#fff"});
    var inputs = document.querySelectorAll("input:not([type='button']):not([type='submit']):not([type='reset'])");
    var selects = document.querySelectorAll("select");
    console.log(inputs);
    inputs.forEach(function(input){
        if (input.value != null && input.value.trim() != '') {
            input.style.background = "#eafbfb";
        }
    });
    selects.forEach(function(select){
        // //console.log(select.value);
        if (select.value != '' && select.value != '0' && select.value != 'null' && select.value.toLowerCase().indexOf('select') == -1) {
            select.style.background = "#eafbfb";
        }
    });
}


// Animate JS element after any event
var focusAnimate = function(paramObj) {
    Obj = {
        "elementID": paramObj.elementID,
        "timeToExecute": (paramObj.timeToExecute == undefined) ? 5000: paramObj.timeToExecute,
        "removeShadow": (paramObj.removeShadow == undefined) ? true: paramObj.removeShadow,
        "bgOpacityZero": (paramObj.bgOpacityZero == undefined) ? true: paramObj.bgOpacityZero,
    };
    // msTime = time in mili seconds
    var el = $("#"+Obj.elementID);
    var totalRunTime = 0;
    var original_bg =  $("body").css("background-color");
    el.css("box-shadow","10px 7px 10px #ccc");
    var A = 1; // opacity
    var intervalTime = 100; // time after which 
    stepA =  .03; 
    var interval = setInterval(function() {
        totalRunTime += intervalTime;
        var R = 255;
        var G = 170;
        var B = 90;
        if (A >= 0) {
            A = A.toFixed(2);
            var RGBA = 'rgb('+R+','+G+','+B+','+A+')';
            el.css("background-color",RGBA);
            console.log(Obj.bgOpacityZero,A,stepA);

            if (Obj.bgOpacityZero) { // if zero opacity allowed
                A -= stepA;
            } else { // don't decrease after .5 opacity
                var fixedOpacity = .7;
                A = (A > fixedOpacity) ? A - stepA : fixedOpacity;;
            }
        }
        if (totalRunTime > Obj.timeToExecute) {
            clearInterval(interval);
            if (Obj.bgOpacityZero) {
                el.css("background-color",original_bg);
            }
            if (Obj.removeShadow) {
                el.css("box-shadow","");
            }
            return;
        }
    },100);
};


var unloaded = false;
$(window).on('beforeunload', unload);
$(window).on('unload', unload);	 
function unload(){		
    if(!unloaded){
        $('body').css('cursor','wait');
        $.ajax({
            type: 'get',
            async: false,
            url: window.location.origin+'/logout',
            success:function(){ 
                unloaded = true; 
                $('body').css('cursor','default');
            },
            timeout: 5000
        });
    }
}

// create clone of form or any element with different id attribute number appended in last with underscore
// NOTE: Every input/select/textarea should have an id like abc_1 and same id in for attribute of label
function createElementClone(cloneElementClass, insertAfterElementClas) {
    var cloneEl     = $("."+cloneElementClass+":last").clone(true);
    var childInputs = $("."+cloneElementClass+":last input");
    var childSelect = $("."+cloneElementClass+":last select");
    $.each(childInputs, function(i,el){
        var inputID = el.id;
        var newID = getElementNewID(el);
        $(cloneEl).find('input[id='+inputID+']').attr("id", newID);
        $(cloneEl).find('label[for='+inputID+']').attr("for", newID);
    });

    $.each(childSelect, function(i,el) {
        var inputID = el.id;
        var newID = getElementNewID(el);
        $(cloneEl).find('select[id='+inputID+']').attr("id", newID);
        $(cloneEl).find('label[for='+inputID+']').attr("for", newID);
    });

    $(cloneEl).find('select').val("");
    $(cloneEl).find('textarea').val("");
    $(cloneEl).find('input').val("");
    $(cloneEl).find('input:checked').prop("checked", false);
    if (insertAfterElementClas !== undefined) {
        $(cloneEl).insertAfter("."+insertAfterElementClas);
    } else {
        $(cloneEl).insertAfter("."+cloneElementClass+":last");
    }

    // every element must have id ending with underscore ( _ ) and a number
    function getElementNewID(el) {
        var elID      = el.id;
        if (!elID) {
            alert("Every elemet should have a unique id to use function getElementNewID()");
            return false;
        }
        var splitID   = elID.split('_');
        var index     = 1;
        var newIndex  = 1;
        var newID     = "";
        if (splitID.length > 1) {
            index    = splitID.length - 1;
            newIndex = Number(splitID[index]) + 1;
            splitID.pop();
            newID    = splitID.join("") + "_" + newIndex;
        } else {
            newID    = elID + "_" + index;
        }
        return newID;
    }
}
