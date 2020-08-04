<template>
    <div align="center" id="services" class="products">
        <h2><b-badge variant="light">Services</b-badge></h2>
        <product-detail v-for="product in products" :key="product.id" v-bind:product="product"></product-detail>
    </div>
</template>


<script>
import PythonIcon from '../assets/python-512.png'
import DockerIcon from '../assets/docker-512.png'
import AptIcon from '../assets/debian-512.png'
import GoIcon from '../assets/go-512.png'
import MavenIcon from '../assets/maven-512.png'
import NpmIcon from '../assets/npm-512.png'

import ProductDetail from './ProductDetail.vue'
// import json from '../assets/data.json'

export default {
    name: "ProductList",
    components: {
        ProductDetail
    },
    data() { 
        return {
            defaultPrice: 10.0,
            freePrice: 0,

            products : []
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
                // console.log(json)
                // this.products = json
                this.products = [ 
                    {id: 1, name:'Python PYPI', price: this.freePrice, image: PythonIcon, desc: "The Python Package Index (PyPI) is a repository of software for the Python programming language. PyPI helps you find and install software developed and shared by the Python community. Package authors use PyPI to distribute their software."},
                    {id: 2, name:'Docker Registry', price: this.defaultPrice, image: DockerIcon, desc: "The Registry is a stateless, highly scalable server side application that stores and lets you distribute Docker images."},
                    {id: 3, name:'Javascript NPM', price: this.defaultPrice, image: NpmIcon, desc: "npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js."},
                    {id: 4, name:'Java Maven', price: this.defaultPrice, image: MavenIcon, desc: "Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information."},
                    {id: 5, name:'Go', price: this.defaultPrice, image: GoIcon, desc: "Go 1.11 and 1.12 include preliminary support for modules, Go’s new dependency management system that makes dependency version information explicit and easier to manage."},
                    {id: 6, name:'APT', price: this.defaultPrice, image: AptIcon, desc: "Advanced Package Tool (or APT), the main command-line package manager for Debian and its derivatives. It provides command-line tools for searching, managing and querying information about packages."},
                ]
        }
    }

}
</script>

<style>

</style>