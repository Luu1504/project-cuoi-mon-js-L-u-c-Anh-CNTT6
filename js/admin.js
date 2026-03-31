document.addEventListener('DOMContentLoaded', () => {
   // 1. Xử lý Đăng xuất
   const logoutBtn = document.getElementById('logoutBtn');
   if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
         if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
            // Chuyển hướng sang trang login.html
            window.location.href = 'login.html';
         }
      });
   }

   // 2. Xử lý Tìm kiếm phim
   const searchInput = document.getElementById('searchInput');
   searchInput.addEventListener('input', (e) => {
      const value = e.target.value.toLowerCase();
      const rows = document.querySelectorAll('#movieTableBody tr');

      rows.forEach(row => {
         const title = row.querySelector('b').innerText.toLowerCase();
         row.style.display = title.includes(value) ? '' : 'none';
      });
   });

   // 3. Xử lý Lọc theo Tab (Trạng thái)
   const tabs = document.querySelectorAll('.t-btn');
   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         // Đổi màu tab active
         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');

         const status = tab.getAttribute('data-status');
         const rows = document.querySelectorAll('#movieTableBody tr');

         rows.forEach(row => {
            if (status === 'all' || row.getAttribute('data-status') === status) {
               row.style.display = '';
            } else {
               row.style.display = 'none';
            }
         });
      });
   });
});