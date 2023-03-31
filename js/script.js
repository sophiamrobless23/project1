jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});
function validate(){
    var name = document.getElementById('input-name')
    var submission = document.getElementById('submit')
    function alertFunc(){
        alert('Successful submision for '+ name.value)
        output.innerHTML='Thank you for joining' + name.value;
    }
    pressButton.addEventListener('click', alertFunc)
}
window.addEventListener('load', validate)

