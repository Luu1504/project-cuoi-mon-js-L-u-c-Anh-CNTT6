const usersData = JSON.parse(localStorage.getItem("users")) || [
   {
      "id": 1,
      "fullName": "Admin Chính",
      "email": "LQTuan@rikkei.edu.vn",
      "password": "Admin123456",
      "role": "admin",
      "createdAt": "2026-03-03T12:26:21.617Z",
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
let loginForm = document.getElementById("form")

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");

loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

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

   let newEmail = emailInput.value.trim();
   let newEmailExits = usersData.some(newEmail.toLowerCase() !== data.users.toLowerCase());
   if (newEmailExits) {
      errorEmail.innerHTML = "Email không đúng";
      return;
   }
   if (newEmail === "") {
      errorEmail.innerHTML = "Email không được để trống";
      return;
   }
   if (!specialCharRegex.test(authenticPassword)) {
      errorEmail.innerHTML - "Email lỗi định dạng";
      return;
   }

   let newPassword = passwordInput.value;
   let newPasswordExits = usersData.some(s => s.password !== newPassword);
   if (newPasswordExits) {
      errorPassword.innerHTML = "Mật khẩu sai";
      return
   }
   if (!specialCharRegex(newPassword)) {
      errorPassword = "Mật khẩu phải chứa ít nhất một ký tự đặc biệt";
      return;
   }
   if (newPassword === "") {
      errorPassword = "Mật khẩu không được để trống";
      return;
   }
   if () {

   }


})


