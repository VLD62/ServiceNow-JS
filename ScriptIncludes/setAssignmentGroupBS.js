var setAssignmentGroupBS = Class.create();
setAssignmentGroupBS.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	populateAssignmentGroup : function (){
		var gr3 = new GlideRecord('cmdb_ci_service');
		gr3.addQuery ('sys_id',this.getParameter('sysparm_cmdb_ci_service'));
		gr3.query();
		if (gr3.next()) {
			return gr3.support_group;
		}
	},
	type: 'setAssignmentGroupBS'
});