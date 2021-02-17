/*
var baseurl='<?php echo BASEURL ; ?>';
var baseurl2='<?php echo BASEURL ; ?>2.6/online-test/services/';
var loder='<div class="loading"><div class="ball"></div><b>Please wait ......</b></div>';
*/
<script>
//append select option jquery
<!--get data class & subject --->
var classSec2='<?php echo json_encode($classSec2Daata); ?>';
    classSec2=$.parseJSON(classSec2);
var subjectList='<?php echo json_encode($subjectListData); ?>';
    subjectList=$.parseJSON(subjectList);
 <!---end--->  
    $('#class121').on('change', function() {
        var classGet=$(this).find(":selected").val();
        $('#subject121').html("<option value=''>select</option>");
        for (var k in classSec2[classGet]){
            $('#subject121').append(new Option(subjectList[k],k));
        }
        $('#subject121').selectpicker('refresh');
    });
//end
//searc data in table
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_id");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
  //search data in td
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }        
  }
}
//end
</script>
