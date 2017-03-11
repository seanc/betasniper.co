(function($) {
  $(window).on('hashchange', function() {
    var hash = window.location.hash
    var signature = hash.slice(1)
    if (signature.charAt(0) === 'v') {
      var version = signature.slice(1)
      switchVersion(version)
    }
  })

  function switchVersion(version) {
    if ($('.column.active').attr('data-version') === version) return
    $('.column.active').fadeOut().removeClass('active')
    $('.column[data-version="' + version + '"]').addClass('active').fadeIn()

    $('.menu-list .is-active').removeClass('is-active')
    $('a[href="#v'+ version +'"]').parent().addClass('is-active')
  }

  var hash = window.location.hash
  if (hash) {
    var signature = hash.slice(1)
    if (signature.charAt(0) === 'v') {
      var version = signature.slice(1)
      switchVersion(version)
    }
  }

  $('.anchor-scroll').anchorScroll()
})(jQuery)
