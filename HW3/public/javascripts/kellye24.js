eventHandler = function (event) {
    if ($("textarea").val().indexOf("vegan") > -1) {
      alert("Note: These cheesecakes contain dairy!");
    } else {
      $("p:last").replaceWith("<p>Thank you! Your order has been placed.</p>");
      $("table").hide();
      $("textarea").hide();
      $("#form").hide();
      $(this).hide();
    }
};

$(function () {
  $("button").click(eventHandler);
});