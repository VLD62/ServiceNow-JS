//Condition is current.state ==  -4 || ( current.state ==  -3 &&  (gs.getUser().isMemberOf("CAB Approval")));
onClick();
function onClick(){
	
	var apr = new GlideRecord('sysapproval_approver');
	apr.addQuery('state', 'requested');
	apr.addQuery('approver', gs.getUserID());
	apr.addQuery('sysapproval', current.sys_id);
	apr.query();
	while(apr.next()){
		apr.state = 'approved';
		apr.update();
		
	}
	action.setRedirectURL (current) ;
}
