
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // ادمین‌های ساده
    const admins = [
        { user: "admin1", pass: "1234" },
        { user: "admin2", pass: "abcd" }
    ];

    const valid = admins.find(a => a.user === username && a.pass === password);

    if (valid) {
        message.style.color = "lime";
        message.innerText = "ورود موفقیت‌آمیز بود!";
    } else {
        message.style.color = "red";
        message.innerText = "نام کاربری یا رمز اشتباه است.";
    }
}
