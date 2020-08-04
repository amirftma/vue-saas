<template>
    <div>
        <Header></Header>
            <div class="main container">
                <ProductList></ProductList>
                <Cart v-on:event_remove_from_cart="showRemoved" ></Cart>
            </div>
        <AboutUs></AboutUs>
    </div>
</template>



<script>
import Header from './Header.vue'
import AboutUs from './AboutUs.vue'
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
    name: 'Home',
    components: {
    Header,
    Cart,
    AboutUs,
    ProductList
    },

    data() {
        return {
            overlayShow: false
        }
    },
    methods: {
        overlayShowEmit() {
            this.overlayShow = !this.overlayShow
        },
        showRemoved(val) {
            console.log("remove" + val)
        }
    }

}
</script>


<style>
.main {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    flex: 1;
    padding-bottom: 2rem;
}
.container {
    margin: 0 auto;
}

.products {
    margin: auto;
  flex: 3;
}
</style>