const checkbox = document.querySelector('input[type="checkbox"]');

const pricing = [
  { views: "10K", price: 9 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

const slider = document.getElementById("range");
slider.max = pricing.length - 1; // set sliders max value

// return two new arrays
const [views, price] = pricing.reduce(
  ([a, b], { views, price }) => {
    a.push(views);
    b.push(price);
    return [a, b];
  },
  [[], []]
);

let isYearly = false;

// update slider
slider.addEventListener("input", () => {
  setSliderValue();
});

// toggle between monthly and annually pricing
checkbox.addEventListener("change", (e) => {
  e.target.checked ? (isYearly = true) : (isYearly = false);
  setSliderValue();
});

function setSliderValue() {
  const viewOutput = document.getElementById("pageviews-count");
  const priceOutput = document.getElementById("price");
  const planType = document.getElementById("plan-type");
  const value = slider.value;
  const [currentViews, currentPrice] = [views[value], price[value]];
  viewOutput.innerHTML = `${currentViews} pageviews`;
  priceOutput.innerHTML = "$" + currentPrice.toFixed(2);
  planType.textContent = "month";
  changePrice(currentPrice, planType, priceOutput);
  setSliderColor();
}

function changePrice(price, plan, output) {
  if (isYearly === true) {
    price *= 0.75;
    output.innerHTML = "$" + price.toFixed(2);
    plan.textContent = "year";
  }
}

function setSliderColor() {
  let value = slider.value * 25;
  slider.style.background = `linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%)`;
}
