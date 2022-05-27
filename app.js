var slider = document.getElementById("range");
var output = document.getElementById("pageviews-count");
var price = document.getElementById("price");
var planType = document.getElementById("plan-type");
var checkbox = document.querySelector('input[type="checkbox"]');

var pageViews = ["10K", "50K", "100K", "500K", "1M"];
var perMonth = [9, 12, 16, 24, 36];

var isYearly = false;

// slider changes price and view counts
slider.addEventListener("input", () => {
  changePrice();
  var views = pageViews[slider.value];
  output.innerHTML = `${views} pageviews`;
});

// checks if toggle switch is on year or month
checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  changePrice();
});

// changes price
function changePrice() {
  if (isYearly == true) {
    var discountedPricing = perMonth[slider.value] * 0.75;
    price.innerHTML = `$${discountedPricing}`;
    planType.textContent = "year";
  } else {
    var pricing = perMonth[slider.value];
    price.innerHTML = `$${pricing}.00`;
    planType.textContent = "month";
  }
}
