const slider = document.getElementById("range");
const checkbox = document.querySelector('input[type="checkbox"]');

const pricing = [
  { views: "10K", price: 9 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

let isYearly = false;

// updates slider
slider.addEventListener("input", () => {
  setSliderValue(slider, pricing);
});

// toggle between monthly and annually pricing
checkbox.addEventListener("change", (e) => {
  e.target.checked ? (isYearly = true) : (isYearly = false);
  setSliderValue(slider, pricing);
});

function setSliderValue(item, arr) {
  const viewOutput = document.getElementById("pageviews-count");
  const priceOutput = document.getElementById("price");
  const planType = document.getElementById("plan-type");
  item.max = arr.length - 1; // sets sliders max value
  // returns two new arrays
  const getViews = arr.map((x) => x.views);
  const getPrice = arr.map((x) => x.price);
  const value = item.value;
  const [currentViews, currentPrice] = [getViews[value], getPrice[value]];
  viewOutput.innerHTML = `${currentViews} pageviews`;
  priceOutput.innerHTML = "$" + currentPrice.toFixed(2);
  planType.textContent = "month";
  changePrice(currentPrice, planType, priceOutput);
  setSliderColor(item);
}

function changePrice(price, plan, output) {
  if (isYearly === true) {
    price *= 0.75;
    output.innerHTML = "$" + price.toFixed(2);
    plan.textContent = "year";
  }
}

function setSliderColor(item) {
  let value = item.value * 25;
  slider.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
}
