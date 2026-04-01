let usersData = JSON.parse(localStorage.getItem("users")) || [];
if (usersData === usersData.users) {
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



let inputName = document.getElementById("name");
let inputEmali = document.getElementById("email");
let inputPassword = document.getElementById("password");
let checkInputPassword = document.getElementById("checkPassword");

let checkBox = document.getElementById("agreeCheck");
let loginForm = document.getElementById("form");

let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let checkErrorPassword = document.getElementById("confirmPassword");


loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   let authenticName = inputName.value.trim();
   let authenticEmail = inputEmali.value.trim();
   let authenticPassword = inputPassword.value.trim();
   let checkConfirmPassword = checkInputPassword.value.trim();

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

   let exactAuthenticName = usersData.some(s => s.fullName.toLowerCase() === authenticName.toLowerCase());
   if (exactAuthenticName) {
      errorName.textContent = "Tên đã có người sử dụng";
      showToast("Thất bại", "Tên đã có người sử dụng", "error");
      return;
   }
   if (authenticName === "") {
      errorName.textContent = "Tên người dụng không được để trống";
      showToast("thất bại", "Tên người dùng không được để trống", "error");
      return;
   }

   let exactAuthenticEmail = usersData.some(s => s.email.toLowerCase() === authenticEmail.toLowerCase());
   if (exactAuthenticEmail) {
      errorEmail.textContent = "Email bị trùng lặp";
      showToast("thất bại", "Email bị trùng lặp", "error");
      return;
   }
   if (authenticEmail === "") {
      errorEmail.textContent = "Email không được để trống";
      showToast("thất bại", "Email không được để trống", "error");
      return;
   }
   if (!emailRegex.test(authenticEmail)) {
      errorEmail.textContent = "Email Lỗi định dạng";
      showToast("thất bại", "Email lỗi định dạng", "error");
      return;
   }

   if (authenticPassword === "") {
      errorPassword.textContent = "Mật khẩu không được để trống";
      showToast("Thất bại", "Mật khẩu không được để trống", "error");
      return;
   }
   if (!passwordRegex.test(authenticPassword)) {
      errorPassword.textContent = "Mật khẩu phải chứ ít nhất một ký tự đặc biệt";
      showToast("Thất bại", "Mật khẩu bị lỗi định dạng", "error");
      return;
   }
   if (authenticPassword.length < 8) {
      errorPassword.textContent = "Mật khẩu phải có tối đa 8 ký tự";
      showToast("Thất bại", "Mật khẩu phải có tối đa 8 ký tự", "error");
      return;
   }

   if (checkConfirmPassword !== authenticPassword) {
      errorPassword.textContent = "Sai mật khẩu";
      showToast("Thất bại", "Sai mật khẩu", "error");
      return;
   }

   let newId = usersData.length > 0 ? usersData[usersData.length - 1].id + 1 : 1;

   let agreeCheckBox = checkBox.checked;
   if (!agreeCheckBox) {
      showToast("thất bại", "Phải đồng ý với điều khoản và dịch vụ", "error");
      return;
   }

   let newUser = {
      id: newId,
      fullName: authenticName,
      email: authenticEmail,
      password: authenticPassword,
      createdAt: new Date().toISOString(),
      role: "user",
      isActive: true
   }

   usersData.push(newUser);
   localStorage.setItem("users", JSON.stringify(usersData));

   showToast("Thành công", "Đăng ký thành công, ... Đang chuyển hướng đến trang đăng nhập!");

   inputName.value = "";
   inputEmali.value = "";
   inputPassword.value = "";
   checkInputPassword.value = "";



   setTimeout(() => {
      window.location.href = "login.html";
   }, 2000);
});