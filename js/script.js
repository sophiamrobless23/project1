jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});
function init(){
    var input = document.getElementById('input-name')
    var pressButton = document.getElementById('submit')

    function alertFunc(){
        alert('Thank you for joining, ' + input.value)
    }
pressButton.addEventListener('click', alertFunc);
}
window.addEventListener('load', init)
