function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading) {
		return;
	}
	var ga = new GlideAjax('TME_ManagementBoardUtils');
	ga.addParam('sysparm_name', 'getSupportGroup');
	ga.addParam('table_name', 'sys_user_group');
	ga.addParam('field_name', 'u_senior_manager');
	ga.addParam('selected_ids', newValue);
	ga.getXML(setSeniorManager);
	function setSeniorManager(response) {
		var answer = response.responseXML.documentElement.getAttribute("answer");
		if (!!answer){
			g_form.setValue('u_senior_departments_manager', answer);	
		} else {
			g_form.clearValue('u_senior_departments_manager');
		}	 			
	}	
}