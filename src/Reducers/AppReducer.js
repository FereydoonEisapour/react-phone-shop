function AppReducer(state, action) {
  switch (action.type) {
    case "init_product":
      return initProducts(state, action);
    case "AllProducts":
      return AllProducts(state, action);
    case "formSearch":
      return formSearch(state, action);
    case "id_handler":
      return idHandler(state, action);
    case "add_to_cart":
      return addToCart(state, action);
    case "remove_cart":
      return removeCart(state, action);
    case "increment":
      return increment(state, action);
    case "decrement":
      return decrement(state, action);
    case "sort_by_price_down":
      return sortByPriceDown(state, action);
    case "sort_by_price_up":
      return sortByPriceUp(state, action);
    default:
      return state;
  }
}
export default AppReducer;

const initProducts = (state, action) => {
  const storeProducts = action.payload;
  const products = storeProducts;
  const tempProducts = storeProducts;
  return {
    ...state,
    products,
    tempProducts,
  };
};
const formSearch = (state, action) => {
  const value = action.payload;
  value.toLowerCase();
  function productSearch() {
    if (value.length === 0) {
      return state.products;
    } else {
      state.tempProducts = state.products;
      return state.tempProducts.filter((item) => item.title.toLowerCase().includes(value));
    }
  }
  return {
    ...state,
    tempProducts: productSearch(),
  };
};
const AllProducts = (state, action) => {
  const value = action.payload;
  function company() {
    if (value === "") {
      return state.products;
    } else {
      state.tempProducts = state.products;
      return state.tempProducts.filter((item) => item.company === value);
    }
  }
  return {
    ...state,
    tempProducts: company(),
  };
};
const sortByPriceDown = (state, action) => {
  return {
    ...state,
    productsSort: [
      state.products &
        state.tempProducts.sort(function (a, b) {
          return a.price - b.price;
        }),
    ],
  };
};
const sortByPriceUp = (state, action) => {
  return {
    ...state,
    productsSort: [
      state.products &
        state.tempProducts.sort(function (a, b) {
          return b.price - a.price;
        }),
    ],
  };
};
const idHandler = (state, action) => {
  const { id } = action.payload;
  const newProduct = state.products.find((item) => item.id === id);
  state.tempDetails = newProduct;
  return {
    ...state,
    tempDetails: [newProduct],
  };
};
const addToCart = (state, action) => {
  const { id } = action.payload;
  const newProduct = state.products.find((item) => item.id === id);
  newProduct.inCart = true;
  newProduct.count++;
  newProduct.total = newProduct.count * newProduct.price;
  return { ...state };
};
const removeCart = (state, action) => {
  const { id } = action.payload;
  const newProduct = state.tempProducts.find((item) => item.id === id);
  newProduct.inCart = false;
  newProduct.total = 0;
  newProduct.count = 0;
  return { ...state };
};
const increment = (state, action) => {
  const { id } = action.payload;
  const newProduct = state.tempProducts.find((item) => item.id === id);
  newProduct.count++;
  newProduct.total = newProduct.price * newProduct.count;
  return { ...state };
};
const decrement = (state, action) => {
  const { id } = action.payload;
  const newProduct = state.tempProducts.find((item) => item.id === id);
  newProduct.count--;
  newProduct.total = newProduct.price * newProduct.count;
  return { ...state };
};
