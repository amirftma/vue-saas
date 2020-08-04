import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartItems: [],
        total: 0
    },
    getters: {
        allCart: state => {
            return state.cartItems
        },
        getTotal: state => {
            return state.total
        },
        isInCart: (state) => (product) =>{
            var id = product.id
            var index = state.cartItems.findIndex(item => item.id===id)
            if(index===-1) {return true} else {return false}
        }
    },
    mutations: {
        addToCart(state, payload) {
            var id = payload.id
            var index = state.cartItems.findIndex(item => item.id===id)
            if (index === -1) {
                state.cartItems.push(payload)
                state.total += payload.price;
            } else {
                console.log('object gablan hastesh' + payload.id)
            }
        },
        addOrRemoveFromCart(state, payload) {
            var id = payload.id
            var index = state.cartItems.findIndex(item => item.id===id)
            if (index === -1) {
                console.log("object ezafe mikonim")
                state.cartItems.push(payload)
                state.total += payload.price;
            } else {
                state.cartItems.splice(index, 1)
                console.log('object gablan hastesh' + payload.id)
                state.total -= payload.price;
            }
        }
    },
    actions: {
        addToCart(context, payload) {
            setTimeout(() => {
                // or commit("addToCart", payload)
                context.commit({
                    type: "addToCart",
                    payload: payload
                }
                )
            }, 10);
        }
    }
})