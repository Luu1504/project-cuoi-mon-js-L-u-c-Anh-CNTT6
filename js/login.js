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


window.onload = () => {
   const savedEmail = localStorage.getItem("rememberedEmail");
   const savedPassword = localStorage.getItem("rememberedPassword");

   if (savedEmail && savedPassword) {
      emailInput.value = savedEmail;
      passwordInput.value = savedPassword;
      rememberMe.checked = true;
   }
};

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

let loginForm = document.getElementById("form");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

let checkBox = document.getElementById("rememberMe");

let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");


loginForm.addEventListener("submit", (e) => {
   e.preventDefault();

   let authenticEmail = emailInput.value.trim();
   let authenticPassword = passwordInput.value.trim();


   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   let findUser = usersData.find(s => s.email === authenticEmail);
   if (!findUser) {
      errorEmail.textContent = "Không tìm thấy Email"
      showToast("Thất bại", "Không tìm thấy email này!", "error");
      return;
   }
   if (!emailRegex.test(authenticEmail)) {
      errorEmail.textContent = "Email không đúng định dạng";
      showToast("Thất bại", "Định dạng Email không hợp lệ!", "error");
      return;
   }
   if (authenticEmail === "") {
      errorEmail.textContent = "Email không được để trống";
      showToast("Thất bại", "Email không được để trống!", "error");
      return;
   }
   if (findUser.password !== authenticPassword) {
      errorPassword.textContent = "Sai mật khẩu"
      showToast("Thất bại", "Mật khẩu xác nhận không khớp!", "error");
      return;
   }
   if (authenticPassword === "") {
      errorPassword.textContent = "Mật khẩu không được để trống";
      showToast("Thất bại", "Mật khẩu Không được để trống", "error");
      return;
   }


   if (rememberMe.checked) {
      localStorage.setItem("rememberedEmail", authenticEmail);
      localStorage.setItem("rememberedPassword", authenticPassword);
   } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
   }


   showToast("Thành công", "Đặng nhập thàng công , đang chuyển hướng...");
   localStorage.setItem("currentUser", JSON.stringify(findUser));


   errorEmail.textContent = "";
   errorPassword.textContent = "";

   
   setTimeout(() => {
      if (findUser.role === "admin") {
         window.location = "admin.html"
      } else if (findUser.role === "user") {
         window.location = "index.html"
      }
   }, 2000);

});

