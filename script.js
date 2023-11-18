function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Computer Science student", "Backend_Developer"];
  let roleIndex = 0;

  function toggleRole() {
    const roleElement = document.getElementById("role");

    // Animation using TweenMax
    gsap.to(roleElement, { opacity: 0, duration: 0.5, onComplete: function () {
      roleElement.textContent = roles[roleIndex];
      roleIndex = (roleIndex + 1) % roles.length;
      gsap.to(roleElement, { opacity: 1, duration: 0.5 });
    }});
  }

  setInterval(toggleRole, 3000);
});
