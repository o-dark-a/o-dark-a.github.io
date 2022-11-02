$(function () {

  if (window.matchMedia("(min-width: 992px)").matches) {
    $('.nav-item.dropdown').on('mouseenter', function() {
      $(this).addClass('show');
      $(this).find('.dropdown-menu').addClass('show');
    })
    $('.nav-item.dropdown').on('mouseleave', function() {
      $(this).removeClass('show');
      $(this).find('.dropdown-menu').removeClass('show');
    })

  }else {
    $('.nav-item.dropdown').on('click', function() {
      $(this).toggleClass('show');
      $(this).find('.dropdown-menu').toggleClass('show');
    })
  }

  $('.form-search input').focus(function(){
    $(this).siblings().addClass('hide')
  });

  $('.form-search input').focusout(function(){
    if (!$(this).val()) {
      $(this).siblings().removeClass('hide')
    }
  });

  $('body').overlayScrollbars({});
  $('#main-recipe-desc-main-text').overlayScrollbars({});

})