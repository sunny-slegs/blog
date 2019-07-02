//why is this whole function inside parens with a pair of parens at the end?

const utils = (function() {
  const extract_params = function(params_string) {
    console.log("extracting params", params_string);
    // don't forget to return params
  };

  return {
    router: function(route, data) {
      route = route || location.hash.slice(1) || "home";
      let function_to_invoke = route;
      console.log("route is", function_to_invoke);
      if (function_to_invoke) {
        views[function_to_invoke](data, params);
      }
    },

    render: function(element_id, content, convert_JSON) {
      return <p>This is the {content}. </p>;
    },

    request: function(
      api_stub,
      success_callback,
      error_callbackcallback_params
    ) {
      console.log("request");
    }
  };
})();
