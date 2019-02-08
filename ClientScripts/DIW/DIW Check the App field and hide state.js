function onLoad() {
    var state = g_form.getValue('state');
    var changeR = g_form.getReference('change_request', checkState);


    function checkState(changeR) {
        //SCMI-1499
        /*if ((state == 1 || state == 15 || state == 8) && (changeR.state == 0 || changeR.state == -1 || changeR.state == -2)) { // state - new, scheduled, implement and review // 
        } else if (state == 13 && changeR.state == 0) {

        } else {
            g_form.removeOption('state', '8');
        }*/
        if (state == 3) {
            g_form.removeOption('state', '8');
        }

        var approved = g_form.getValue('u_approved_in_cab');

        if (approved == 'true') {
            g_form.showFieldMsg('state', 'Approved by CAB', 'info');
            if (state == 9 || state == 3) {
                g_form.showFieldMsg('state', 'Post on Slack: Implementation of change <change number> is starting on <details>.', 'info');
            }
        } else if (approved == 'false') {
            if (state == 9 || state == 3) {
                g_form.showFieldMsg('state', 'Post on Slack: Implementation of change <change number> is starting on <details>.', 'info');
            }
        } else {
            g_form.hideFieldMsg('state');
        }

    }
}