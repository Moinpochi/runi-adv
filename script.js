function scrollToAccess() {
  document.getElementById("mvp").scrollIntoView({ behavior: "smooth" });
}

function saveEmail(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  localStorage.setItem("runify_user", email);
  document.getElementById("msg").innerText =
    "🎉 Thanks! You'll be notified at launch.";
}
