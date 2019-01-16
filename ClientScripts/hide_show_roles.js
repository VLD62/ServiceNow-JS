function onLoad() {   
    if ((g_user.hasRole('admin') && g_form.getValue('u_short_description_decrypt') != '')
       || (g_user.userID  == g_form.getValue('caller_id') && g_form.getValue('u_short_description_decrypt') != '')
       || (g_user.hasRole('security group') && g_form.getValue('u_short_description_decrypt') != '')
       || (g_user.hasRole('incident_manager') && g_form.getValue('u_short_description_decrypt') != '')) {   
			g_form.setDisplay('u_short_description_decrypt',true);   
            g_form.setDisplay('u_description_decrypt',true);  
		    g_form.setDisplay('description',false);   
            g_form.setDisplay('short_description',false);   

    }   else {
			 g_form.setDisplay('u_short_description_decrypt',false);   
			 g_form.setDisplay('u_description_decrypt',false); 
			 g_form.setDisplay('description',true);   
             g_form.setDisplay('short_description',true); 
	}
}