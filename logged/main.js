$(document).ready(function() {

    setTimeout(() => {
        $('.loading-animation').fadeOut(1000)
    }, 1000)

    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            $('.home-nav, .mobile-menu').addClass('active')
        } else {
            $('.home-nav, .mobile-menu').removeClass('active')
        }
    })

    $('.mobile-menu, .explore-mobile-menu, .earn-mobile-menu').hide()
    $('.menu-btn').click(function() {
        $('.mobile-menu, .explore-mobile-menu, .earn-mobile-menu').slideToggle(200)
    })

    // $('.popup, .popup-invite, .popup-startups').hide()
    $(document).on('click', '.profile-btn, .talk', function(e) {
        e.preventDefault()
        $('.login-popup').fadeIn()
        $('.auth-content').not('.auth-1').hide()
        $('.auth-1').show()
    })

    $('.popup-overlay').click(function() {
        $(this).parent().fadeOut()
    })

    $('.login-close img').click(function() {
        $('.login-popup').fadeOut()
    })

    $('.welcome-btn').click(function(e) {
        e.preventDefault()
        $('.popup-invite').fadeIn()
    })
    
    // $('.startups-link').click(function(e) {
    //     e.preventDefault()
    //     $('.popup-startups').fadeIn()
    // })
    
    $('.community-link').click(function(e) {
        e.preventDefault()
        $('.popup-community').fadeIn()
    })


    $('.filter').click(function() {
        $('.filter').not(this).find('ul').slideUp()
        $(this).find('ul').slideToggle(200)
    })

    
    $('.auth-content').not('.auth-1').hide()

    $('.auth-btn').click(function() {
        var next = $(this).attr('data-next')
        $('.auth-content').not(this).hide()
        $(next).fadeIn()
    })

    $('.signin-btn').click(function() {
        $('.login-popup').fadeOut()
    })


    $('.jobs-tabs span').click(function() {
        var tab = $(this).attr('data-tab')

        $('.user-jobs').not(tab).fadeOut()
        $(tab).fadeIn()

        $('.jobs-tabs span').removeClass('active')
        $(this).addClass('active')
    })


    $(document).on('click', '.user-dropdown-title', function() {
        $(this).next().slideToggle(200)
    })

    $(document).on('click', '.user-dropdown li', function() {
        var option = `${$(this).text()} <img src="assets/icons/down.png" alt="">`
        $(this).parents('.user-job-right').find('h4').html(option)
        $(this).parent().slideUp(200)
    })

    $(document).on('click', '.status-link', function() {
        var status = $(this).text()
        $('.popupStatus').text(status)
        $('.status-popup').fadeIn()
    })
    
    $(document).on('click', '.apply-link', function() {
        var company = $(this).parents('.jobs-item').find('.newsCompany').text()
        $('.popupCompany').text(company)
        $('.apply-popup').fadeIn()
    })

    $('.apply-choice').click(function() {
        $('.apply-choice').not(this).find('.apply-checkbox').removeClass('active')
        $(this).find('.apply-checkbox').addClass('active')
    })

    $('.types-list li').click(function() {
        var value = $(this).attr('data-value')
        $(this).addClass('hidden').fadeOut()

        $('.types-right').append(`<p>${value}<img src="assets/icons/close.png" alt=""/></p>`)
    })

    $('.types-right').on('click', 'p img', function() {
        var value = $(this).parent().text()
        $(`.types-list li[data-value="${value}"]`).removeClass('hidden').fadeIn()
        $(this).parent().remove()
    })

    $('.link-btn').click(function() {
        var value = $(this).parents('.link-container').find('.link-text span').text()
        $(this).parents('.link-container').find('.link-form input').val(value)
        $(this).parents('.link-container').find('.link-text').hide(300, function() {
            $(this).parents('.link-container').find('.link-form').show(300)
        })
    })

    $(document).on('submit', '.link-form', function(e) {
        e.preventDefault()
        var value = $(this).find('input').val()

        $(this).parents('.link-container').find('.link-text span').text(value)
        $(this).hide(300, function() {
            $(this).parents('.link-container').find('.link-text').show(300)
        })
    })


    $('.edit-img-btn').click(function() {
        $('#hiddenInput').click()
    })


    setInterval(() => {
        $('.saved-msg').toggleClass('active')
    }, 1000);

    $('.mailto-btn').click(function() {
        $('.pp').fadeIn()
    })

})