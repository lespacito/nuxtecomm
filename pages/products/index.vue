<template>
    <div>
        <h2>Page des produits</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductCard from '../../components/ProductCard.vue';

    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
    
</style>