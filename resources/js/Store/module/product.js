// import help from "../../help";

const state = () => ({
    products: [],
    cart: []
});

const getters = {

};

const actions = {

};

const mutations = {
    updateProducts(state, products)
    {
        state.products = products;
    },

    addToCart(state, product)
    {
        let productInCartIndex = state.cart.findIndex(item => item.slug === product.slug);
        if(productInCartIndex !== -1) {
            state.cart[productInCartIndex].quantity++;
            return;
        }
        product.quantity = 1;
        state.cart.push(product);
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
