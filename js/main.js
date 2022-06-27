let display = document.getElementById("product-display");
let input = document.querySelector(".form-control");
const apilink = "https://fakestoreapi.com/products";

let productData = function(){
     
    let resp = fetch(apilink)
    .then( res => res.json() )
    .then( finalval => { 

      input.addEventListener('keyup', () => {

        keyword = input.value.toLowerCase();
        let filtered_prods = finalval.filter(function(product){
          product = product.title.toString().toLowerCase();
          return product.indexOf(keyword) > -1;
        });
        
        products(filtered_prods);
        
    })

    products(finalval);
      
    

  });

}

let noDataFound  = () => {

  display.innerHTML = `
    <div class=col-lg-12 mt-3">
      <div class="alert alert-warning text-center">
        <p>Sorry No product found</p>
      </div>
    </div>
  `;
}

let products = (filtered_prods) => {

  let output = "";  

  if (filtered_prods.length > 0) {
    output += `
      <div class="col-lg-12 mx-auto">
        <div class="text-center text-success"> <b>${filtered_prods.length}</b> Product(s) Found</div>
      </div>
    ` 
    filtered_prods.forEach(prod => {
        output += `
        <div class="col-md-3">
        <div class="card">
          <img src="${prod.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${prod.title}</h5>
            <p class="card-text">Price: $${prod.price}</p>
            <p class="card-text">Rating: ${prod.rating.rate}</p>
            <p class="card-text">Stock: ${prod.rating.count}</p>
          </div>
          <div class="card-footer">
              <div class="d-grid">
                  <a href="single.html?${prod.id}" class="btn btn-secondary">View Product</a>
              </div>
          </div>
        </div>
      </div>
        ` 
    });

    display.innerHTML = output;

  }else{
    noDataFound();
  }
  
}



productData();



