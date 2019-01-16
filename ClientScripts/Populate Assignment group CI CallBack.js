function onChange(control, oldValue, newValue, isLoading) {
	
	var ci = g_form.getReference('cmdb_ci', doShowGroup); // doShowGroup is our callback function
}
function doShowGroup(ci) { //reference is passed into callback as first arguments
	if (ci.support_group != '')
		g_form.setValue('assignment_group',ci.support_group);
	
}
