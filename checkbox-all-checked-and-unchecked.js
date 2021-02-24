<input type='checkbox' id='checkAll' >
  <script type="text/javascript">
  $("#checkAll").click(function () {
     $('input:checkbox').not(this).prop('checked', this.checked);
     if($(this).is(":checked")) {
        $('.trC').addClass("text-danger");
    } else {
        $('.trC').removeClass("text-danger");
    }
    var numberNotChecked1 = $('input:checkbox:checked').length;
    
 });
</script>
