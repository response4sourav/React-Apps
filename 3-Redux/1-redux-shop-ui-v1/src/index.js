
import 'bootstrap/dist/css/bootstrap.css'


import store from './store';
import { loadProducts } from './actions/products'


//---------------------------------------------------------------
// View 
//---------------------------------------------------------------
let loadProductsBtn = document.getElementById('load-products-btn');


loadProductsBtn.addEventListener('click', e => {
    let action = loadProducts('elec', 2)
    store.dispatch(action)
});


//---------------------
// ProductListComponent
//---------------------

store.subscribe(() => {
    console.log("--------------------");
    console.log("ProducListComponent");
    console.log("--------------------");
    let state = store.getState();
    console.log(state.products);
    console.log("--------------------");
})
