/**
* Includes basic JS functions
*/

// Set button of selected category to active
$('.btn-label').click(function() {
    $('.btn-label').removeClass('active');
    $(this).addClass('active');
});
