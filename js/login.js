let usersData = JSON.parse(localStorage.getItem("users")) || [];
if (usersData.users) {
   usersData = usersData.users;
}

if (usersData.length === 0) {
   usersData = [
      {
         "id": 1,
         "fullName": "Admin Chính",
         "email": "LQTuan@rikkei.edu.vn",
         "password": "Admin123456",
         "role": "admin",
         "isActive": true
      },
      {
         "id": 2,
         "fullName": "Nguyễn Văn A",
         "email": "nguyenvana@example.com",
         "password": "Matkhau123",
         "role": "user",
         "createdAt": "2026-03-01T12:26:21.617Z",
         "isActive": true
      },
      {
         "id": 3,
         "fullName": "Trần Thị B",
         "email": "tranthib@example.com",
         "password": "12345678",
         "role": "user",
         "createdAt": "2026-03-03T12:26:21.617Z",
         "isActive": false
      }
   ];
   localStorage.setItem("users", JSON.stringify(usersData));
}

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");

let checkBox = document.getElementById("rememberMe");

let loginForm = document.getElementById("form");


window.onload = () => {
   const saveEmail = localStorage.getItem("rememberEmail");
   const savePassword = localStorage.getItem("rememberPassword");
   if (saveEmail && savePassword) {
      emailInput.value = saveEmail;
      passwordInput.value = passwordInput;
      checkBox.checked = true;
   }
}


function showToast(title, message, type = "success") {
   let icon = type === "success"
      ? '<i class="fa-solid fa-circle-check toast-icon"></i>'
      : '<i class="fa-solid fa-circle-xmark toast-icon"></i>';

   Toastify({
      text: `
            <div style="display: flex; align-items: center; gap: 12px;">
                ${icon}
                <div class="toast-content">
                    <span class="toast-title">${title}</span>
                    <span class="toast-message">${message}</span>
                </div>
            </div>
        `,
      duration: 3000,
      escapeMarkup: false,
      gravity: "top",
      position: "right",
      close: true,
      className: type === "success" ? "toast-success" : "toast-error",
      stopOnFocus: true,
   }).showToast();
}


loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   let authenticEmail = emailInput.value.trim();
   let authenticPassword = passwordInput.value.trim();

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   let findUser = usersData.find(s => s.email.toLowerCase() === authenticEmail.toLowerCase());
   if (authenticEmail === "") {
      errorEmail.textContent = "Email không được để trống";
      showToast("Thất bại", "Email không được để trống", "error");
      return;
   }
   if (!findUser) {
      errorEmail.textContent = "Email không tồn tại";
      showToast("Thất bại", "Email không tồn tại", "error");
      return;
   }
   if (!emailRegex.test(authenticEmail)) {
      errorEmail.textContent = "Email không đúng định dạng";
      showToast("Thất bại", "Email bị lỗi định dạng", "error");
      return;
   }

   if (findUser.password !== authenticPassword) {
      errorPassword.textContent = "Mật khẩu không tồn tại";
      showToast("Thất bại", "Mật khẩu không tồn tại", "error");
      return;
   }

   if (checkBox.checked) {
      localStorage.getItem("rememberEmail");
      localStorage.getItem("rememberPassword");
   } else {
      localStorage.removeItem("rememberEamil");
      localStorage.removeItem("rememberPassword");
   }

   showToast("Thành công", "Đăng nhập thành công, ... đang chuyển hướng đến rikkeiedu");
   setTimeout(() => {
      if (findUser.role === "admin") {
         window.location.href = "admin.html";
      } else {
         window.location.href = "index.html";
      }
   }, 2000);

});