$(document).ready(function() {

  // Toggle menu and navbar
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  // Close menu when clicking on links
  $('.navbar ul li a').click(function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  // Smooth scrolling for links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // Highlight active menu item on scroll
  $(window).on('scroll load', function() {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function() {
      var sectionTop = $(this).offset().top - 200;
      var sectionHeight = $(this).height();
      var sectionId = $(this).attr('id');

      if (scrollDistance >= sectionTop && scrollDistance < sectionTop + sectionHeight) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${sectionId}"]`).addClass('active');
      }
    });

    // Show/hide scroll-to-top button
    if (scrollDistance > 0) {
      $('.scroll-top').fadeIn();
    } else {
      $('.scroll-top').fadeOut();
    }
  });

  // Form submission handling
  $('form').submit(function(event) {
    event.preventDefault();

    var fullName = $('#fullName').val();
    var email = $('#email').val();
    var phoneNumber = $('#phoneNumber').val();
    var address = $('#address').val();
    var message = $('#message').val();

    if (fullName && email && phoneNumber && address && message) {
      alert('Form submitted successfully!');
      $('form')[0].reset();
    } else {
      alert('Please fill in all fields.');
    }
  });

  // Smooth scroll to top button
  $('.scroll-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
  });

});
