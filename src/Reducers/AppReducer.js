function AppReducer(state, action) {
    switch (action.type) {
        case 'init_product':
            return initProducts(state, action)
        case 'AllProducts':
            return AllProducts(state, action)
        case 'formSearch':
            return formSearch(state, action)
        case 'id_handler':
            return idHandler(state, action)
        case 'add_to_cart':
            return addToCart(state, action)
        case 'remove_cart':
            return removeCart(state, action)
        case 'increment':
            return increment(state, action)
        case 'decrement':
            return decrement(state, action)
        case 'sort_by_price_down':
            return sortByPriceDown(state, action)
        case 'sort_by_price_up':
            return sortByPriceUp(state, action)
        default:
            return state
    }
}
export default AppReducer;

let initProducts = (state, action) => {
    let storeProducts = action.payload;
    let products = storeProducts;
     let tempProducts = storeProducts
    return {
        ...state,
        products,
        tempProducts,
    }
}
let formSearch = (state, action) => {
    let value = action.payload
    value.toLowerCase()
    function productSearch() {
        if (value.length === 0) {
            return state.products
        } else {
            state.tempProducts = state.products
            return state.tempProducts.filter(item => item.title.toLowerCase().includes(value))
        }
    }
    return {
        ...state, tempProducts: productSearch()
    }
}
let AllProducts = (state, action) => {
    let value = action.payload
    function company() {
        if (value === "") {
            return state.products
        } else {
            state.tempProducts = state.products
            return state.tempProducts.filter(item => item.company === value)
        }
    }
    return {
        ...state, tempProducts: company()
    }
}
let sortByPriceDown = (state, action) => {
    return {
        ...state, productsSort: [state.products & state.tempProducts.sort(function (a, b) { return a.price - b.price })]
    }
}
let sortByPriceUp = (state, action) => {
    return {
        ...state,
        productsSort: [state.products & state.tempProducts.sort(function (a, b) { return b.price - a.price })]
    }
}
let idHandler = (state, action) => {
    let { id } = action.payload
    let newProduct = state.products.find(item => item.id === id)
    state.tempDetails = newProduct
    return {
        ...state,
        tempDetails: [newProduct]
    }
}
let addToCart = (state, action) => {
    let { id } = action.payload
    let newProduct = state.products.find(item => item.id === id)
    newProduct.inCart = true
    newProduct.count++
    newProduct.total = newProduct.count * newProduct.price
    return { ...state}
}
let removeCart = (state, action) => {
    let { id } = action.payload
    let newProduct = state.tempProducts.find(item => item.id === id)
    newProduct.inCart = false
    newProduct.total = 0
    newProduct.count = 0
    return {...state}
}
let increment = (state, action) => {
    let { id } = action.payload
    let newProduct = state.tempProducts.find(item => item.id === id)
    newProduct.count++
    newProduct.total = newProduct.price * newProduct.count
    return { ...state }
}
let decrement = (state, action) => {
    let { id } = action.payload
    let newProduct = state.tempProducts.find(item => item.id === id)
    newProduct.count--
    newProduct.total = newProduct.price * newProduct.count
    return { ...state }
}