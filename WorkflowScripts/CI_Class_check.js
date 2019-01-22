answer = ifScript();
function ifScript(){

if(current.cmdb_ci.sys_class_name == 'cmdb_ci_server')

   return 'yes' ;
else
return 'no';
}