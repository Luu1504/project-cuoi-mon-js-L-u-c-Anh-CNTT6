let data = JSON.parse(localStorage.getItem("movieData")) || {};

if (!data.movies) {
   data = {
      "movies": [
         {
            "id": 1,
            "title": "Dune",
            "titleVi": "Dune",
            "genres": "Hành động, Viễn tưởng",
            "duration": 166,
            "releaseDate": "01/03/2024",
            "status": 1,
            "posterUrl": "/asset/image/wallpapersden.com_dune-digital-movie-art_5120x2880.jpg",
            "description": `Dune là bản anh hùng ca về Paul Atreides trong cuộc chiến sinh tồn và giành quyền kiểm soát "hương dược" quý hiếm trên hành tinh sa mạc Arrakis khắc nghiệt.`,
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

const showToast = (title, message, type) => {
   let icon = "";
   let toastClass = "";

   if (type === "error") {
      icon = '<i class="fa-solid fa-circle-xmark toast-icon"></i>';
      toastClass = "toast-error";
   } else {
      icon = '<i class="fa-solid fa-circle-check toast-icon"></i>';
      toastClass = "toast-success";
   }

   Toastify({
      text: `<div style="display: flex; align-items: center; gap: 12px;">${icon}<div class="toast-content"><span class="toast-title">${title}</span><span class="toast-message">${message}</span></div></div>`,
      duration: 3000,
      escapeMarkup: false,
      gravity: "top",
      position: "right",
      close: true,
      className: toastClass,
      stopOnFocus: true,
   }).showToast();
};

const deleteModal = document.getElementById("overlayClass");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelBtn = document.getElementById("cancelBtn");
let idToDelete = null;

const openModal = (id) => {
   deleteModal.style.display = "flex";
   idToDelete = id;
};

const closeModal = () => {
   idToDelete = null;
   deleteModal.style.display = "none";
};

cancelBtn.addEventListener("click", () => {
   closeModal();
});

confirmDeleteBtn.addEventListener("click", () => {
   if (idToDelete !== null) {
      let vitri = data.movies.findIndex((s) => {
         if (s.id === idToDelete) {
            return true;
         } else {
            return false;
         }
      });

      data.movies.splice(vitri, 1);
      localStorage.setItem("movieData", JSON.stringify(data));
      executeFilter();
      closeModal();
      showToast("Thành công", "Đã xóa phim!", "success");
   }
});

const renderMovies = (movieArray) => {
   if (!movieArray) { movieArray = data.movies; }

   let htmlArray = movieArray.map((s) => {
      let statusText = "";
      let statusClass = "";

      if (s.status === 1) {
         statusText = "Đang chiếu"; statusClass = "st-green";
      } else if (s.status === 2) {
         statusText = "Sắp chiếu"; statusClass = "st-blue";
      } else {
         statusText = "Đã chiếu"; statusClass = "st-yellow";
      }

      return `<tr>
                 <td><img src="${s.posterUrl}" class="poster" onerror="this.src='https://placehold.co/50x75?text=Loi'"></td>
                 <td><b>${s.title}</b><br><small>${s.titleVi}</small></td>
                 <td><span class="tag">${s.genres}</span></td>
                 <td>${s.duration}</td>
                 <td>${s.releaseDate}</td>
                 <td><span class="st ${statusClass}">${statusText}</span></td>
                 <td class="icon-btns">
                    <i id="edit-icon-${s.id}" class="fa-solid fa-pen btn-edit-icon"></i> 
                    <i id="delete-icon-${s.id}" class="fa-solid fa-circle-xmark btn-delete-icon"></i>
                 </td>
              </tr>`;
   });

   document.getElementById("movieTableBody").innerHTML = htmlArray.join("");
   initTableEvents(movieArray);
};

const initTableEvents = (movieArray) => {
   movieArray.forEach((movie) => {
      let id = movie.id;

      let editBtn = document.getElementById("edit-icon-" + id);
      if (editBtn) {
         editBtn.addEventListener("click", () => { openEditModal(id); });
      }

      let deleteBtn = document.getElementById("delete-icon-" + id);
      if (deleteBtn) {
         deleteBtn.addEventListener("click", () => { openModal(id); });
      }
   });
};

let editMovieModal = document.getElementById("editMovieModal");
let closeEditIcon = document.getElementById("closeEditIcon");
let btnCancelEdit = document.getElementById("btnCancelEdit");
let btnSubmitEdit = document.getElementById("btnSubmitEdit");
let idToEdit = null;

const openEditModal = (id) => {
   idToEdit = id;
   let movie = data.movies.find(m => {
      if (m.id === idToEdit) {
         return true;
      } else {
         return false;
      }
   });

   if (!movie) {
      return;
   }

   document.getElementById("editName").value = movie.title;
   document.getElementById("editGenre").value = movie.genres;
   document.getElementById("editDuration").value = movie.duration;
   document.getElementById("editStatus").value = movie.status;
   document.getElementById("editPrice").value = movie.ticketPrice;
   document.getElementById("editPoster").value = movie.posterUrl;
   document.getElementById("editDesc").value = movie.description;

   let part = movie.releaseDate.split("/");
   document.getElementById("editDate").value = `${part[2]}-${part[1].padStart(2, "0")}-${part[0].padStart(2, "0")}`;

   editMovieModal.style.display = "flex";
}

const closeEditModal = () => {
   idToEdit = null;
   editMovieModal.style.display = "none";
}

btnCancelEdit.addEventListener("click", closeEditModal);
closeEditIcon.addEventListener("click", closeEditModal);

btnSubmitEdit.addEventListener("click", () => {
   if (idToEdit === null) {
      return;
   }
   let dateInput = document.getElementById("editDate").value;
   let selectedDate = new Date(dateInput);
   let today = new Date();
   today.setHours(0, 0, 0, 0);
   if (selectedDate < today) {
      showToast("Lỗi", "Ngày phát hành không thể là ngày trong quá khứ", "error");
      return;
   }

   let editPoster = document.getElementById("editPoster").value.trim();
   let urlRegex = /^(https?:\/\/|\/)[^\s]+$/i;

   if (editPoster !== "" && !urlRegex.test(editPoster)) {
      showToast("Lỗi", "Đường dẫn không hợp lệ", "error");
      return;
   }

   let index = data.movies.findIndex(m => {
      if (m.id === idToEdit) {
         return true;
      } else {
         return false;
      }
   });

   if (index !== -1) {
      let dateSplit = dateInput.split("-");
      let dateParts = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;
      let newName = document.getElementById("editName").value.trim();

      data.movies[index].title = newName;
      data.movies[index].titleVi = newName;
      data.movies[index].genres = document.getElementById("editGenre").value;
      data.movies[index].duration = +(document.getElementById("editDuration").value);
      data.movies[index].releaseDate = dateParts;
      data.movies[index].status = +(document.getElementById("editStatus").value);
      data.movies[index].posterUrl = editPoster !== "" ? editPoster : "https://placehold.co/150x220?text=No+Image";
      data.movies[index].description = document.getElementById("editDesc").value.trim();
      data.movies[index].ticketPrice = +(document.getElementById("editPrice").value);

      localStorage.setItem("movieData", JSON.stringify(data));
      executeFilter();
      closeEditModal();
      showToast("Thành công", "Cập nhật phim thành công", "success");
   }
});

const btnRed = document.getElementById("btnRed");
const addMovieModal = document.getElementById("addMovieModal");
const closeIconAdd = document.getElementById("closeAddIcon");
const btnCancelAdd = document.getElementById("btnCancelAdd");
const btnSubmitAdd = document.getElementById("btnSubmitAdd");

const closeAddModal = () => {
   addMovieModal.style.display = "none";
}

btnRed.addEventListener("click", () => {
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

   if (name === "" || genre === "" || duration === "" || date === "" || status === "" || price === "" || poster === "" || desc === "") {
      showToast("Lỗi", "Vui lòng nhập tất cả các yêu cầu bắt buộc", "error");
      return;
   }

   let urlRegex = /^(https?:\/\/|\/)[^\s]+$/i;
   if (!urlRegex.test(poster)) {
      showToast("Lỗi", "Đường dẫn ảnh không hợp lệ", "error");
      return;
   }

   let selectedDate = new Date(date);
   let today = new Date();
   today.setHours(0, 0, 0, 0);
   if (selectedDate < today) {
      showToast("Lỗi", "Ngày phát hành không thể là ngày trong quá khứ", "error");
      return;
   }

   let dateParts = date.split("-");
   let formatDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
   let newId = data.movies.length > 0 ? data.movies[data.movies.length - 1].id + 1 : 1;
   let finalPoster = poster !== "" ? poster : "https://placehold.co/150x220?text=No+Image";

   let newMovie = {
      id: newId,
      title: name,
      titleVi: name,
      genres: genre,
      duration: +(duration),
      releaseDate: formatDate,
      status: +(status),
      posterUrl: finalPoster,
      description: desc,
      ticketPrice: +(price)
   }

   data.movies.push(newMovie);
   localStorage.setItem("movieData", JSON.stringify(data));

   executeFilter();
   closeAddModal();
   showToast("Thành công", "Thêm phim mới thành công", "success");
});

const searchInput = document.getElementById("searchInput");
const tabAll = document.getElementById("showAllBtn");
const tabShowing = document.getElementById("isShowingBtn");
const tabComing = document.getElementById("comingSoonBtn");
const tabScreened = document.getElementById("screenedBtn");
const tabs = [tabAll, tabShowing, tabComing, tabScreened];

const executeFilter = () => {
   let searchValue = searchInput.toLowerCase();
   let searchModal = data.movies.filter(m => {
      let titleLower = m.title.toLowerCase();
      if (titleLower.includes(searchValue)) {
         return true;
      } else {
         return false;
      }
   });

   let showingModal = searchModal.filter(m => m.status === 1);
   let comingModal = searchModal.filter(m => m.status === 2);
   let screenedModal = searchModal.filter(m => m.status === 0);

   let activeTabs = "all";
   tabs.forEach(tab => {
      if (tab.classList.contains("active")) {
         activeTabs = tab.getAttribute("data-status");
      }
   });

   if (activeTabs === "all") {
      currentFilteredMovies = searchModal;
   } else if (activeTabs === "dang-chieu") {
      currentFilteredMovies = showingModal;
   } else if (activeTabs === "sap-chieu") {
      currentFilteredMovies = comingModal;
   } else if (activeTabs === "da-chieu") {
      currentFilteredMovies = screenedModal;
   }

   currentPage = 1;
   renderPaginatedTable();
}

searchInput.addEventListener("input", executeFilter);
tabs.forEach(tab => {
   tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      executeFilter();
   });
});

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
   logoutBtn.addEventListener("click", () => {
      showToast("Thành công", "Đang đăng xuất...", "success");
      setTimeout(() => { window.location.href = "login.html"; }, 1000);
   });
}

let currentPage = 1;
const itemsPerPage = 5;
let currentFilteredMovies = [];

const infoSpan = document.querySelector(".pagination span");
const pagesContainer = document.querySelector(".pages");

const renderPagination = (filteredArray) => {
   const totalItems = filteredArray.length;
   const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

   if (currentPage > totalPages) currentPage = totalPages;

   if (totalItems === 0) {
      if (infoSpan) infoSpan.innerHTML = "Không tìm thấy phim nào";
      if (pagesContainer) pagesContainer.innerHTML = "";
      return;
   }

   let startItem = (currentPage - 1) * itemsPerPage + 1;
   let endItem = Math.min(currentPage * itemsPerPage, totalItems);
   if (infoSpan) infoSpan.innerHTML = `Hiển thị ${startItem}-${endItem} trên ${totalItems} phim`;

   const prevHTML = `<button data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}><i class="fa-solid fa-chevron-left"></i></button>`;

   const numsHTML = Array.from({ length: totalPages }, (_, i) => i + 1)
      .map(page => `<button class="${page === currentPage ? 'active' : ''}" data-page="${page}">${page}</button>`)
      .join("");

   const nextHTML = `<button data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}><i class="fa-solid fa-chevron-right"></i></button>`;

   if (pagesContainer) pagesContainer.innerHTML = prevHTML + numsHTML + nextHTML;

   document.querySelectorAll(".pages button").forEach(btn => {
      btn.addEventListener("click", () => {
         const newPage = parseInt(btn.getAttribute("data-page"));
         changePage(newPage);
      });
   });
};

const renderPaginatedTable = () => {
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const paginatedMovies = currentFilteredMovies.slice(startIndex, endIndex);

   renderMovies(paginatedMovies);
   renderPagination(currentFilteredMovies);
};

const changePage = (page) => {
   currentPage = page;
   renderPaginatedTable();
};

const setMinDateForInputs = () => {
   const today = new Date();
   today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
   const minDateStr = today.toISOString().split('T')[0];

   const addDateInput = document.getElementById("addDate");
   const editDateInput = document.getElementById("editDate");

   if (addDateInput) addDateInput.setAttribute("min", minDateStr);
   if (editDateInput) editDateInput.setAttribute("min", minDateStr);
};

document.addEventListener("DOMContentLoaded", setMinDateForInputs);
setMinDateForInputs();

currentFilteredMovies = data.movies;
renderPaginatedTable();

const menuItems = document.querySelectorAll('.sidebar .menu .item');
const movieSection = document.getElementById('movieSection');
const ticketSection = document.getElementById('ticketSection');

menuItems[0].addEventListener('click', () => {
   menuItems[0].classList.add('active');
   menuItems[1].classList.remove('active');
   movieSection.style.display = 'block';
   ticketSection.style.display = 'none';
});

menuItems[1].addEventListener('click', () => {
   menuItems[1].classList.add('active');
   menuItems[0].classList.remove('active');
   movieSection.style.display = 'none';
   ticketSection.style.display = 'block';
   renderTicketsTable();
});

const renderTicketsTable = () => {
   const tbody = document.getElementById('ticketTableBody');

   let html = data.tickets.map(t => {
      let statusClass = "st-green";
      if (t.statusDisplay === "Chờ xử lý") statusClass = "st-orange";
      if (t.statusDisplay === "Đã hủy") statusClass = "st-red";

      let seatsHTML = t.seats.map(s => `<span class="seat-tag">${s}</span>`).join('');
      let dateParts = t.showDate.split("-");
      let formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;

      return `
        <tr>
            <td class="text-red">${t.ticketCode}</td>
            <td><b>${t.customerName}</b><br><small>${t.customerPhone}</small></td>
            <td>${t.movieTitle}</td>
            <td>${t.showTime}<br><small>${formattedDate}</small></td>
            <td>${seatsHTML}</td>
            <td><b>${t.totalAmount.toLocaleString('vi-VN')}đ</b></td>
            <td><span class="st ${statusClass}">${t.statusDisplay}</span></td>
            <td class="icon-btns">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-circle-xmark"></i>
            </td>
        </tr>`;
   }).join('');

   tbody.innerHTML = html;
};

const addTicketModalElement = document.getElementById('addTicketModal');

document.getElementById('btnAddTicket').addEventListener('click', () => {
   addTicketModalElement.style.display = 'flex';
});

const closeTicketModal = () => {
   addTicketModalElement.style.display = 'none';
};

document.getElementById('closeTicketModal').addEventListener('click', closeTicketModal);
document.getElementById('cancelTicketBtn').addEventListener('click', closeTicketModal);