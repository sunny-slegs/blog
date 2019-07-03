views.home = function(data, params) {
  $(document).ready(function() {
    const view = {
      name: "Sonya"
    };
    $("#page-content").load("/assets/js/templates/home.html #home", function() {
      const template = document.getElementById("home").innerHTML;
      const output = Mustache.render(template, view);
      $("#page-content").html(output);
    });
  });
};
