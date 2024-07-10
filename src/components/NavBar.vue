<template>
    <div>
        <ul class="nav-bar">
            <li><a href="/" >Home</a></li>
            <li><a href="/add" >Add product</a></li>
            <li><a href="/update" >Update Product</a></li>
            <li><a href="/logout" >Logout</a></li>
            <li><a href="/profile" >Profile</a></li>
            <li><a href="/signup" >Sign Up</a></li>
        </ul>
    </div>
</template>


<script>
    import '../assets/css/style.css'

    export default {
        name: "NavBar"
    };
</script>