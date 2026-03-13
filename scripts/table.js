function generateTable(products) {
  let table = document.getElementById("product-table-body");
  table.childNodes = null;
  products.forEach((element) => {
    let row = document.createElement("tr");

    let nameData = document.createElement("td");
    let nameAnchor = document.createElement("a");
    nameAnchor.textContent = element.name;
    nameAnchor.setAttribute("href", element.link);
    nameAnchor.setAttribute("target", "_blank");
    nameData.append(nameAnchor);

    let yearData = document.createElement("td");
    yearData.textContent = element.year;

    let priceData = document.createElement("td");
    priceData.textContent = element.price;

    let typeData = document.createElement("td");
    typeData.textContent = element.type;

    row.append(nameData);
    row.append(yearData);
    row.append(priceData);
    row.append(typeData);

    table.append(row);
  });
}

function createItem(name, year, price, type, link) {
  return {
    name: name,
    year: year,
    price: price,
    type: type,
    link: link,
  };
}
const products = [
  createItem(
    "Thinkpad x9",
    2025,
    "$2000",
    "Laptop",
    "https://www.lenovo.com/us/en/c/laptops/thinkpad/thinkpadx9/",
  ),
  createItem(
    "Dell Pro",
    2025,
    "$1000",
    "Laptop",
    "https://www.dell.com/en-us/shop/dell-laptops/scr/laptops/appref=dell-pro-product-line",
  ),
  createItem(
    "Macbook Air",
    2025,
    "$1500",
    "Laptop",
    "https://www.apple.com/macbook-air/",
  ),

  createItem(
    "Thinkcentre",
    2025,
    "$1000",
    "Desktop",
    "https://www.lenovo.com/us/en/c/desktops/thinkcentre/",
  ),
  createItem(
    "Dell Optiplex",
    2025,
    "$1000",
    "Desktop",
    "https://www.dell.com/en-us/shop/desktops-all-in-one-pcs/sf/optiplex-desktops",
  ),
  createItem(
    "Mac Mini",
    2025,
    "$1400",
    "Desktop",
    "https://www.apple.com/mac-mini/",
  ),
];
generateTable(products);
