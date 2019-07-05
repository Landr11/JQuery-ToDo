//Check off Specific Todos by clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todo

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(function() {
      $(this).remove;
    });

  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //Grabbing New ToDo from input
    var todoText = $(this).val();
    //set input empty
    $(this).val("");

    //Create new Todo with the Grabbed Text

    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".toggle-add").click(function() {
  $("input[type='text']").fadeToggle();
});
