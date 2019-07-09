templates.nav = `
<nav role="navigation">
<label
  for="mobile-nav-menu-icon"
  class="mobile-nav-icon"
  id="mobile-nav-icon"
  onclick="showOverlay()"
>
  <div class="top-bar"></div>
  <div class="middle-bar"></div>
  <div class="bottom-bar"></div>
</label>
<div class="hide-nav-overlay" id="overlay">
  <button class="hide-overlay-btn" onclick="hideOverlay()">X</button>
  <div class="mobile-nav-menu">
    <ul class="nav-overlay-links">
      <li><a href="#home">Portfolio</a></li>
      <li><a href="#about">About</a></li>
      <li>
        <a href="#SonyaSlegersResume082018.pdf" target="_blank"
          >Resume</a
        >
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  <script>
    const menuIcon = document.getElementById("mobile-nav-icon");
    const overlay = document.getElementById("overlay");
    const body = document.getElementById("body");
    function showOverlay() {
      overlay.className = "show-nav-overlay";
      menuIcon.className = "hide-mobile-nav-icon";
    }
    function hideOverlay() {
      console.log("hide overlay");
      overlay.className = "hide-nav-overlay";
      menuIcon.className = "mobile-nav-icon";
    }
  </script>
</div>
<div class="desktop-nav-menu">
  <a class="nav-link" href="#home">Portfolio</a>
  <a class="nav-link" href="#about">About</a>
  <a
    class="nav-link"
    href="SonyaSlegersResume082018.pdf"
    target="_blank"
    >Resume</a
  >
  <a class="nav-link" href="#contact">Contact Me</a>
</div>
</nav>
`;
