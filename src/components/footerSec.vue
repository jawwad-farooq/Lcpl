<template>
    <div class="footer">
        <p>{{ contentLine }}</p>
    </div>
</template>
   
<script>
    import '../assets/css/style.css'

    export default {
        name: "footerSec", 
        props:{
            contentLine: String
        } 
    }
</script>