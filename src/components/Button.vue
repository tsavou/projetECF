<template>   <button>
    <slot />
</button>
</template>


 <style scoped>

button{
    text-decoration: none;
    color: #fff;
    background-color: #74B857;
    padding: 1em;
    border-radius: 10px;
    border: none;
}

button:hover{
    color: #74B857;
    background-color: #fff;
    border: solid 1px #74B857;
}

</style>