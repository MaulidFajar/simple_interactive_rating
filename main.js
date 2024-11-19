const rateOption = document.querySelectorAll(".rate_option");
const rateInfo = document.querySelector(".rate_info");
const successMsg = document.querySelector(".complete_msg");
const mainCard = document.querySelector(".main_card");
const primaryBtn = document.querySelector(".primary_btn");

rateOption.forEach((rateList) => {
  rateList.addEventListener("click", () => handleRating(rateList));
});

function handleRating(selectedRate) {
  rateOption.forEach((rating) => {
    rating.classList.remove("active");
  });
  selectedRate.classList.toggle("active");
}

primaryBtn.addEventListener("click", () => {
  const selectedRate = document.querySelector(".rate_option.active");

  if (selectedRate) {
    showSuccessMsg(selectedRate);
  } else {
    alert("Please select a rating before submitting");
  }
});

function showSuccessMsg(data) {
  mainCard.classList.add("hidden");
  successMsg.classList.remove("hidden");
  rateInfo.innerHTML = `You selected ${data.value} out of ${rateOption.length}`;
}
