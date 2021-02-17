function export_table_to_excel(id,sheet_name, type, fn) {
	var wb = XLSX.utils.table_to_book(document.getElementById(id), {sheet:"Sheet JS"});
	var fname = fn || sheet_name+'.' + type;
	XLSX.writeFile(wb, fname);
}
