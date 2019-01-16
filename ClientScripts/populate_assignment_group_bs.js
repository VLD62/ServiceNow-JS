function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	function getResponse(response){
		var answer = response.responseXML.documentElement.getAttribute("answer");
		console.log("********** VARIABLE TRACE BS " + answer + " VARIABLE TRACE BS **********");
		g_form.setValue('assignment_group',answer);
	}
	if (isLoading || newValue === '') {
		return;
	}
 	//Based on BS	
	if (g_form.getValue('cmdb_ci') == '') {
		var  ga = new GlideAjax('setAssignmentGroup');
		ga.addParam('sysparm_name','populateAssignmentGroupBS');
		ga.addParam('sysparm_business_service',g_form.getValue('business_service'));
		ga.getXML(getResponse);
	}
}