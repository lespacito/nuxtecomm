<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/" class="font-bold">Une peluche pour toi et moi Shop</NuxtLink>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Accueil</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">À propos</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Produits</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>