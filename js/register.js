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

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let checkPasswordInput = document.getElementById("checkPassword");

let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let errorConfirm = document.getElementById("confirmPassword");
let loginForm = document.getElementById("form");

loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   let authenticName = nameInput.value.trim();
   let authenticEmail = emailInput.value.trim();
   let authenticPassword = passwordInput.value.trim();
   let checkAuthenticPassword = checkPasswordInput.value.trim();

   let authenticId = usersData.length > 0 ? usersData[usersData.length - 1].id + 1 : 1;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

   errorName.innerHTML = "";
   errorEmail.innerHTML = "";
   errorPassword.innerHTML = "";
   errorConfirm.innerHTML = "";

   let nameExists = usersData.some(s => s.fullName.toLowerCase() === authenticName.toLowerCase());
   if (authenticName === "") {
      errorName.innerHTML = "Tên người dùng không được để trống";
      showToast("Thất bại", "Tên người dùng không được để trống!", "error");
      return;
   }
   if (nameExists) {
      errorName.innerHTML = "Tên bị trùng lặp";
      showToast("Thất bại", "Tên này đã tồn tại trên hệ thống!", "error");
      return;
   }

   let emailExists = usersData.some(s => s.email.toLowerCase() === authenticEmail.toLowerCase());
   if (authenticEmail === "") {
      errorEmail.innerHTML = "Email không được để trống";
      showToast("Thất bại", "Email không được để trống!", "error");
      return;
   }
   if (!emailRegex.test(authenticEmail)) {
      errorEmail.innerHTML = "Email không đúng định dạng";
      showToast("Thất bại", "Định dạng Email không hợp lệ!", "error");
      return;
   }
   if (emailExists) {
      errorEmail.innerHTML = "Email bị trùng lặp";
      showToast("Thất bại", "Email này đã được sử dụng!", "error");
      return;
   }

   if (authenticPassword === "") {
      errorPassword.innerHTML = "Mật khẩu không được để trống";
      showToast("Thất bại", "Mật khẩu không được để trống!", "error");
      return;
   }
   if (authenticPassword.length < 8) {
      errorPassword.innerHTML = "Mật khẩu phải có tối thiểu 8 ký tự";
      showToast("Thất bại", "Mật khẩu quá ngắn (tối thiểu 8 ký tự)!", "error");
      return;
   }
   if (!specialCharRegex.test(authenticPassword)) {
      errorPassword.innerHTML = "Mật khẩu phải chứa ít nhất một ký tự đặc biệt";
      showToast("Thất bại", "Thiếu ký tự đặc biệt trong mật khẩu!", "error");
      return;
   }

   if (checkAuthenticPassword !== authenticPassword) {
      errorConfirm.innerHTML = "Xác nhận mật khẩu lỗi";
      showToast("Thất bại", "Mật khẩu xác nhận không khớp!", "error");
      return;
   }

   let newUser = {
      id: authenticId,
      fullName: authenticName,
      email: authenticEmail,
      password: authenticPassword,
      role: "user",
      createdAt: new Date().toISOString(),
      isActive: true
   };

   usersData.push(newUser);
   localStorage.setItem("users", JSON.stringify(usersData));

   showToast("Thành công", "Đăng ký tài khoản Cinema thành công!");

   setTimeout(() => {
      window.location.href = "login.html";
   }, 2000);   
});