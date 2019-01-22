var outage = new GlideRecord("cmdb_ci_outage");
var end = new GlideDateTime();
end.setDisplayValue(current.end_date.getDisplayValue());
end.addSeconds(3600);
outage.cmdb_ci = current.cmdb_ci;
outage.u_change = current.sys_id;
outage.begin = current.start_date;
outage.end = end;
outage.type = 'Degradation';
var outageID = outage.insert();
gs.info("********** CI Sys ID is: " + current.cmdb_ci + "**********");