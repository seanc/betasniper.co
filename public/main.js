(function($) {
  // $('.download-form').on('submit', function (e) {
  //   e.preventDefault()
  //
  //   var $form = $(e.target)
  //   var $button = $form.find('button[type=submit]')
  //   var data = $form.serialize()
  //
  //   $button.addClass('is-loading')
  //
  //   $.ajax({
  //     url: '/download',
  //     type: 'POST',
  //     data: data
  //   }).always(function() {
  //     $button.removeClass('is-loading')
  //   }).done(function(data) {
  //     console.log(data, 'success')
  //   }).fail(function(data) {
  //     console.log(data, 'fail')
  //   })
  // })

  $(window).on('hashchange', function() {
    var hash = window.location.hash.slice(1)
    var version = hash.slice(1)
    switchVersion(version)
  })

  function switchVersion(version) {
    if ($('.column.active').attr('data-version') === version) return
    $('.column.active').fadeOut().removeClass('active')
    $('.column[data-version="' + version + '"]').addClass('active').fadeIn()

    $('.menu-list .is-active').removeClass('is-active')
    $('a[href="#v'+ version +'"]').parent().addClass('is-active')
  }

  if (window.location.hash) switchVersion(window.location.hash.slice(1).slice(1))
})(jQuery)
