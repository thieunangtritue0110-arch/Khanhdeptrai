// alert("xin chào")
// console.log("xin chào")
// const mebutton = document.querySelector(".button-Me");
// mebutton.addEventListener("click", () => {
//     alert("Xin chào! Tôi là Hà Minh Khánh.");
// });
// const myfamily = document.querySelector(".button-myfamily");
//  myfamily.addEventListener("click", () => {
//     alert("Gia đình tôi gồm bố, mẹ và em gái.");
// });
const mebutton = document.querySelector(".button-Me");
const familybutton = document.querySelector(".button-myfamily");

const name = document.querySelector(".name");
const job = document.querySelector(".job");

// Thông tin cá nhân
mebutton.addEventListener("click", () => {
    name.textContent = "Hà Minh Khánh";
    job.textContent = "Code Developer";
    document.querySelector(".avatar-container img").src = "https://24hstore.vn/upload_images/images/hinh-nen-luffy-gear-5/hinh-nen-luffy-gear-5-dien-thoai/hinh-nen-luffy-gear-5-nika-sieu-ngau.jpg"; // Thay đổi đường dẫn ảnh cá nhân
});

// Thông tin gia đình
familybutton.addEventListener("click", () => {
    name.textContent = "Gia đình tôi";
    job.textContent = "i love my family";
    document.querySelector(".avatar-container img").src = "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/165311/Originals/hinh-nen-Ronaldo(1).jpg"; // Thay đổi đường dẫn ảnh gia đình
});