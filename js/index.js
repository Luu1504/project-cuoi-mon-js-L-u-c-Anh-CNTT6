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
            "posterUrl": "/asset/image/DunePoster.png",
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
            "posterUrl": "/asset/image/KungFuPandaPoster.png",
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
            "posterUrl": "/asset/image/GodzillaPoster.png",
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
            "posterUrl": "/asset/image/MaiPoster.png",
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
            "posterUrl": "/asset/image/ExhumaPoster.png",
            "description": "Một nhóm chuyên gia phong thủy khai quật mộ cổ và đối mặt với lời nguyền đáng sợ.",
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
   localStorage.setItem("movieData", JSON.stringify(data));
}


let movieData = document.getElementById("movieList");


function renderAllMovieList() {
   let filterMovieList = data.movies.filter(s => {
      return s.status === 1;
   });
   let showAll = filterMovieList.map(s => {
      return `
      <div id="movieCard" class="movie-card">
               <div class="poster-wrapper">
                  <img src="${s.posterUrl}" alt="${s.title}">
               </div>
               <div class="movie-info">
                  <h3>${s.title}</h3>
                  <p>${s.duration} phút • ${s.genres}</p>
                  <button id="buyBtn" class="btn-buy">Mua Vé</button>
               </div>
            </div>
      `
   }).join("");
   movieData.innerHTML = showAll;
}
renderAllMovieList();


