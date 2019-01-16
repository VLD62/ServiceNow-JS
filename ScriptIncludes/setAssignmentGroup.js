//Works in pair with populate assignment group scripts
var setAssignmentGroup = Class.create();
setAssignmentGroup.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	populateAssignmentGroupCI : function (){
		var gr = new GlideRecord('cmdb_ci');
		gr.addQuery ('sys_id',this.getParameter('sysparm_cmdb_ci'));
		gr.query();
		if (gr.next()) {
			return gr.support_group;
		}
	},
		populateAssignmentGroupSO : function (){
		var gr = new GlideRecord('service_offering');
		gr.addQuery ('sys_id',this.getParameter('sysparm_service_offering'));
		gr.query();
		if (gr.next()) {
			return gr.support_group;
		}
	},
		populateAssignmentGroupBS : function (){
		var gr = new GlideRecord('cmdb_ci_service');
		gr.addQuery ('sys_id',this.getParameter('sysparm_business_service'));
		gr.query();
		if (gr.next()) {
			return gr.support_group;
		}
	},
	type: 'setAssignmentGroup'
});