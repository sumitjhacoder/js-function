//html
// <input type='text' value='' name='amount' class='amount_cal' >
$("body").on("click",".amount_cal", function(e){
    e.preventDefault();
    var data=$(this).val();
  alert(data);
});
