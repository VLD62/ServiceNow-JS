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
	if (g_form.getValue('cmdb_ci') != '') {
		var  ga = new GlideAjax('setAssignmentGroupCI');
		ga.addParam('sysparm_name','populateAssignmentGroup');
		ga.addParam('sysparm_cmdb_ci',g_form.getValue('cmdb_ci'));
		ga.getXML(getResponse);
	//Based on SO	
	} else if (g_form.getValue('service_offering') != '') {
        var  ga2 = new GlideAjax('setAssignmentGroupSO');
		ga2.addParam('sysparm_name','populateAssignmentGroup');
		ga2.addParam('sysparm_service_offering',g_form.getValue('service_offering'));
		ga2.getXML(getResponse);
    } else if (g_form.getValue('business_service') == '') {
        
    }
}