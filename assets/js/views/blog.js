views.blog = function(data, params) {
  $(document).ready(function() {
    const view = {
      name: "Sonya"
    };
    $("#page-content").load("/assets/js/templates/blog.html #blog", function() {
      const template = document.getElementById("blog").innerHTML;
      const output = Mustache.render(template, view);
      $("#page-content").html(output);
    });
  });
};
