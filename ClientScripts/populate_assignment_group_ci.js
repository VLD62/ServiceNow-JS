function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	function getResponse(response){
		var answer = response.responseXML.documentElement.getAttribute("answer");
		console.log("********** VARIABLE TRACE " + answer + " VARIABLE TRACE **********");
		g_form.setValue('assignment_group',answer);
	}
	if (isLoading || newValue === '') {
		return;
	}
	//Based on CI
	var  ga = new GlideAjax('setAssignmentGroup');
	ga.addParam('sysparm_name','populateAssignmentGroupCI');
	ga.addParam('sysparm_cmdb_ci',g_form.getValue('cmdb_ci'));
	ga.getXML(getResponse);
	
}