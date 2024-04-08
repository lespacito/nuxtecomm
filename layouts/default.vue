<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Une peluche pour toi et moi</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Accueil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">À propos</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl">Produits</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>