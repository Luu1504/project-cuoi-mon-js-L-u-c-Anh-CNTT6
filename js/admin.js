let data = JSON.parse(localStorage.getItem("movieData")) || {};

if (!data.movies) {
   data = {
      "movies": [
         {
            "id": 1,
            "title": "Dune: Part Two",
            "titleVi": "Dune: Hành Tinh Cát - Phần 2",
            "genres": "Hành động, Viễn tưởng",
            "duration": 166,
            "releaseDate": "01/03/2024",
            "status": 1,
            "posterUrl": "/asset/image/Dune_2_VN_poster.jpg",
            "description": "Tiếp nối phần trước, Paul Atreides hợp nhất với Fremen để trả thù gia tộc Harkonnen và đối mặt với số phận của vũ trụ.",
            "ticketPrice": 95000
         },
         {
            "id": 2,
            "title": "Kung Fu Panda 4",
            "titleVi": "Kung Fu Panda 4",
            "genres": "Hoạt hình, Hài",
            "duration": 94,
            "releaseDate": "08/03/2024",
            "status": 1,
            "posterUrl": "/asset/image/image.jpg",
            "description": "Po tiếp tục hành trình trở thành Chiến binh Rồng, đối mặt với kẻ thù mới và tìm người kế nhiệm.",
            "ticketPrice": 80000
         },
         {
            "id": 3,
            "title": "Godzilla x Kong: The New Empire",
            "titleVi": "Godzilla x Kong: Đế Chế Mới",
            "genres": "Hành động, Viễn tưởng",
            "duration": 115,
            "releaseDate": "29/03/2024",
            "status": 2,
            "posterUrl": "/asset/image/gozxkong.jpg",
            "description": "Godzilla và Kong hợp sức chống lại mối đe dọa mới từ lòng đất.",
            "ticketPrice": 80000
         },
         {
            "id": 4,
            "title": "Mai",
            "titleVi": "Mai",
            "genres": "Tâm lý, Tình cảm",
            "duration": 131,
            "releaseDate": "10/02/2024",
            "status": 0,
            "posterUrl": "/asset/image/MaiPoster.jpg",
            "description": "Câu chuyện về một người phụ nữ mạnh mẽ đối mặt với những biến cố trong cuộc sống.",
            "ticketPrice": 80000
         },
         {
            "id": 5,
            "title": "Exhuma",
            "titleVi": "Exhuma: Quật Mộ Trùng Ma",
            "genres": "Kinh dị, Bí ẩn",
            "duration": 134,
            "releaseDate": "15/03/2024",
            "status": 1,
            "posterUrl": "/asset/image/Exhuma-1A.jpg",
            "description": "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
            "ticketPrice": 80000
         },
         {
            "id": 6,
            "title": "Thỏ ơi",
            "titleVi": "Thỏ ơi",
            "genres": "lãng mạn, giật gân",
            "duration": 127,
            "releaseDate": "17/02/2024",
            "status": 1,
            "posterUrl": "/asset/image/to_poster_official_tiectet_3x4_fa.jpg",
            "description": "Phim khai thác góc khuất hôn nhân thông qua câu chuyện của influencer Hải Linh (LyLy) và vị khách Thỏ (Pháo), hé lộ những bí mật đen tối",
            "ticketPrice": 80000
         },
         {
            "id": 7,
            "title": "GOAT",
            "titleVi": `Tuyển thủ Dê: "Mùi" vị chiến thắng`,
            "genres": "Thể thao,Hài",
            "duration": 180,
            "releaseDate": "13/02/2026",
            "status": 2,
            "posterUrl": "/asset/image/MV5BYzE5OTJkOGMtYWFiNi00NTlkLWE3ZWItY2ZlNjkyOWVhMjMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            "description": "kể về Will, một chú dê nhỏ nuôi mộng trở thành cầu thủ Roarball vĩ đại",
            "ticketPrice": 80000
         }
      ],
      "tickets": [
         {
            "id": 1001,
            "ticketCode": "VE-1001",
            "customerName": "Nguyễn Văn A",
            "customerPhone": "0987654321",
            "movieId": 1,
            "movieTitle": "Dune: Hành Tinh Cát - Phần 2",
            "showDate": "2026-03-15",
            "showTime": "10:00",
            "seats": ["F12", "F13"],
            "seatCount": 2,
            "pricePerSeat": 90000,
            "totalAmount": 180000,
            "paymentMethod": 0,
            "paymentStatus": true,
            "createdAt": "2026-03-10T14:30:00Z",
            "note": "Khách yêu cầu ghế gần lối đi",
            "statusDisplay": "Đã Thanh Toán"
         },
         {
            "id": 1002,
            "ticketCode": "VE-1002",
            "customerName": "Trần Thị B",
            "customerPhone": "0912654321",
            "movieId": 4,
            "movieTitle": "Mai",
            "showDate": "2026-03-16",
            "showTime": "13:30",
            "seats": ["G5"],
            "seatCount": 1,
            "pricePerSeat": 90000,
            "totalAmount": 90000,
            "paymentMethod": 1,
            "paymentStatus": false,
            "createdAt": "2026-03-11T09:15:00Z",
            "note": "",
            "statusDisplay": "Chờ xử lý"
         },
         {
            "id": 1003,
            "ticketCode": "VE-1003",
            "customerName": "Lê Văn C",
            "customerPhone": "0905654321",
            "movieId": 2,
            "movieTitle": "Kung Fu Panda 4",
            "showDate": "2026-03-17",
            "showTime": "19:00",
            "seats": ["H10", "H11", "H12"],
            "seatCount": 3,
            "pricePerSeat": 90000,
            "totalAmount": 270000,
            "paymentMethod": 2,
            "paymentStatus": true,
            "createdAt": "2026-03-12T16:45:00Z",
            "note": "Combo bắp nước tặng kèm",
            "statusDisplay": "Đã Thanh Toán"
         },
         {
            "id": 1004,
            "ticketCode": "VE-1004",
            "customerName": "Phạm Minh D",
            "customerPhone": "0853654321",
            "movieId": 5,
            "movieTitle": "Exhuma: Quật Mộ Trùng Ma",
            "showDate": "2026-03-14",
            "showTime": "21:45",
            "seats": ["E8"],
            "seatCount": 1,
            "pricePerSeat": 90000,
            "totalAmount": 90000,
            "paymentMethod": 0,
            "paymentStatus": false,
            "createdAt": "2026-03-13T11:20:00Z",
            "note": "Khách hủy do bận đột xuất",
            "statusDisplay": "Đã hủy"
         },
         {
            "id": 1005,
            "ticketCode": "VE-1005",
            "customerName": "Hoàng Yến E",
            "customerPhone": "0977654321",
            "movieId": 3,
            "movieTitle": "Godzilla x Kong: Đế Chế Mới",
            "showDate": "2026-03-18",
            "showTime": "09:15",
            "seats": ["D4", "D5"],
            "seatCount": 2,
            "pricePerSeat": 90000,
            "totalAmount": 180000,
            "paymentMethod": 0,
            "paymentStatus": false,
            "createdAt": "2026-03-02T08:50:00Z",
            "note": "Chờ xác nhận thanh toán chuyển khoản",
            "statusDisplay": "Chờ xử lý"
         }
      ]
   }
}

localStorage.setItem("movieData", JSON.stringify(data));

// ==========================================
// 2. HÀM THÔNG BÁO (TOASTIFY)
// ==========================================
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

// ==========================================
// 3. RENDER BẢNG & GẮN SỰ KIỆN NÚT (SỬA/XÓA)
// ==========================================
const movieTbody = document.getElementById("movieTableBody");

function renderMovies(movieArray = data.movies) {
   let html = movieArray.map(s => {
      let statusText = s.status === 1 ? "Đang chiếu" : s.status === 2 ? "Sắp chiếu" : "Đã chiếu";
      let statusClass = s.status === 1 ? "st-green" : s.status === 2 ? "st-blue" : "st-yellow";

      // KHÔNG dùng onclick ở đây nữa, dùng class và data-id để addEventListener sau
      return `<tr>
                  <td><img src="${s.posterUrl}" class="poster" onerror="this.src='https://placehold.co/50x75?text=Loi'"></td>
                  <td><b>${s.title}</b><br><small>${s.titleVi}</small></td>
                  <td><span class="tag">${s.genres}</span></td>
                  <td>${s.duration}</td>
                  <td>${s.releaseDate}</td>
                  <td><span class="st ${statusClass}">${statusText}</span></td>
                  <td class="icon-btns">
                     <i data-id="${s.id}" class="fa-solid fa-pen btn-edit-icon"></i> 
                     <i data-id="${s.id}" class="fa-solid fa-circle-xmark btn-delete-icon"></i>
                  </td>
               </tr>`;
   }).join("");

   movieTbody.innerHTML = html;
   initTableEvents(); // Gắn sự kiện ngay sau khi vẽ bảng
}

// Gắn sự kiện cho các icon vừa được tạo ra bằng innerHTML
function initTableEvents() {
   // Nút Sửa
   document.querySelectorAll(".btn-edit-icon").forEach(icon => {
      icon.addEventListener("click", () => {
         let id = Number(icon.getAttribute("data-id"));
         openEditModal(id);
      });
   });

   // Nút Xóa
   document.querySelectorAll(".btn-delete-icon").forEach(icon => {
      icon.addEventListener("click", () => {
         idToDelete = Number(icon.getAttribute("data-id"));
         document.getElementById("overlayClass").style.display = "flex";
      });
   });
}

// ==========================================
// 4. TÌM KIẾM & LỌC THEO TAB
// ==========================================
const searchInput = document.getElementById("searchInput");
const tabButtons = document.querySelectorAll(".t-btn");

function executeFilter() {
   const searchValue = searchInput.value.toLowerCase();
   const activeTab = document.querySelector(".t-btn.active").getAttribute("data-status");

   const filtered = data.movies.filter(m => {
      const matchSearch = m.title.toLowerCase().includes(searchValue) || m.titleVi.toLowerCase().includes(searchValue);
      let matchTab = true;
      if (activeTab === "dang-chieu") matchTab = (m.status === 1);
      else if (activeTab === "sap-chieu") matchTab = (m.status === 2);
      else if (activeTab === "da-chieu") matchTab = (m.status === 0);

      return matchSearch && matchTab;
   });

   renderMovies(filtered);
}

searchInput.addEventListener("input", executeFilter);

tabButtons.forEach(btn => {
   btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      executeFilter();
   });
});

// ==========================================
// 5. THÊM PHIM MỚI
// ==========================================
const btnRed = document.getElementById("btnRed");
const addMovieModal = document.getElementById("addMovieModal");
const closeIconAdd = addMovieModal.querySelector(".close-icon");
const btnCancelAdd = addMovieModal.querySelector(".btn-cancel");
const btnSubmitAdd = addMovieModal.querySelector(".btn-submit");

const closeAddModal = () => { addMovieModal.style.display = "none"; };

btnRed.addEventListener("click", () => {
   // Xóa trắng form
   document.getElementById("addName").value = "";
   document.getElementById("addGenre").value = "";
   document.getElementById("addDuration").value = "";
   document.getElementById("addDate").value = "";
   document.getElementById("addStatus").value = "1";
   document.getElementById("addPrice").value = "";
   document.getElementById("addPoster").value = "";
   document.getElementById("addDesc").value = "";
   addMovieModal.style.display = "flex";
});

closeIconAdd.addEventListener("click", closeAddModal);
btnCancelAdd.addEventListener("click", closeAddModal);

btnSubmitAdd.addEventListener("click", () => {
   let name = document.getElementById("addName").value.trim();
   let genre = document.getElementById("addGenre").value;
   let duration = document.getElementById("addDuration").value.trim();
   let date = document.getElementById("addDate").value;
   let status = document.getElementById("addStatus").value;
   let price = document.getElementById("addPrice").value.trim();
   let poster = document.getElementById("addPoster").value.trim();
   let desc = document.getElementById("addDesc").value.trim();

   if (name === "" || genre === "" || duration === "" || date === "" || price === "") {
      showToast("Lỗi", "Vui lòng nhập đầy đủ các trường bắt buộc (*)", "error");
      return;
   }

   let dateParts = date.split("-");
   let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
   let newId = data.movies.length > 0 ? Math.max(...data.movies.map(m => m.id)) + 1 : 1;

   let newMovie = {
      id: newId,
      title: name,
      titleVi: name,
      genres: genre,
      duration: Number(duration),
      releaseDate: formattedDate,
      status: Number(status),
      posterUrl: poster !== "" ? poster : "https://placehold.co/150x220?text=No+Image",
      description: desc,
      ticketPrice: Number(price)
   };

   data.movies.push(newMovie);
   localStorage.setItem("movieData", JSON.stringify(data));

   executeFilter();
   closeAddModal();
   showToast("Thành công", "Đã thêm phim mới!", "success");
});

// ==========================================
// 6. SỬA PHIM
// ==========================================
let idToEdit = null;
const editMovieModal = document.getElementById("editMovieModal");
const closeIconEdit = editMovieModal.querySelector(".close-icon");
const btnCancelEdit = editMovieModal.querySelector(".btn-cancel");
const btnSubmitEdit = editMovieModal.querySelector(".btn-submit");

const closeEditModal = () => {
   editMovieModal.style.display = "none";
   idToEdit = null;
};

closeIconEdit.addEventListener("click", closeEditModal);
btnCancelEdit.addEventListener("click", closeEditModal);

function openEditModal(id) {
   const movie = data.movies.find(m => m.id === id);
   if (!movie) return;

   idToEdit = id;

   document.getElementById("editName").value = movie.title;
   document.getElementById("editGenre").value = movie.genres;
   document.getElementById("editDuration").value = movie.duration;
   document.getElementById("editStatus").value = movie.status;
   document.getElementById("editPrice").value = movie.ticketPrice;
   document.getElementById("editPoster").value = movie.posterUrl;
   document.getElementById("editDesc").value = movie.description;

   let parts = movie.releaseDate.split("/");
   document.getElementById("editDate").value = `${parts[2]}-${parts[1]}-${parts[0]}`;

   editMovieModal.style.display = "flex";
}

btnSubmitEdit.addEventListener("click", () => {
   if (idToEdit === null) return;
   const index = data.movies.findIndex(m => m.id === idToEdit);

   if (index !== -1) {
      let dateInput = document.getElementById("editDate").value;
      let dateParts = dateInput.split("-");
      let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
      let newName = document.getElementById("editName").value.trim();

      data.movies[index].title = newName;
      data.movies[index].titleVi = newName;
      data.movies[index].genres = document.getElementById("editGenre").value;
      data.movies[index].duration = Number(document.getElementById("editDuration").value);
      data.movies[index].releaseDate = formattedDate;
      data.movies[index].status = Number(document.getElementById("editStatus").value);
      data.movies[index].posterUrl = document.getElementById("editPoster").value.trim();
      data.movies[index].description = document.getElementById("editDesc").value.trim();
      data.movies[index].ticketPrice = Number(document.getElementById("editPrice").value);

      localStorage.setItem("movieData", JSON.stringify(data));
      executeFilter();
      closeEditModal();
      showToast("Thành công", "Đã cập nhật thông tin phim", "success");
   }
});

// ==========================================
// 7. XÓA PHIM
// ==========================================
let idToDelete = null;
const deleteModal = document.getElementById("overlayClass");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelBtn = document.getElementById("cancelBtn");

const closeDeleteModal = () => {
   deleteModal.style.display = "none";
   idToDelete = null;
};

cancelBtn.addEventListener("click", closeDeleteModal);

confirmDeleteBtn.addEventListener("click", () => {
   if (idToDelete !== null) {
      const index = data.movies.findIndex(m => m.id === idToDelete);
      if (index !== -1) {
         data.movies.splice(index, 1);
         localStorage.setItem("movieData", JSON.stringify(data));
         executeFilter();
         showToast("Thành công", "Đã xóa phim khỏi hệ thống", "success");
      }
   }
   closeDeleteModal();
});

// ==========================================
// 8. ĐĂNG XUẤT
// ==========================================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
   logoutBtn.addEventListener("click", () => {
      showToast("Thành công", "Đang đăng xuất...");
      setTimeout(() => {
         window.location.href = "login.html";
      }, 1000);
   });
}

// ==========================================
// 9. CHẠY LẦN ĐẦU KHI TẢI TRANG
// ==========================================
renderMovies();