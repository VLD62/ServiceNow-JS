function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
     var  ga = new GlideAjax('setAssignmentGroup');
     ga.addParam('sysparm_name','populateAssignmentGroup');
     ga.addParam('sysparm_cmdb_ci',g_form.getValue('cmdb_ci'));
     ga.getXML(getResponse);
     
     function getResponse(response){
         var answer = response.responseXML.documentElement.getAttribute("answer");
         //console.log("********** VARIABLE TRACE" + answer + " VARIABLE TRACE**********");
         g_form.setValue('assignment_group',answer);
     }
    
 }