onSubmit script error: TypeError: Cannot read property 'mandatory' of undefined:
    function onSubmit() {
        function isTemplateValueNotExistsOrReadOnly() {
            var template = gel('status.std_change_proposal.template_value');
            if (!template)
                return true;
            var className = ' ' + template.className + ' ';
            return (className.replace(/[\n\t\r]/g, " ").indexOf(' read_only ') > -1);
        }

        function parseEncodedQuery(query) {
            if (query) {
                query = query.trim();
                var attributeList = query.split('^');
                var parsedAttributeNames = [];
                var parsedAttributeVals = [];
                for (var i = 0; attributeList && i < attributeList.length; i++) {
                    var firstIndex = attributeList[i].indexOf('=');
                    if (firstIndex > -1) {
                        parsedAttributeNames.push(attributeList[i].substring(0, firstIndex));
                        parsedAttributeVals.push(attributeList[i].substring(firstIndex + 1).trim());
                    }
                }
                return {
                    names: parsedAttributeNames,
                    vals: parsedAttributeVals
                };
            }
            return;
        }

        function containsName(arr, what) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].name == what)
                    return i;
            }
            return -1;
        }

        function checkRestrictedFields(q) {
            var attemptedSet = ' ';
            var unmodifiable = sncStdChg.unmodifiable;
            if (q && unmodifiable) {
                for (var i = 0; i < q.names.length; i++) {
                    var f = q.names[i];
                    var idx = containsName(unmodifiable, f);
                    if (idx !== -1)
                        attemptedSet = attemptedSet + unmodifiable[idx].label + ', ';
                }
            }
            if (attemptedSet !== ' ') {
                alert(getMessage('The following "Change Request values" are not allowed to be set in a template:') +
                    attemptedSet.substring(0, attemptedSet.length - 2));
                return false;
            } else {
                return true;
            }
        }

        function isMandatoryFieldsSet(q) {
            var unfilledValues = ' ';
            var mandatory = sncStdChg.mandatory;
            if (mandatory) {
                for (var i = 0; i < mandatory.length; i++) {
                    var m = mandatory[i];
                    if (q) {
                        var idx = q.names.indexOf(m.name);
                        if (idx === -1 || q.vals[idx] === '')
                            unfilledValues = unfilledValues + m.label + ', ';
                    } else {
                        unfilledValues = unfilledValues + m.label + ', ';
                    }
                }
            }
            if (unfilledValues !== ' ') {
                alert(getMessage('"Change Request values" have not been provided:') +
                    unfilledValues.substring(0, unfilledValues.length - 2));
                return false;
            } else {
                return true;
            }
        }
        var sncStdChg = window.g_sncStdChg;
        if (!isTemplateValueNotExistsOrReadOnly() && g_form.getValue('state') != 1) {
            var q = parseEncodedQuery(g_form.getValue('template_value'));
            return isMandatoryFieldsSet(q) && checkRestrictedFields(q);
        } else {
            return true;
        }
    }
