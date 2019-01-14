//Check if specific user is member of a group
var IsMemberClient = Class.create();
IsMemberClient.prototype = Object.extendsObject(AbstractAjaxProcessor, {
   member:function() {
       var group = this.getParameter('sysparm_group');
       gs.info("GROUP " + group);
       var result = gs.getUser().isMemberOf(group);
       return result;
   }
 });