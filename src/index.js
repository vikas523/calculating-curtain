// import "./styles.css";
let width,
  height,
  color = "green",
  wrinkles = "x1.5",
  headRail = "curtain-rail 25mm pole",
  shipping = "express";
const colorLookup = {
  SilverWhite: 3,
  Ivory: 9,
  Cream: 2,
  Beige: 5,
  Brown: 6,
  moka: 7,
  "silver-gray": 8,
  "ocean-gray": 9,
  navy: 10,
  pink: 11,
  purple: 12,
  "dark-brown": 13,
  mint: 14,
  blue: 16,
  chocolate: 17,
  green: 18,
  "warm-gray": 19,
  "cool-gray": 20,
  maple: 21,
};

// create width and height where customer choose their curtain according his/her demand
const widthLookup = [
  {
    start: 1,
    end: 10,
    price: 10,
  },
  {
    start: 11,
    end: 20,
    price: 15,
  },
  {
    start: 21,
    end: 30,
    price: 16,
  },
];

const heightLookup = [
  {
    start: 0,
    end: 10,
    price: 12,
  },
  {
    start: 11,
    end: 20,
    price: 15,
  },
  {
    start: 21,
    end: 30,
    price: 17,
  },
];

const wrinklesLookup = {
  none: 1,
  "x1.5": 4,
  x2: 6,
  "hooks tape": 7,
};

const headRailLookup = {
  none: 1,
  "curtain-rail 25mm pole": 10,
  "curtain-rail 35mm pole": 20,
};

const shippingLookup = {
  genral: 2,
  express: 3,
};

document.getElementById("width").addEventListener("keyup", (e) => {
  width = parseInt(e.target.value, 10);
});

document.getElementById("height").addEventListener("keyup", (e) => {
  height = parseInt(e.target.value, 10);
});

document.getElementById("color").addEventListener("change", (e) => {
  color = e.target.value;
});

document.getElementById("wrinkles").addEventListener("change", (e) => {
  wrinkles = e.target.value;
});

document.getElementById("headRail").addEventListener("change", (e) => {
  headRail = e.target.value;
});

document.getElementById("shipping").addEventListener("change", (e) => {
  shipping = e.target.value;
});

function calculatePrice(color, width, height, wrinkles, headRail, shipping) {
  const cPrice = colorLookup[color];
  const wrinkelPrice = wrinklesLookup[wrinkles];
  const headPrice = headRailLookup[headRail];
  const shipPrice = shippingLookup[shipping];

  const wPrice = widthLookup.reduce(
    (acc, w) => {
      if (width >= w.start && width <= w.end) acc = w.price;
      return acc;
    },
    [0]
  );
  const hPrice = heightLookup.reduce(
    (acc, h) => {
      if (height >= h.start && height <= h.end) acc = h.price;
      return acc;
    },
    [0]
  );
  return cPrice * wPrice * hPrice * wrinkelPrice * headPrice * shipPrice;
}

document.getElementById("submitBtn").addEventListener("click", (e) => {
  // console.log("you choose this", width, height, color,wrinkles,headRail,shipping);
  console.log(`you choose this width is ${width} height is ${height} color is  ${color} wrinkle is ${wrinkles} headRail is ${headRail} and shiping  ${shipping}
  `);

  let total = 0;
  total = calculatePrice(color, width, height, wrinkles, headRail, shipping);

  document.getElementById("total").value = total;
});
