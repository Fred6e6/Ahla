const users = {
  admin: { password: "600900", role: "admin" },

  user2: { password: "102", role: "user" },
  user3: { password: "103", role: "user" },
  user4: { password: "104", role: "user" },
  user5: { password: "123", role: "user" },
  user6: { password: "106", role: "user" },
  user7: { password: "107", role: "user" },
  user8: { password: "108", role: "user" },
  user9: { password: "109", role: "user" },
  user10:{ password: "110", role: "user" }
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!users[username] || users[username].password !== password) {
    error.innerText = "اسم المستخدم أو كلمة السر غير صحيحة";
    return;
  }

  localStorage.setItem("user", username);
  localStorage.setItem("role", users[username].role);

  if (users[username].role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "add.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

