$(document).ready(function() {

    $('.menu-btn').click(function() {
        $('.sidebar').toggleClass('active')
    })

    $('.checkbox').click(function() {
        $(this).parents('.choices').find('.checkbox-center').not($(this).find('.checkbox-center')).removeClass('active')
        $(this).find('.checkbox-center').addClass('active')
    })

    $('.popup').hide()
    $('.popup-overlay').click(function() {
        $('.popup').fadeOut()
    })

    $('.add-btn').click(function() {
        $('.add-job-popup').fadeIn()
    })


    $('.form-dropdown').click(function() {
        $('.form-dropdown').not(this).find('ul').slideUp(200)
        $(this).find('ul').slideToggle(200)
    })

    $('.form-dropdown li').click(function() {
        $(this).parents('.form-dropdown').find('h5').text($(this).text())
        $(this).parents('.form-dropdown').find('h5').attr('data-filter', $(this).attr('data-filter'))
    })


    $('.filter').click(function() {
        $('.filter').not(this).find('ul').slideUp()
        $(this).find('ul').slideToggle(200)
    })

    



})