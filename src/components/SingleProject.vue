<template>
    <div class="project">
        <router-link class="project-image-wrap" :to="{ name: 'ProjectDetails', params: { id: project.id}}">
            <img v-if="project.url.includes('png') || project.url.includes('jpeg')" :src="project.url" class="image">
            <video v-else :src="project.url" class="image" preload="none" :poster="project.poster"/>
        </router-link>
        <div class="project-inner">
            <p class="date-text">{{project.created}}</p>
            <div class="project-text-wrap">
                <p>{{project.category.category}}</p>
                <h3>{{project.title.title}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            showModal: false
        }
    }
}
</script>

<style>
    .image{
        height: 100%;
    }
    .project{
        position: relative;
        display: inline-block;
    }
    .project-image-wrap{
        max-width: 100%;
        display: inline-block;
        overflow: hidden;
        border-radius: 10px;
        height: 250px;
        width: 300px;
    }
    .project-image-wrap > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .date-text{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 0.6em;
        padding: 0 1em;
    }
    .project-text-wrap{
        position:absolute;
        bottom: 0;
        left: 0;
        padding: .5em .6em;
    }
    .project-text-wrap > p{
        color: #FF6868;
        font-size: 0.6em;
        text-align: left;
        margin-bottom: -1em;

    }
    .project-text-wrap > h3{
        font-size:0.7em;
        font-weight: 600;
        text-align: left;
    }

    @media only screen and (min-width: 800px){
        .project-image-wrap{
            max-width: 100%;
            display: inline-block;
            overflow: hidden;
            border-radius: 10px;
            height: 300px;
            width: 350px;
        }
    }
    
</style>