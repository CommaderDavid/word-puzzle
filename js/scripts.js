// Back end

// Front end
$(document).ready(function() {
  $("#form-one").submit(function(e) {
    var quote = $("input#quote").val();
    

    e.preventDefualt();
  });
});
