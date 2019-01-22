(function executeRule(current, previous /*null when async*/ ) {
    var affectedCI = ""
    var ci = new GlideRecord('task_ci');
    ci.addQuery('task', current.sys_id);
    ci.addQuery('ci_item.name');
    ci.query();
    while (ci.next()) {
        affectedCI = ci.ci_item;
    }
    if (affectedCI == "") {
        gs.addInfoMessage("Please select at least one 'Affected CI' in 'Affected CIs' tab.")
        current.setAbortAction(true);
    }
})(current, previous);