jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});
function init(){
    var name = document.getElementById('input-name')
    var pressButton = document.getElementById('submit')
    function alertFunc(){
        alert('Thanks, ' + name.value)
    }
pressButton.addEventListener('click', alertFunc);
}
window.addEventListener('load', init)