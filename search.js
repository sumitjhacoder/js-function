<!--
<input type="text" id="myInput" onkeyup="myFunction()" style="margin-left:5px !important;" class=" pull-right" placeholder="Search for Name" title="Type in a name">
  Student Status : 
<select type="text" name="byClass" id="studentStatus" onchange="studentStatus();" style="width:100px; padding:4px; border-radius:6px;">
  <option value="">Show All</option>
  <option value="Enquiry">Enquiry</option>
  <option value="Reg. issued">Reg. issued</option>
  <option value="Reg. Received">Reg. Received</option>
  <option value="Adm. approved">Adm. approved</option>
  <option value="Adm. unapproved">Adm. unapproved</option>
  <option value="Adm. form issued">Adm. form issued</option>
  <option value="Admitted">Admitted</option>       
</select>
          &nbsp;
<label > Search : <input type="text" style="width:200px; padding:4px; border-radius:6px;" name="table_data_search" id="table_data_search" placeholder="Type Here"></label>
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

//type 2
$("#table_data_search").keyup(function() {
    var value = this.value.toLowerCase().trim();
    $("table tr").each(function(index) {
        if (!index) return;
        $(this).find("td").each(function() {
            var id = $(this).text().toLowerCase().trim();
            var not_found = (id.indexOf(value) == -1);
            $(this).closest('tr').toggle(!not_found);
            return not_found;
        });
    });
});

//type3
 function studentStatus() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("studentStatus");
    filter = input.value.toUpperCase();
    table = document.getElementById("testTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[10];
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
