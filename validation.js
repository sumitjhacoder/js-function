// make variable blank if undefined
function str(variable) {
    if (typeof variable != 'undefined') {
	if (variable == null) {
	    variable = '';
	}
	return variable;
    }
    return '';
}
// check if null
function checkNull(variable) {
    if (typeof variable != 'undefined') {
	if (variable == null) {
	    return true;
	}
	return false;
    }
    return undefined;
}

// validate checkEmail
var checkEmail = function() {
    var email = document.getElementById('posterEmail');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
};

function ValidateEmail(email) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return (true)
    }
    return (false)
}



// Is url
var is_url = function(str) {
	var regEx = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ig;
   	if (str.match(regEx)) {
     return true;
   	} else {
   	  return false;
   	}
};

// Is Domain
var is_domain = function(str) {
	var ptrn = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ig;
 	console.log(str.match(ptrn+str));
    if (str.match(ptrn)) {
    	return true;
    }
    return false;
};


// validateEmail
var validateEmail = function(str) {
    var strLen  = str.length;
    var posAt   = str.indexOf("@");
    var posDot  = str.lastIndexOf(".");
    if (posAt > -1 && posDot > -1) {
        if (posAt < 2) { // before @ there is not 2 characters
            return "There must be at least 2 character before @ symbol.";
        } else if (posDot < posAt) {
            return "There must be one dot (.) after @ symbol.";
        } else {
            if ((strLen - posDot) < 2) {
                return "There must be at least 1 character after dot (.) symbol."
            } else if((posDot - posAt) < 3) {
                return "There must be at least 2 character after @ symbol."
            }  else {
                return false;
            }
        }
    } else {
        return "Email must contain @ and dot (.) character";
    }
    return false;
};

// Validate password

var validPassword = function(psw) { 
    if (psw.match(/[a-z]/g) && 
    psw.match(/[A-Z]/g) && 
    psw.match(/[0-9]/g) && 
    psw.match(/[^a-zA-Z\d]/g) && 
    psw.length >= 8) {
        return true; 
    } else {
        return false; 
    }
};

// Form validation constructor function
function FormValidation(formOrContainerID, isValidateAll) {
    // Note: add 'input_label' in data attribute in each element to get the label of the input to be shown in error message e.g = data-fieldLabel='User Name'
    var formID              = formOrContainerID || false;
    if (!formID) {
        alert('FormValidation() constructor function needs form id as required parameter');
        return;
    } else {
        formID              = '#'+formID+' ';
    }
    this.errors       = []; // object to store error details
    this.inputDataAttributes= {'input_label':'Name of input field label'}; // NOTE: name of data attribute which containes label/name of input field
    this.validateInputClass = ['phone','mobile','email','aadhar']; // NOTE: add these class to element for respective validation
    this.exceptionClasses   = ['no-validation', 'do-not-validate', 'no-validate']; // NOTE: add class 'no-validation' or 'do-not-validate' or 'no-validate' to element which not to be included in validation
    this.validateAll        = isValidateAll || false; // NOTE: if set true then validation will be applied on all element except exceptional class 
    this.inputAll           = document.querySelectorAll(formID+'input');
    this.selectAll          = document.querySelectorAll(formID+'select');
    this.textareaAll        = document.querySelectorAll(formID+'textarea');
    this.inputValue         = null;
    this.errMessage         = false;
    // console.log(this.selectAll);
}

FormValidation.prototype.validate = function() {
    var errors        = [];
    var exceptionClasses    = this.exceptionClasses;
    var validateInputClass  = this.validateInputClass;
    // validate input fields
    this.inputAll.forEach((element, index) => {
        var inputLabel  = element.dataset.input_label;
        var inputName   = element.name;
        var inputValue  = element.value;
        var inputType   = element.type;
        var isRequired  = element.hasAttribute('required');
        var isReadOnly  = element.getAttribute('readonly');
        var isDisabled  = element.getAttribute('disabled');
        var elClassList = element.getAttribute('class');

        this.inputValue = inputValue; 
        //console.log("inputName: ",inputName);
        // bs selectpicker dynamically generated text box for live search
        var noNameElement = (element.name == "") ? true : false; 
        var noIDElement   = (element.id == "") ? true : false;

        var exceptionEl = false;
        for(var i=0; i<exceptionClasses.length; i++){
            if (elClassList != null && elClassList.indexOf(exceptionClasses[i]) >= 0) {
                exceptionEl = true;
            }
        }

        var checkDataValidity = false;
        for(var i=0; i<validateInputClass.length; i++){
            if (elClassList != null && elClassList.indexOf(validateInputClass[i]) >= 0) {
                checkDataValidity = true;
            }
        }

        var checkRequiredValidity =  false;
        if (this.validateAll) {
            checkRequiredValidity = 
                                    !exceptionEl && 
                                    !noNameElement &&
                                    !noIDElement &&
                                    isReadOnly == null && 
                                    isDisabled == null && 
                                    inputType != 'button' && 
                                    inputType != 'submit' && 
                                    inputType != 'reset'
                                    ;
        } 

        element.style.outline = '';
        
        if (checkRequiredValidity || isRequired) {
            if (inputType == 'checkbox' && !element.checked) {
                 if (inputLabel != null && inputLabel != '' && typeof inputLabel !== undefined) {
                    this.errMessage = inputLabel + ' is required.';
                 } else {
                    this.errMessage = 'Please enter all mandatory field.';
                 }
                 errors.push({"inputName":inputName, "inputID":element.id, "inputType":inputType,"errMessage": this.errMessage,"elementObj":element});
                 element.style.outline = '1px auto #f60707';
            } else if (inputType == 'radio') {
                 this.errMessage = 'Please select all mandatory field.';
                 alert(element.name);
                 errors.push({"inputName":element.name, "inputID":element.id, "inputType":inputType,"errMessage": this.errMessage,"elementObj":element});
                 element.style.outline = '1px auto #f60707';
            } else {
                if(inputValue == '' || inputValue == null || inputValue == undefined) {
                    if (inputLabel != null && inputLabel != '' && typeof inputLabel !== undefined) {
                        this.errMessage = inputLabel + ' is required.';
                    } else {
                        this.errMessage = 'Please enter all mandatory field.';
                    }
                    errors.push({"inputName":inputName, "inputID":element.id, "inputType":inputType,"errMessage": this.errMessage,"elementObj":element});
                    element.style.outline = '1px auto #f60707';
                }
            } 
        }
        if(checkDataValidity && inputValue) {
            var validInput = true;
            if (elClassList != null && (elClassList.indexOf('phone') >= 0 || elClassList.indexOf('mobile') >= 0)) {
                validInput = this.validatePhone(inputValue);
            }
            if (elClassList != null && elClassList.indexOf('pincode') >= 0) {
                validInput = this.validatePincode(inputValue);
            }
            if (elClassList != null && elClassList.indexOf('aadhar') >= 0) {
                validInput = this.validateAadhar(inputValue);
            }
            if (elClassList != null && elClassList.indexOf('email') >= 0) {
                validInput = this.validateEmail(inputValue);
            }
            if (!validInput) {
                errors.push({"inputName":inputName, "inputID":element.id, "inputType":inputType,"errMessage": this.errMessage,"elementObj":element});
                element.style.outline = '1px auto #f60707';
            } 
            //console.log(validInput,this.errMessage);
        }
    });

    // validate select fields
    this.selectAll.forEach((element, index) => {
        var inputLabel     = element.dataset.input_label;
        var inputName      = element.name;
        var inputValue     = element.value;
        var inputType      = element.type;
        var isRequired  = element.hasAttribute('required');
        var isReadOnly  = element.getAttribute('readonly');
        var isDisabled  = element.getAttribute('disabled');
        var elClassList = element.getAttribute('class');
        var exceptionEl = false;
        var errDetail   = {};
        for(var i=0; i<exceptionClasses.length; i++){
            if (elClassList != null && elClassList.indexOf(exceptionClasses[i]) >= 0) {
                exceptionEl = true;
            }
        }
        // bs selectpicker dynamically generated text box for live search
        var noNameElement = (element.name == "") ? true : false; 
        var noIDElement   = (element.id == "") ? true : false;

        var checkRequiredValidity =  false;
        if (this.validateAll) {
            checkRequiredValidity =  
                                    !exceptionEl && 
                                    !noNameElement &&
                                    !noIDElement &&
                                    isReadOnly == null && 
                                    isDisabled == null
                                ;
        }

        element.style.outline = '';
        if (checkRequiredValidity || isRequired) {
            if (inputValue == '' || inputValue == null || inputValue == undefined) {
                if (inputLabel != null && inputLabel != '' && typeof inputLabel !== undefined) {
                    this.errMessage = inputLabel + ' is required.';
                } else {
                    this.errMessage = 'Please select all mandatory field.';
                }
                errors.push({"inputName":inputName, "inputID":element.id, "inputType":inputType,"errMessage": this.errMessage,"elementObj":element});
                element.style.outline = '1px auto #f60707';
            }
        }
    });

    // validate textarea fields
    this.textareaAll.forEach((element, index) => {
        var inputLabel  = element.dataset.input_label;
        var inputName   = element.name;
        var inputValue  = element.innerHTML;
        var inputType   = element.type;
        var isRequired  = element.hasAttribute('required');
        var isReadOnly  = element.getAttribute('readonly');
        var isDisabled  = element.getAttribute('disabled');
        var elClassList = element.getAttribute('class');
        var exceptionEl = false;
        var errDetail   = {};
        for(var i=0; i<exceptionClasses.length; i++){
            if (elClassList != null && elClassList.indexOf(exceptionClasses[i]) >= 0) {
                exceptionEl = true;
            }
        }
        // bs selectpicker dynamically generated text box for live search
        var noNameElement = (element.name == "") ? true : false; 
        var noIDElement   = (element.id == "") ? true : false;

        var checkRequiredValidity =  false;
        if (this.validateAll) {
            checkRequiredValidity =  
                                    !exceptionEl && 
                                    !noNameElement &&
                                    !noIDElement &&
                                    isReadOnly == null && 
                                    isDisabled == null
                                    ;
        }

        element.style.outline = '';
        if (checkRequiredValidity || isRequired) {
            if (inputValue == '' || inputValue == null || inputValue == undefined) {
                if (inputLabel != null && inputLabel != '' && typeof inputLabel !== undefined) {
                    this.errMessage = inputLabel + ' is required.';
                } else {
                    this.errMessage = 'Please enter all mandatory field.';
                }
                errors.push({"inputName":inputName, "inputID":element.id, "inputType":inputType,"errMessage": this.errMessage,"elementObj":element});
                element.style.outline = '1px auto #f60707';
            }
        }
    });

    if (errors.length > 0) {
        this.errors = errors;
        this.errors[0].elementObj.focus();
        console.log(this.errors);
        return false;
    } else {
        return true;
    }
}

FormValidation.prototype.getMessage =  function() {
    if (this.errors.length > 0) {
        // return first error as message because it is focused 
        return this.errors[0].errMessage; 
    }
}

FormValidation.prototype.validatePhone = function() {
    var regEx = /^\d{10}$/;
    if (this.inputValue.match(regEx)) {
        return true;
    } else {
        this.errMessage = "Phone/Mobile number should be 10 digit number.";
        return false;
    }
}

FormValidation.prototype.validateAadhar = function(inputValue) {
    var regEx = /^\d{12}$/;
    if (inputValue.match(regEx)) {
        return true;
    } else {
        this.errMessage = "AADHAR number should be 12 digit number.";
        return false;
    }
}

FormValidation.prototype.validatePincode = function(inputValue) {
    var regEx = /^\d{6}$/;
    if (inputValue.match(regEx)) {
        return true;
    } else {
        this.errMessage = "Pincode should be 6 digit number.";
        return false;
    }
}

FormValidation.prototype.validateEmail = function() {
    var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.inputValue.match(regEx)) {
        return true;alert();
    } else {
        this.errMessage = "Please enter valid email ID.";
        console.log(this.errMessage);
        return false;
    }
}
// End from validation 
