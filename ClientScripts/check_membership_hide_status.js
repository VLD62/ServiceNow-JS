//Check if user is member of specific group and hides states;
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    var group = g_form.getDisplayBox('assignment_group').value;
    //Script include IsMemberClient
    var ga = new GlideAjax('IsMemberClient');
    ga.addParam('sysparm_name', 'member');  
    ga.addParam('sysparm_group', group);
    ga.getXML(printResult);  
    function printResult(response) {
        var answer = response.responseXML.documentElement.getAttribute("answer");
        //console.log("********** VARIABLE TRACE" + answer + " VARIABLE TRACE**********");
        if(answer == 'false') {
            g_form.removeOption('state', '2');
        } else {
            g_form.addOption('state', '2', 'In Progress', 2);
        }
    }  
}