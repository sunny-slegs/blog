//why is this whole function inside parens with a pair of parens at the end?

const utils = (function() {
  const extract_params = function(params_string) {
    console.log("extracting params", params_string);
    // don't forget to return params
  };

  return {
    router: function(route, data) {
      console.log("router");
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
