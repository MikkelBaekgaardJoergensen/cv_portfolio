<template>
    <div class="background">
        <div>
        <header>
            <nav>
                <span><NuxtLink to="/">Home</NuxtLink></span>
                <span><NuxtLink to="/about">About</NuxtLink></span>
                <span><NuxtLink to="/products">Products</NuxtLink></span>      
            </nav>
        </header>
        </div>
        
        <div>
            <slot />
        </div>
    </div>
</template>

 
<style lang="scss" scoped>
    @use "~/assets/scss/main.scss";
</style>