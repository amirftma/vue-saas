<template>
    <div class='product-detail-container'>
        <b-card class="overflow-hidden" style="max-width: 80%;">
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="product.image" alt="Logo" class="rounded-0" ></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="product.name">
                        <b-card-text>
                            <p>{{product.desc}}</p>

                            <p class="price">price: {{ product.price }}</p>
                            <br>
                        </b-card-text>
                        <b-button v-on:click="addOrRemove(product)" class='add-btn' :variant="addBtn.variant">{{ addBtn.txt }}</b-button>
                    </b-card-body>
                    <!-- <b-button v-on:click="addItemToCart(product)" class='add-btn' :variant="addBtn.variant">{{ addBtn.txt }}</b-button> -->
                </b-col>
            </b-row>
        </b-card>
    </div>
</template>


<script>
export default {
    name: "ProductDetail",
    props: {
        product: Object
    },
    data() {
        return {
            addBtn: {
                variant:"success",
                txt: "Add"
            },
            addState: {
                variant:"success",
                txt: "Add"
            },
            removeState : {
                variant:"danger",
                txt: "Remove"
            }
        }
    },
    computed: {
        isInCart() {
            var isIn = this.isProductInCart(this.product)
            console.log('is in card' + isIn)
            return isIn

        }
    },
    methods: {
        addItemToCart: function(product) {
            // console.log('added ' + product.id);
            this.$store.commit("addToCart", product);
            this.addBtn = this.removeState;
            // lets do it with vuex action
            // this.$store.dispatch("addToCart", product)
            // var c = this.$store.getters.allCart
            // console.log(this.$store.getters.allCart);
            // console.log(c[0])
            return ""
        },
        addOrRemove: function(product) {
            var isIn = this.isProductInCart(product)
            this.$store.commit("addOrRemoveFromCart", product);
            if (isIn) {
                // remove is then
                this.addBtn = this.removeState
            }else {
                this.addBtn = this.addState
            }
        },
        isProductInCart(product) {
            var isIn = this.$store.getters.isInCart(product)
            return isIn
        },

    }
}
</script>


<style>
.add-btn {
    position:absolute;
    bottom:0;
    right:0;
    margin: 16px;
}
.price {
    position:absolute;
    bottom:0;
    left:0;
    margin: 16px;
}
.product-detail-container{
    margin: 8px;
}
</style>