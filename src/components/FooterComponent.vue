<template>
    <div id="container">
        <div id="contacts">
        <div id="contacts--contact">
            <p>{{ mail }}</p>
            <p>{{ phone }}</p>
        </div>
        <!-- <script src="https://www.zarinpal.com/webservice/TrustCode" type="application/javascript"></script> -->
  
        </div>
        <div id="mentions">
        <p>{{ mention }}</p>
        </div>
   </div>
</template>

<script>
export default {
    name: "FooterComponent",
    data(){
        return{
            mail : 'name@gmail.com',
            phone : '09123456789',
            mention : '2020 | guud'
        }
    },
    methods: {

    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');


#container{
  padding-top:20px;
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#0e0b24;
  display:flex;
  flex-direction:column;
  align-items:center;
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>