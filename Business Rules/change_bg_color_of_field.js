function onLoad() {
    //Change the description label to 'My New Label' with bold red text
    changeFieldLabel('category', 'Category', 'red', 'bold', 'yellow');
}
function changeFieldLabel(field, label, color, weight, bgColor) {
    try {
        var labelElement = $('label.' + g_form.getControl(field).id);
        labelElement.select('label').each(function (elmt) {
            elmt.innerHTML = label + ':';
        });
        if (color) {
            //Label Color
            labelElement.style.color = color;
            //Label Background color
            labelElement.style.background = bgColor;
        }
        if (weight)
            labelElement.style.fontWeight = weight;
    } catch (e) { }


}