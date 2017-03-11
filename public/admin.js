$(function() {
  var $table = $('#table');
  $(function() {
    $('#toolbar').find('select').change(function() {
      $table.bootstrapTable('refreshOptions', {
        exportDataType: $(this).val()
      });
    });
  })

  var trBoldBlue = $("table");

  $(trBoldBlue).on("click", "tr", function() {
    $(this).toggleClass("bold-blue");
  });

  $('#changelog').summernote({
    height: 200
  })

  $('.release-delete-button').on('click', function(e) {
    e.preventDefault()

    var $button = $(e.target)
    var href = $button.attr('href')

    bootbox.confirm('Are you sure you want to delete this release?', function(res) {
      if (res) window.location.href = href
    })
  })
})
