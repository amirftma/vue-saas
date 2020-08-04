<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">Guud Repository</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item >Home</b-nav-item>
                <b-nav-item to="/" v-scroll-to="'#services'">Services</b-nav-item>
                <b-nav-item to="/" v-scroll-to="'#about-us'">About us</b-nav-item>
                <b-nav-item href="#">Contact us</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item target="blank" href="https://guud.space/">Repository Panel</b-dropdown-item>
                <b-dropdown-item target="blank" href="https://guud.space/">Repository Panel</b-dropdown-item>
                <b-dropdown-item target="blank" href="https://guud.space/#admin/repository">Sign in</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>