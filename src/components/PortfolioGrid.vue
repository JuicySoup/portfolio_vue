<template>
<div class="item">
    <div class="item-image-wrap">
        <img :src="item.src" class="image">
    </div>
    <div class="item-inner">
        <p class="date-text">{{item.created}}</p>
        <div class="item-text-wrap">
            <p>{{item.category}}</p>
            <h3>{{item.title}}</h3>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'item',
    props: ['item']
}
</script>

<style>
    .item{
        flex: 1 1 33.333%;
        position: relative;
        margin-top: 3em;
    }
    .date-text{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0.6em;
        padding: 0 1em;
    }
    .item-text-wrap{
        position:absolute;
        bottom: 0;
        left: 0;
        padding: .5em .6em;
    }
    .item-text-wrap > p{
        color: #FF6868;
        font-size: 0.6em;
        text-align: left;
        margin-bottom: -1em;

    }
    .item-text-wrap > h3{
        font-size:0.7em;
        font-weight: 600;
        text-align: left;
    }
    


</style>