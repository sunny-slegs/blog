//initialise globals
const templates = {};
const controllers = {};
const views = {};

window.onload = function() {
  console.log("Application loaded at " + Date.now());

  //register router
  window.addEventListener("hashchange", function() {
    utils.router();
  });

  utils.router();
};
