<template>
    <div class="cart" >
        <b-list-group>
            <b-list-group-item v-for="(product, index) in cartsList" :key="product.id" >
                {{index}}. {{product.name}}
                <!-- <b-button v-on:click="removeFromCart(product)" size="sm" class='icon-x'><b-icon-x></b-icon-x></b-button> -->
                <!-- <b-icon-x v-on:click="removeFromCart(product)" class='icon-x'></b-icon-x> -->
            </b-list-group-item>
        </b-list-group>
        <div class="cart-total" v-show="cartsList.length!==0">
            <hr>
            <div>
                <p> Total Cost: {{ total }} $ 
                    <b-button variant="success" :v-if="payment_link"><a class="pay-link" target="_blank" :href="payment_link">Pay</a></b-button>
                </p>
                <!-- <p><b-button v-on:click="emitOverlay" v-b-modal.modal-1>pay</b-button></p>

                <b-modal ok-only @ok="emitOverlay" id="modal-1" title="Payment alert">
                    <p class="my-4">We are sorry for this, our payment method is in progress
                        and we will make it available as soon as we can.
                        <br>
                        In the mean time You can enjoy our free `python Pypi` package manager. 
                    </p>
                </b-modal> -->
            </div>
        </div>
</div>
</template>

<script>
// import mapGetters from 'vuex';

export default {
    props: {
    },
    name: "Card",
    data() {
        return {
            // cartsList: this.$store.getters.allCart
            payment_list: [
                "https://example.com/",
                "https://example.com/",
                "https://example.com/",
                "https://example.com/",
                "https://example.com/",
            ]
        }
    },
    computed : {
        total() {
            return this.$store.getters.getTotal
        },
        cartsList() {
            return this.$store.getters.allCart
        },
        payment_link() {
            
            var item = this.total/10;

            // if (serviceItems>1) {

            // }
            return this.payment_list[item-1]

        }
        // ...mapGetters({
            // cartsList: 'allCart'
        // })
    },
    methods: {
        childPayClick() {

        },
        emitOverlay() {
            console.log("cart child emit bitch")
            this.$emit('event_child', 'hideOrShow')
        },
        removeFromCart(product) {
            console.log("cart decide to remove it")
            this.$emit('event_remove_from_cart', product)
            this.$store.commit("addOrRemoveFromCart", product)
        }
    }
}
</script>

<style>
.cart {
    flex: 1;
    text-align: center;
}
.icon-x {

    position: absolute;
    /* text-align: end; */
    border: 1px solid red;
    /* background: gray; */
    right: 0px;
    margin-right: 8px;
}
.cart-total {
    text-align: start;
}
.pay-link {
    color:white;
   text-decoration: none; 
   background-color: none;
}
</style>