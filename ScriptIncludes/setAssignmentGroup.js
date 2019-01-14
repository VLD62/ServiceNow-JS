var setAssignmentGroup = Class.create();
setAssignmentGroup.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	populateAssignmentGroup : function (){
		var gr = new GlideRecord('cmdb_ci');
		gr.addQuery ('sys_id',this.getParameter('sysparm_cmdb_ci'));
		gr.query();
		if (gr.next()) {
			return gr.support_group;
		}
	},
	type: 'setAssignmentGroup'
});