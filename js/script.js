jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});
function init(){
    var pressButton = document.getElementById('submit')
    function alertFunc(){
        alert('THANK YOU')
    }
pressButton.addEventListener('click', alertFunc);
}
window.addEventListener('load', init)