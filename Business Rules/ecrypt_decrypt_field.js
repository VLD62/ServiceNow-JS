(function executeRule(current, previous /*null when async*/) {
    // Add your code here
    var encr = new GlideEncrypter(); 
    //encr.encrypt(current.description);
    var encrShortDesc = encr.encrypt(current.short_description);
    var encrDesc = encr.encrypt(current.description);
    current.short_description = encrShortDesc
    current.description = encrDesc;
    current.update();
    
        gs.addInfoMessage("Decrypted string = " + encr.decrypt(current.description) + encr.decrypt(current.short_description));
})(current, previous);