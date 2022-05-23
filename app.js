var slider = document.getElementById("range");
var output = document.getElementById("pageviews-count");
var price = document.getElementById("price");
var planType = document.getElementById("plan-type");
var switchButton = document.getElementById("toggle");
var switchInput = document.querySelector("#toggle input");

let pricing = parseInt(price.textContent);

slider.oninput = function (e) {
  if (this.value <= 20) {
    output.innerHTML = "10K pageviews";
    pricing = 8;
  } else if ((this.value > 20) & (slider.value <= 40)) {
    output.innerHTML = "50K pageviews";
    pricing = 12;
  } else if ((this.value > 40) & (slider.value <= 60)) {
    output.innerHTML = "100K pageviews";
    pricing = 16;
  } else if ((this.value > 60) & (slider.value <= 80)) {
    output.innerHTML = "500K pageviews";
    pricing = 24;
  } else if ((this.value > 80) & (slider.value <= 100)) {
    output.innerHTML = "1M pageviews";
    pricing = 36;
  }
  // doesn't update immediately
  if (switchButton.checked) {
    var discountedPrice = pricing - (pricing / 100) * 25;
    price.textContent = `$${discountedPrice}.00`;
    planType.textContent = "year";
  } else {
    price.textContent = `$${pricing}.00`;
  }
};
