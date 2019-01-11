function onLoad() {   
    if (g_user.hasRole('admin')) {   
            g_form.setDisplay('u_short_description_decrypt',true);   
            g_form.setDisplay('u_description_decrypt',true);   
 
    }   else {
		 g_form.setDisplay('u_short_description_decrypt',false);   
         g_form.setDisplay('u_description_decrypt',false);   
	}
}