$(document).ready(function(){
    $("#edit").click(function(){
      $('#overlayform').show();
    });
    $(".cancel").click(function(){
      $('#overlayform').hide();
      $('#overlayiform').hide();
      $('#overlayuform').hide();
    });
    $("#insert").click(function(){
      $('#overlayiform').show();
    });
    $("#update").click(function(){
      $('.select').show();
      $('#overlayuform').show();
    });
    $("#delete").click(function(){
      $('.select').show();
    });
});
