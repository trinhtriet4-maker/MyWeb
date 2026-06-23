const siteName = "MyWeb";
let topic = "Du lịch Nha Trang";
let imageCount = 3;
let isReady = true;

console.log("Website:", siteName);
console.log("Chủ đề:", topic);
console.log("Số ảnh:", imageCount);
console.log("Đã sẵn sàng dùng JS?", isReady);
console.log("Kiểu dữ liệu topic:", typeof topic);

const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
    mainTitle.textContent = "Khám Phá Nha Trang Cùng MyWeb";
    welcomeText.textContent =
        "Website đã được nâng cấp với JavaScript để tăng tính tương tác.";
}

const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
    helloBtn.addEventListener("click", function () {
        helloResult.textContent =
            "Xin chào! Cảm ơn bạn đã ghé thăm website Du Lịch Nha Trang.";
    });
}

const toggleAboutBtn = document.getElementById("toggleAboutBtn");
const aboutContent = document.getElementById("aboutContent");

if (toggleAboutBtn && aboutContent) {
    toggleAboutBtn.addEventListener("click", function () {
        aboutContent.classList.toggle("hidden");
    });
}

const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", function () {
        mainMenu.classList.toggle("active");

        if (mainMenu.classList.contains("active")) {
            menuToggle.textContent = "✖ Đóng Menu";
        } else {
            menuToggle.textContent = "☰ Menu";
        }
    });
}

const themeSelect = document.getElementById("themeSelect");

if (themeSelect) {
    themeSelect.addEventListener("change", function () {
        document.body.classList.remove(
            "dark-mode",
            "warm-mode"
        );

        if (themeSelect.value !== "") {
            document.body.classList.add(themeSelect.value);
        }
    });
}

const searchInput = document.getElementById("searchInput");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput && searchItems.length > 0) {
    searchInput.addEventListener("keyup", function () {

        const keyword =
            searchInput.value.toLowerCase().trim();

        searchItems.forEach(function (item) {

            const text =
                item.textContent.toLowerCase();

            if (text.includes(keyword)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });
    });
}

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;

        galleryItems.forEach(function (item) {

            const category =
                item.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

});

const contactForm =
    document.getElementById("contactForm");

const fullName =
    document.getElementById("fullName");

const email =
    document.getElementById("email");

const formMessage =
    document.getElementById("formMessage");

if (
    contactForm &&
    fullName &&
    email &&
    formMessage
) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const nameValue =
                fullName.value.trim();

            const emailValue =
                email.value.trim();

            if (nameValue === "") {

                formMessage.textContent =
                    "Vui lòng nhập họ tên.";

                formMessage.style.color =
                    "red";

                return;
            }

            if (
                emailValue === "" ||
                !emailValue.includes("@")
            ) {

                formMessage.textContent =
                    "Vui lòng nhập email hợp lệ.";

                formMessage.style.color =
                    "red";

                return;
            }

            formMessage.textContent =
                "Thông tin hợp lệ. Cảm ơn bạn đã liên hệ!";

            formMessage.style.color =
                "green";

            contactForm.reset();

        }
    );

}
