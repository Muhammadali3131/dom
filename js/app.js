const sidebarEl = document.querySelector(".navbar-lists");

function toggleSidebar() {
  if (sidebarEl.classList.contains("active")) {
    sidebarEl.classList.remove("active")
  } else {
    sidebarEl.classList.add("active");
  }
}
