const rateOption = document.querySelectorAll(".rate_option");
const rateInfo = document.querySelector(".rate_info");
const successMsg = document.querySelector(".complete_msg");
const mainCard = document.querySelector(".main_card");
const primaryBtn = document.querySelector(".primary_btn");

rateOption.forEach((rate_list) => {
  rate_list.addEventListener("click", () => handleRating(rate_list));
});

function handleRating(rate_list) {
  rateOption.forEach((rating) => {
    rating.classList.remove("active");
  });
  rate_list.classList.toggle("active");
  primaryBtn.addEventListener("click", () => showSuccessMsg(rate_list));
}

function showSuccessMsg(data) {
  mainCard.classList.add("hidden");
  successMsg.classList.remove("hidden");
  rateInfo.innerHTML = `You selected ${data.value} out of ${rateOption.length}`;
}
