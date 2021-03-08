<!---html
<div id='ageEligibility'></div>
<script>--->
function calculateAgeNew(a,b,c,d) {
	//console.log(getAge(a,b,c,d));
      var now = new Date(a);
      var dob = new Date(b);
      //var dateFC1 =parseFloat(c);
      //var dateFC2 =parseFloat(d);
      var dateFC1 =new Date(c);
      var dateFC2 =new Date(d);
      
      var year=now.getYear()-dob.getYear();
      var month=now.getMonth()-dob.getMonth();
      if(month<0){
        month=now.getMonth()+12-dob.getMonth();
        year=year-1;
      }
      var day=now.getDate()-dob.getDate();
      if(day<0){
        var monthNumber=dob.getMonth();
        var fullDate=getFullDate(monthNumber);
        day=now.getDate()+fullDate-dob.getDate();
        month=month-1;
      }
      //var dateFC3 =year+'.'+month;
      //var dateFCG =parseFloat(dateFC3);

//new
var dayC=$('#dob_d').val();
	  var monthC=$('#dob_m').val();
	  var yearC=$('#dob_y').val();
	  if(isNaN(dayC)) {
	      $('#howOldYouAre').html("Oops! Select Day ");
	       return ;
	  }
	  if(isNaN(monthC)) {
	      $('#howOldYouAre').html("Oops! Select Month ");
	      return ;
	  }
	  if(isNaN(yearC)) {
	      $('#howOldYouAre').html("Oops! Select Year ");
	      return ;
	  }
	  $('#howOldYouAre').html(year+" Years, "+month+" Months, "+day+" Days!");
      //console.log(dayC+" d, "+monthC+" M, "+yearC+" Y!");
      //console.log(year+" Years, "+month+" Months, "+day+" Days!");
      //console.log(dateFCG);
      //console.log(dateFC2);
      //console.log(dateFCG);
      //console.log(dateFC1);
//end


      //if( (dateFCG >= dateFC1) && (dateFCG < dateFC2)){ 
      if((dob <= dateFC1 && dob >= dateFC2)) {
	  //return year+"ssss Years, "+month+" Months, "+day+" Days! =="+dateFC1+"-"+dateFC2+"/"+dateFCG;
        $('.checkAge').removeClass('btn-danger');
        $('.checkAge').addClass('btn-success');

        $('#howOldYouAre').removeClass('text-danger');
        $('#howOldYouAre').addClass('text-success');

        $('#validate_admission').html("<strong class='text-primary'>Congratulations.. your child is eligible</strong>");
        return "<input type='hidden' value='Age Eligibility' id='ageEligibilityRemark' name='ageEligibilityRemark'>";
      }
//      else if((day==0) && (dateFCG==dateFC2)){
//	 // alert('xxx');
//	  $('.checkAge').removeClass('btn-danger');
//        $('.checkAge').addClass('btn-success');
//
//        $('#howOldYouAre').removeClass('text-danger');
//        $('#howOldYouAre').addClass('text-success');
//
//        $('#validate_admission').html("<strong class='text-primary'>Congratulations.. your child is eligible</strong>");
//        return "<input type='hidden' value='Age Eligibility' id='ageEligibilityRemark' name='ageEligibilityRemark'>";
//      }
      else{
	  $('.checkAge').removeClass('btn-success');
	  $('.checkAge').addClass('btn-danger');

      $('#howOldYouAre').removeClass('text-success');
	  $('#howOldYouAre').addClass('text-danger');
	  
      $('#validate_admission').html("<strong class='text-warning'>Oops.. your child is not eligible</strong>");
	  //return year+"yyy Years, "+month+" Months, "+day+" Days!=="+dateFC1+"-"+dateFC2+"/"+dateFCG;
	  if(SESS_ID=='31'){
	    return "Remark : <input type='text' value='' id='ageEligibilityRemark' name='ageEligibilityRemark'>";
	  }
	  else{
	      return "Remark : <input type='hidden' value='' id='ageEligibilityRemark' name='ageEligibilityRemark'>";
	  }
      }
     // return year+" Years, "+month+" Months, "+day+" Days!";
    };
function getFullDate(x){
      switch(x){
        case 0:
          return 31;
          break;
        case 1:
          return 28;
          break;
        case 2:
          return 31;
          break;
        case 3:
          return 30;
          break;
        case 4:
          return 31;
          break;
        case 5:
          return 30;
          break;
        case 6:
          return 31;
          break;
        case 7:
          return 31;
          break;
        case 8:
          return 30;
          break;
        case 9:
          return 31;
          break;
        case 10:
          return 30;
          break;
        case 11:
          return 31;
      }
    }

document.getElementById("ageEligibility").innerHTML=""+calculateAgeNew(ageP2,ageP3,fromAge,toAge);
document.getElementById("ageEligibility").innerHTML=""+calculateAgeNew('2021-01-12','2021-02-12','2020-01-01','2021-03-01');
</script>
