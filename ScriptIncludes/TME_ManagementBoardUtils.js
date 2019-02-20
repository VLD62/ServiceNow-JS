var TME_ManagementBoardUtils = Class.create();
TME_ManagementBoardUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	getCriticality: function(){
		var ids = this.getParameter('seleted_ids');
		var serviceGr = new GlideRecord('cmdb_ci_service');
		serviceGr.addEncodedQuery("sys_idIN" + ids);
		serviceGr.orderBy('busines_criticality');
		serviceGr.query();
		var ans;
		if(serviceGr.next()){			
			ans = serviceGr.getValue('busines_criticality');			
		}
		return ans;
	},
		getSupportGroup: function(){
		//get related support groups
		var ids = this.getParameter('selected_ids');
		var tableName  = this.getParameter('table_name');
		var fieldName  = this.getParameter('field_name');
		var serviceGr = new GlideRecord(tableName);
		serviceGr.addEncodedQuery("sys_idIN" + ids);
		serviceGr.query();
		var arrReturn = [];
		var uniqArr = [];
		while(serviceGr.next()){		
			if (!!serviceGr.getValue(fieldName)) {
						//arrReturn.push(serviceGr.getValue(fieldName));
				var emptyArr = [];
				emptyArr = serviceGr.getValue(fieldName);
				
				arrReturn = new ArrayUtil().union(arrReturn,emptyArr);
				gs.info("KOZA TEST: "  + arrReturn.toString());
			}
		}
		//arrReturn remove duplicate
		uniqArr = new ArrayUtil().unique(arrReturn);	

			gs.info("KOZA UNIQ TEST: " + arrReturn.toString()); 
		return uniqArr.join(',');
	},
	
	validateClose: function(mngBoard) {		
		//check if recrod was state was moved to Temporary Recovered during the last 24h
		var mngbId;
		if (!!mngBoard){              //if called from server side script
				mngbId = mngBoard.sys_id;
		} else {                      //if called from GlideAjax
			mngbId = this.getParameter('sys_id'); 
		}
		var nowGdt = new GlideDateTime();
		var auditGr = new GlideRecord('sys_audit');
		auditGr.addQuery('documentkey', mngbId);
		auditGr.addQuery('fieldname', 'u_mgb_status');
		auditGr.orderByDesc('sys_created_on');
		auditGr.query();
		if (auditGr.next()){
			var createdGdt = new GlideDateTime(auditGr.getValue('sys_created_on'));
			createdGdt.addDaysLocalTime(1);
			if (nowGdt >= createdGdt) {
				return true;
			} else {
				return gs.dateDiff(nowGdt, createdGdt, false);
			}
		}				
	},
    type: 'TME_ManagementBoardUtils'
});