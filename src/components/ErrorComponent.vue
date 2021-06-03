<template>
    <div class="error-container">
        <img src="../assets/img/error.png" alt="Error" class="image">
        <h2 class="not-found">404 - Page Not Found!</h2>
        <small class="sorry">Sorry, that page doesn't exist. What would you like to do?</small>
    </div>
</template>

<style lang="scss" scoped>
.error-container{
    text-align: center;
}

.image{
    margin-top: 6%;
    margin-bottom: 2%;
    width: 30%;
    height: 250px;
}
.not-found{
    color: #052A82;
    font-weight: bold;
}
.sorry{
    color: #899FC7;
}

</style>