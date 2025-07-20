document.getElementById("logoutBtn").addEventListener("click", function () {
  // پاک‌کردن داده‌ها (در صورت استفاده از localStorage)
  localStorage.clear();

  // هشدار به کاربر (اختیاری)
  alert("You have been logged out. The tab will now close.");

  // تلاش برای بستن تب
  window.open('', '_self', '');
  window.close();
});
