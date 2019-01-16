function onChange(control, oldValue, newValue, isLoading) {
	
	var so = g_form.getReference('service_offering', doShowGroup); // doShowGroup is our callback function
}
function doShowGroup(so) { //reference is passed into callback as first arguments
	if (so.support_group != '' && g_form.getValue('cmdb_ci') == '')
		g_form.setValue('assignment_group',so.support_group);
	
}
