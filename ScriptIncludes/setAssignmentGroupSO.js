var setAssignmentGroupSO = Class.create();
setAssignmentGroupSO.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	populateAssignmentGroup : function (){
		var gr2 = new GlideRecord('service_offering');
		gr2.addQuery ('sys_id',this.getParameter('sysparm_service_offering'));
		gr2.query();
		if (gr2.next()) {
			return gr2.support_group;
		}
	},
	type: 'setAssignmentGroupSO'
});