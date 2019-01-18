var ServiceSubscriptionRBB = Class.create();

ServiceSubscriptionRBB.prototype = {
  initialize : function() {
  },
  getMySubscriptions : function(caller) {
    var answer = new Object();
    var u = GlideUser.getUserByID(caller);
    this._addUser(answer,caller);
    this._addGroup(answer,caller);
    this._addDept(answer, u.getDepartmentID());
    this._addLocation(answer, u.getLocation());
    this._addCompany(answer, u.getCompanyID());
    // convert to an ArrayList
    var a = new Array();
    for (key in answer)
      a.push(key);

    return a;
  },

  _addUser : function(answer,u_id) {
    var gr = new GlideRecord('service_subscribe_sys_user');
    gr.addQuery('sys_user', u_id);
    this._query(gr, answer);
  },

  _addGroup : function(answer,u_id) {
    var groups = GlideUser.getMyGroups(u_id);
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