<template>
    <div>
        <ul class="nav-bar">
            <li><router-link to="/" >Home</router-link></li>
            <li><router-link to="/add" >Add product</router-link></li>
            <li><router-link to="/update" >Update Product</router-link></li>
            <li><router-link to="/logout" >Logout</router-link></li>
            <li><router-link to="/profile" >Profile</router-link></li>
            <li><router-link to="/signup" >Sign Up</router-link></li>
        </ul>
    </div>
</template>


<script>
    import '../assets/css/style.css'

    export default {
        name: "NavBar"
    };
</script>