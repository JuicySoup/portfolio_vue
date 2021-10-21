<template>
    <div class="portfolio-menu">
        <button 
        @click="updateFilter('all')"
        :class="{ active: current === 'all'}"
        >Everything</button>
        
        <button @click="updateFilter('animations')"
        :class="{ active: current === 'animations'}"
        >3D Animations</button>

        <button @click="updateFilter('renders')"
        :class="{ active: current === 'renders'}"
        >3D renders</button>

        <button @click="updateFilter('videos')"
        :class="{ active: current === 'videos'}"
        >videos</button>
    </div>
</template>

<script>
export default {
    props: ['current'],
    methods: {
        updateFilter(filter) {
            this.$emit('filterChange', filter)
        }
    }
}
</script>

<style>

</style>