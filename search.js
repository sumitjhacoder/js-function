<!--
<input type="text" id="myInput" onkeyup="myFunction()" style="margin-left:5px !important;" class=" pull-right" placeholder="Search for Name" title="Type in a name">
  -->
  function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("testTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
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
  //td = tr[i].getElementsByTagName("td")[2];
// note :  which td data we want
