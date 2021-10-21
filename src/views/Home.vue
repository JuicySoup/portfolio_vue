<template>
        <div class="content">
          <h1>Jonathan Österberg</h1>
          <p>I am a .NET Developer student and self-taught 3D Artist from Sweden.</p>
          <div class="actionbuttons">
            <button class="portfolio-btn">View Portfolio</button>
            <button class="skills-btn">My Skills</button>
          </div>
        </div>
        <section class="portfolio">
          <div class="inner transition2">
            <p class="subtitle">&lt;Portfolio&gt;</p>
            <h2 class="portfolio-title">Some of my work</h2>
          </div>
          <div class="portfolio-grid">
          <FilterNav @filterChange="current = $event" :current="current" />
            <div v-if="projects.length" class="portfolio-items">
              <div v-for="project in filteredProjects" :key="project.id">
                <div class="project-item">
                  <SingleProject :project="project"/>
                  </div>
              </div>
            </div>
          </div>
        </section>
</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import SingleProject from '../components/SingleProject.vue'

export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all"
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
      .then(res => res.json())
      .then(data => this.projects = data)
      .catch(err => console.log(err.message))
  },
  computed: {
    filteredProjects() {
      if (this.current === 'renders'){
        return this.projects.filter(project => project.category === "3D Render")
      }
      if (this.current === 'animations'){
        return this.projects.filter(project => project.category === "3D Animation")
      }
      if (this.current === 'videos'){
        return this.projects.filter(project => project.category === "Video")
      }
      return this.projects
    }
  }

}
</script>
