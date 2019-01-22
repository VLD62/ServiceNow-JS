(function executeRule(current, previous /*null when async*/) {
	gs.addInfoMessage("Not Allowed");
if (!(gs.getUser().isMemberOf(current.assignment_group.name))){
current.setAbortAction(true);
}
	else 
	{
		//current.setAbortAction(true);
	}
	})(current, previous);