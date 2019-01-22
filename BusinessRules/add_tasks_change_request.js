(function executeRule(current, previous /*null when async*/) {
	gs.addInfoMessage("Task 2.2");
	if (current.sys_id == ''){
		return;
	}
	var tci = new GlideRecord('task_ci');
	var ct = new GlideRecord('change_task');	
	tci.addQuery('task',current.sys_id); //finds CI's based on the current task
	tci.query();
	while(tci.next()){
		ct.initialize();
		ct.change_request = current.sys_id;
		ct.cmdb_ci = tci.ci_item; 
		ct.short_description = "Change Task of Change Request " + current.number;
		ct.description = current.description;
		ct.assignment_group = current.assignment_group;
		ct.assigned_to = current.assigned_to;
		ct.insert();
	}
})(current, previous);