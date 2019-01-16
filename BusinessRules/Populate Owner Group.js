(function executeRule(current, previous /*null when async*/) {
 
    current.u_owner_group = current.getDisplayValue('assignment_group');
    current.update();
 
})(current, previous);