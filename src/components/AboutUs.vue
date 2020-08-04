<template>
    <div id='about-us' align='center'>
        <h2><b-badge variant="light">About Us</b-badge></h2>

        <b-card no-body class="overflow-hidden" style="max-width: 80%;">
            <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="require('../assets/about-us.jpg')" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body title="About Us">
                <b-card-text>
                    Universal Repository Manager supporting all major packaging formats, build tools and CI servers.
                    <br>
                    <br>
                    You can use our repository to push artifacts directly to your private repositories, search through your private repositories and more to fully automate your software distribution process.
                    <br>
                    <br>
                    We <strong>manages, maintains and scales</strong>the infrastructure and provides automated server backups with free updates and guaranteed uptime. 
                </b-card-text>
                </b-card-body>
            </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.about-us {
    align: center
}
</style>