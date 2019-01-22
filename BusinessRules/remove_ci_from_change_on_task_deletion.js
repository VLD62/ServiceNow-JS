(function executeRule(current, previous /*null when async*/) {
    var tci = new GlideRecord('task_ci');
        tci.addQuery('task', current.change_request);
        tci.addQuery('ci_item', current.cmdb_ci);
        tci.query();
        while(tci.next()){
            tci.deleteRecord();
        }
    })(current, previous);