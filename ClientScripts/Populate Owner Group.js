function onChange(control, oldValue, newValue, isLoading) {
	if (g_form.getValue('assignment_group') == ''){
		incident.u_owner_group = g_form.getValue('assignment_group').value;
	}
		
}

