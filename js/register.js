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

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let checkPasswordInput = document.getElementById("checkPassword");

let checkBox = document.getElementById("agreeCheck");
let loginForm = document.getElementById("form");
let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let errorConfirm = document.getElementById("confirmPassword");




loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   let authenticName = nameInput.value.trim();
   let authenticEmail = emailInput.value.trim();
   let authenticPassword = passwordInput.value.trim();
   let checkAuthenticPassword = checkPasswordInput.value.trim();

   let checkAuthenticName = usersData.some(s => s.fullName.toLowerCase() === authenticName.toLowerCase());
   if (checkAuthenticName) {
      errorName.textContent = "Tên bị trùng lặp";
      showToast("Thất bại", "Tên người dùng bị trùng lặp", "error");
      return;
   }
   if (authenticName === "") {
      errorName.textContent = "Tên người dùng không được để trống";
      showToast("Thất bại", "Tên người dùng không được để trống", "error");
      return;
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

   let checkAuthenticEmail = usersData.some(s => s.email.toLowerCase() === authenticEmail.toLowerCase());
   if (authenticEmail === "") {
      errorEmail.textContent = "Email không được để trống";
      showToast("Thất bại", "Email người dùng không được phép để trống", "error");
      return;
   }
   if (!emailRegex.test(authenticEmail)) {
      errorEmail.textContent = "Email không đúng định dạng";
      showToast("Thất bại", "Email không đúng định dạng", "error");
      return;
   }
   if (checkAuthenticEmail) {
      errorEmail.textContent = "Email bị trùng lặp";
      showToast("Thất bại", "Email người dùng bị trùng lặp", "error");
      return;
   }

   let checkAuthenticPasswordList = usersData.some(s => s.password === authenticPassword);
   if (authenticPassword === "") {
      errorPassword.textContent = "Mật khẩu không được để trống";
      showToast("Thất bại", "Mật khẩu không được để trống", "error");
      return;
   }
   if (checkAuthenticPasswordList) {
      errorPassword.textContent = "Mật khẩu đã có người sử dụng";
      showToast("Thất bại", "Mật khẩu đã có người sử dụng", "error");
      return;
   }
   if (!passwordRegex.test(authenticPassword)) {
      errorPassword.textContent = "Mật khẩu phải có ít nhất một ký tự đặt biệt";
      showToast("Thất bại", "Mật khẩu lỗi định dạng", "error");
      return;
   }
   if (authenticPassword.length < 8) {
      errorPassword.textContent = "Mật khẩu không được dưới 8 ký tự";
      showToast("Thất bại", "Mật khẩu người dùng dưới 8 ký tự", "error");
      return;
   }

   if (authenticPassword !== checkAuthenticPassword) {
      errorConfirm.textContent = "Mật khẩu xác nhận không đúng";
      showToast("Thất bại", "Mật khẩu người dùng xác nhận không đúng", "error");
      return;
   }

   let newId = usersData.length > 0 ? usersData[usersData.length - 1].id + 1 : 1;

   let isAgreed = checkBox.checked;

   if (!isAgreed) {
      showToast("Thất bại", "Bạn phải đồng ý điều khoản và dịch vụ", "error");
      return;
   }

   let newUser = {
      id: newId,
      fullName: authenticName,
      email: authenticEmail,
      password: authenticPassword,
      role: "user",
      createdAt: new Date().toISOString(),
      isActive: true
   }


   usersData.push(newUser);

   localStorage.setItem("users", JSON.stringify(usersData));
   localStorage.setItem("currentUser", JSON.stringify(newUser));

   showToast("Thành công", "Đăng ký thành công, ... Đang chuyển hướng đến trang đăng nhập!");

   errorName.textContent = "";
   errorEmail.textContent = "";
   errorPassword.textContent = "";
   errorConfirm.textContent = "";

   setTimeout(() => {
      window.location.href = "login.html";
   }, 2000);
});

