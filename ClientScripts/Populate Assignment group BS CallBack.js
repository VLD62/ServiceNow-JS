function onChange(control, oldValue, newValue, isLoading) {
	
	var bs = g_form.getReference('business_service', doShowGroup); // doShowGroup is our callback function
}
function doShowGroup(bs) { //reference is passed into callback as first arguments
	if (bs.support_group != '' && g_form.getValue('cmdb_ci') == '' && g_form.getValue('service_offering') == '')
		g_form.setValue('assignment_group',bs.support_group);
	
}
