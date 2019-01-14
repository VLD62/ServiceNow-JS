function onLoad() {   
    if (g_user.hasRole('admin')) {   
		if (g_form.getValue('short_description') != '') {
			g_form.setDisplay('u_short_description_decrypt',true);   
            g_form.setDisplay('u_description_decrypt',true);  
		    g_form.setDisplay('description',false);   
            g_form.setDisplay('short_description',false);   
		}

 
    }   else {
			 g_form.setDisplay('u_short_description_decrypt',false);   
			 g_form.setDisplay('u_description_decrypt',false); 
			 g_form.setDisplay('description',true);   
             g_form.setDisplay('short_description',true); 
	}
}