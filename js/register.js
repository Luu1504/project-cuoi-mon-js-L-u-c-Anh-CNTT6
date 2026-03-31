const data = {
   "users": [
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
   ]
};

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
   let authenticId = data.users.length > 0 ? data.users[data.users.length - 1].id + 1 : 1;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

   errorName.innerHTML = "";
   errorEmail.innerHTML = "";
   errorPassword.innerHTML = "";
   errorConfirm.innerHTML = "";

   let nameExists = data.users.some(s => s.fullName.toLowerCase() === authenticName.toLowerCase());
   if (authenticName === "") {
      errorName.innerHTML = "Tên người dùng không được để trống";
      return;
   }
   if (nameExists) {
      errorName.innerHTML = "Tên bị trùng lặp";
      return;
   }

   let emailExists = data.users.some(s => s.email.toLowerCase() === authenticEmail.toLowerCase());
   if (authenticEmail === "") {
      errorEmail.innerHTML = "Email không được để trống";
      return;
   }
   if (!emailRegex.test(authenticEmail)) {
      errorEmail.innerHTML = "Email không đúng định dạng";
      return;
   }
   if (emailExists) {
      errorEmail.innerHTML = "Email bị trùng lặp";
      return;
   }

   if (authenticPassword === "") {
      errorPassword.innerHTML = "Mật khẩu không được để trống";
      return;
   }
   if (authenticPassword.length < 8) {
      errorPassword.innerHTML = "Mật khẩu phải có tối thiểu 8 ký tự";
      return;
   }
   if (!specialCharRegex.test(authenticPassword)) {
      errorPassword.innerHTML = "Mật khẩu phải chứa ít nhất một ký tự đặc biệt";
      return;
   }

   if (checkAuthenticPassword !== authenticPassword) {
      errorConfirm.innerHTML = "Xác nhận mật khẩu lỗi";
      return;
   }

   let newUsers = {
      id: authenticId,
      fullName: authenticName,
      email: authenticEmail,
      password: authenticPassword,
      role: "user",
      createdAt: new Date().toISOString(),
      isActive: true
   };

   data.users.push(newUsers);

   Swal.fire({
      icon: "success",
      title: "Đăng ký thành công!",
      showConfirmButton: false,
      timer: 1500
   }).then(() => {
      loginForm.reset();
      window.location.href = "login.html";
   });
});