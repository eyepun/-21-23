// แสดงข้อความต้อนรับ
alert("ยินดีต้อนรับเข้าสู่เว็บไซต์! 💗");

// ฟังก์ชันเปลี่ยนสีพื้นหลัง
function changeColor() {
    const colors = [
        "#ffc0cb",
        "#d8b4fe",
        "#a7c7e7",
        "#c1f0c1",
        "#ffe4b5"
    ];

    const randomColor = colors[
        Math.floor(Math.random() * colors.length)
    ];

    document.body.style.backgroundColor = randomColor;
}

// ฟังก์ชันแสดงข้อความ
function showMessage() {
    alert("ขอบคุณที่เข้าชมเว็บไซต์นะครับ ❤️");
}

// แสดงวันที่และเวลา
function showDateTime() {
    const now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleString("th-TH");
}

// อัปเดตเวลาทุก 1 วินาที
setInterval(showDateTime, 1000);
