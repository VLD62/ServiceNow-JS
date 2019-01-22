(function executeRule(current, previous /*null when async*/) {
	var result = [];
	var target = new GlideRecord('task') ;
	target.addQuery('short_description','CONTAINS','TestScript');
	target.query(); // Issue the query to the database to get relevant records
	while (target.next()) {
		result.push(target.getValue("number"));
	}
	gs.addInfoMessage('These records are active TestScript Incidents: ' + result.join(", "));
})(current, previous);