<template>
    <div class="row">
        <div class="col">
            <div class="box">
                <h3>{{ heading }}</h3>
                <p>{{ text }}</p>
                <button class="btn">{{ btnTxt }}</button>
            </div>
        </div>
        <div class="col">
            <img :src="require('@/assets/img/'+imageUrl)" alt="" class="imagebox">
        </div>
    </div>
</template>

<script>
export default {
    name: 'textAndImage',
    props: {
        heading: String,
        text: String,
        btnTxt: String,
        imageUrl: String,
    }
}
</script>

<style scoped>
.row {
    display: flex;
    padding: 2em 1em;
    align-items: center;
}
.col{
    width:50%; 
    text-align: left; 
}
.row h3{
    margin: 0px;
    font-size: 32px;
    font-weight: 900;
}
.row p {
    font-size: 17px;
    line-height: 22px;
}
.row button{
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    padding: 1.2em 2em;
}
.box {
    background-color: #f9f8f8;
    padding: 4em;
    max-width: 530px;
    margin: auto 0px auto auto;
}
.imagebox::after {
    
}
</style>