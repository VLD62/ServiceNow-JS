function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	function getResponse(response){
		var answer = response.responseXML.documentElement.getAttribute("answer");
		console.log("********** VARIABLE TRACE " + answer + " VARIABLE TRACE **********");
		g_form.setValue('assignment_group',answer);
	}
	if (isLoading || newValue === '') {
		return;
	}
 	//Based on SO	
	if (g_form.getValue('cmdb_ci') == '') {
		var  ga = new GlideAjax('setAssignmentGroup');
		ga.addParam('sysparm_name','populateAssignmentGroupSO');
		ga.addParam('sysparm_service_offering',g_form.getValue('service_offering'));
		ga.getXML(getResponse);
	}
}