const siteName = "MyWeb";
let topic = "Du lịch Nha Trang";
let imageCount = 3;
let isReady = true;

console.log(siteName, topic, imageCount, isReady);

const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

if (mainTitle && welcomeText) {
    mainTitle.textContent = "Khám Phá Nha Trang Cùng MyWeb";
    welcomeText.textContent =
        "Website đã được nâng cấp với JavaScript.";
}

const helloBtn = document.getElementById("helloBtn");
const helloResult = document.getElementById("helloResult");

if (helloBtn && helloResult) {
    helloBtn.addEventListener("click", function () {
        helloResult.textContent =
            "Xin chào! Cảm ơn bạn đã ghé thăm website.";
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

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword =
            searchInput.value.toLowerCase();

        searchItems.forEach(function (item) {

            const text =
                item.textContent.toLowerCase();

            item.style.display =
                text.includes(keyword) ? "" : "none";
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

            item.style.display =
                filter === "all" ||
                filter === category
                    ? ""
                    : "none";
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

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (fullName.value.trim() === "") {
                formMessage.textContent =
                    "Vui lòng nhập họ tên.";
                return;
            }

            if (
                email.value.trim() === "" ||
                !email.value.includes("@")
            ) {
                formMessage.textContent =
                    "Email không hợp lệ.";
                return;
            }

            formMessage.textContent =
                "Gửi liên hệ thành công!";
        }
    );
}
