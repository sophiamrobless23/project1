jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});
function init(){
    var input = document.getElementById('entryinput')
    var pressButton = document.getElementById('submit')
    var output = document.getElementById('textoutput')

    function alertFunc(){
        alert('Thank you for joining, ' + input.value)
    }
pressButton.addEventListener('click', alertFunc);
}
window.addEventListener('load', init)
