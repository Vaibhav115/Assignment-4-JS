var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "brand": "United Colors of Benetton",
    "price": 2599
  }
  
  var currentProduct = productData

  var card = document.createElement("div");
  card.classList.add("left-column");

  var img = document.createElement("img");
  img.src = currentProduct.preview
  img.id = "productImg"

  var card1 = document.createElement("div");
  card1.classList.add("right-column");

  var card2 = document.createElement("div");
  card2.classList.add("product-description");

  var h1 = document.createElement("h1")
  h1.innerText = currentProduct.name;
  h1.id = ("name");

  var h4 = document.createElement("h4");
  h4.innerText = currentProduct.brand;
  h4.id = "brand"

  var h3 = document.createElement("h3");
  h3.innerText = "Price: Rs ";

  var span = document.createElement("span")
  span.innerText = currentProduct.price;
  span.id = ("price");

  var Card = document.createElement("div");
  Card.classList.add("description");

  var heading = document.createElement("h3");
  heading.classList.add("description");
  heading.innerText = "Description"

  var p = document.createElement("p");
  p.innerText = currentProduct.description;
  p.id = "description";

 var preview = document.createElement("div");
 preview.classList.add("product-preview");

 var head = document.createElement("h3");
 head.innerText = "Product Preview";

  var Card1 = document.createElement("div");
  Card1.classList.add("previewImg");

  
  var Img = document.createElement("img");
  Img.id = "img0";
  Img.addEventListener("click",function(){
    Img.classList.add("active")
  })
  Img.classList.add("active")
  Img.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"

  var Img1 = document.createElement("img")
  Img1.id = "img1";
  Img1.addEventListener("click",function(){
    Img1.classList.add("active")
  })
  Img1.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"
  

  var Img2 = document.createElement("img")
  Img2.id = "img2"
  Img2.addEventListener("click",function(){
    Img2.classList.add("active")
  })
  Img2.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"
 

  var Img3 = document.createElement("img");
  Img3.id = "img3"
  Img3.addEventListener("click",function(){
    Img3.classList.add("active")
  })
  Img3.src =  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"
  

  var Img4 = document.createElement("img");
  Img4.id = "img4"
  Img4.addEventListener("click",function(){
    Img4.classList.add("active")
  })
  Img4.src = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"

  var Img5 = document.createElement("img");
  Img5.id = "img5"
  Img5.addEventListener("click",function(){
    Img5.classList.add("active")
  })
  Img5.src = "Undefined"


  var btn = document.createElement("div");
  btn.classList.add("btn");

  var btn1 = document.createElement("button");
  btn1.innerText = "Add to cart"
  btn1.id = "add-to-cart"

  card.appendChild(img)
card1.appendChild(card2)
card2.appendChild(h1)
card2.appendChild(h4)
card2.appendChild(h3)
h3.appendChild(span)
card2.appendChild(Card)
Card.appendChild(heading)
Card.appendChild(p)
card2.appendChild(preview)
preview.appendChild(head)
preview.appendChild(Card1)
Card1.append(Img, Img1, Img2, Img3, Img4, Img5)
card1.appendChild(btn)
btn.appendChild(btn1)

product.appendChild(card)
product.appendChild(card1)