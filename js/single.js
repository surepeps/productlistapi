let querystring = window.location.search.substring(1);
let SingleDisplay = document.getElementById("single-display");
const apilink = "https://fakestoreapi.com/products";


// Single page script

let singlePage = (numProd) => {

    let resp = fetch(apilink + '/' + numProd)
      .then( res => res.json() )
      .then( finalval => { 
  
        SingleDisplay.innerHTML = `
  
            <div class="card mb-3 col-md-12" >
                  <div class="row g-0">
                    <div class="col-md-6">
                      <img src="${finalval.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-6">
                      <div class="card-body">
                        <h5 class="card-title fs-2">${finalval.title}</h5>
                        <p class="card-text">${finalval.description}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <div class="row my-2">
                          <div class="col-md-6">
                              <h5>Price: <b>$${finalval.price}</b></h5>
                          </div>
                          
                          <div class="col-md-6">
                              <h5>Rating: <b>${finalval.rating.rate}</b></h5>
                          </div>
                          <div class="col-md-12">
                              <h5>Stock: <b>${finalval.rating.count}</b></h5>
                          </div>
                        </div>
                        <div class="col-md-4 mt-3">
                          <input type="number" name="" min="1" max="100" value="1" id="">
                        </div>
  
                        <div class="row mt-4">
                          <div class="col-md-6">
                              <div class="d-grid">
                                  <button class="btn btn-primary">Order</button>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="d-grid">
                                  <button class="btn btn-danger">Cancel</button>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
        
        `
  
  
      })
  
  }
  
  let noSingleDataFound  = () => {
  
    SingleDisplay.innerHTML = `
      <div class=col-lg-12 mt-3">
        <div class="alert alert-warning text-center">
          <p>Sorry Invalid url or Product not found</p>
        </div>
      </div>
    `;
  }
  
  if(querystring > 0) singlePage(querystring);
  noSingleDataFound()