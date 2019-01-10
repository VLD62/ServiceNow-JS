function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
		return;
    }
    if(newValue == - 1) {
		g_form.clearValue('assigned_to');
    }
      //Type appropriate comment here, and begin script below
 }
 
