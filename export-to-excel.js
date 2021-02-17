//table data export to excel
 <a href="javascript:void(0);" class="btn btn-info pull-right" style="margin-top:-20px;" title="Print Excel" onclick="download1();">
 <script type="text/javascript" src="js-xlsx/xlsx.core.min.js"></script>
<script type="text/javascript" src="js-xlsx/FileSaver.js"></script>
<script type="text/javascript" src="js-xlsx/Export2Excel.js"></script>
<script>
    function download1() { export_table_to_excel('table1','GoogleFormTest', 'xlsx' || 'xlsx'); }
</script>
