$( document ).ready(function() {
    $('#js_footer_tools').remove();
    $('#js_moreInfoArea').removeClass('mr-lg-auto');
    $('#footer .container').addClass('border-top');
    $('#footer .container').addClass('border-background-primary');
});

function detailHandelr() {
    $('#customCollapse').toggleClass('show');
    $('#arrowIcon').toggleClass('show');
}