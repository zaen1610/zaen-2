function tampilkanHalaman(id) {
  document.querySelectorAll("main section").forEach((section) => section.classList.remove("active"));
  const target = document.getElementById(id);
  if(target) target.classList.add("active");
  target?.focus();
}

function kirimForm(e) {
  e.preventDefault();
  const notif = document.getElementById("notif");
  notif.style.display = "block";
  setTimeout(() => { notif.style.display = "none"; }, 3000);
  e.target.reset();
}
