var ServiceSubscriptionRBB = Class.create();

ServiceSubscriptionRBB.prototype = {
  initialize : function() {
  },
	testf: function (){
		return "name=Bond Trading London";
	},
  getMySubscriptions : function(caller) {
    var answer = new Object();
	this._caller_id(user);
	  gs.info("Testing message 1: " + user);
    this._addUser(answer, caller);
    this._addGroup(answer, caller);
    var u = GlideUser.getUserByID(gs.getUserID());
	  gs.info("Testing message 2: " + u);
	//var x = GlideUser.getUserByID(current.caller_id);
	  var x = GlideUser.getUserByID(caller);
	  gs.info("Testing message 3: " + x);
	  var ourUser = gs.getUser();
	  newUser = ourUser.getUserByID('x');
	  gs.info("Testing message 4: " + newUser);
    this._addDept(answer, x.getDepartmentID());
    this._addLocation(answer, x.getLocation());
    this._addCompany(answer, x.getCompanyID());
    // convert to an ArrayList
    var a = new Array();
    for (key in answer)
      a.push(key);

    return a;
  },

  _addUser : function(answer, x_id) {
    var gr = new GlideRecord('service_subscribe_sys_user');
    gr.addQuery('sys_user', x_id);
    this._query(gr, answer);
  },

  _addGroup : function(answer, x_id) {
    var groups = GlideUser.getMyGroups(x_id);
    if (groups.isEmpty())
       return;

    var gr = new GlideRecord('service_subscribe_sys_user_grp');
    gr.addQuery('sys_user_group', groups);
    this._query(gr, answer);
  },

  _addDept : function(answer, dept_id) {
    var gr = new GlideRecord('service_subscribe_department');
    gr.addQuery('cmn_department', dept_id);
    this._query(gr, answer);
  },

  _addLocation : function(answer, location_id) {
    var gr = new GlideRecord('service_subscribe_location');
    gr.addQuery('cmn_location', location_id);
    this._query(gr, answer);
  },

  _addCompany : function(answer, company_id) {
    var gr = new GlideRecord('service_subscribe_company');
    gr.addQuery('core_company', company_id);
    this._query(gr, answer);
  },
  
  _query : function(gr, answer) {
    gr.query();
    while (gr.next()) 
      answer[gr.service_offering + ''] = true;
  }
}