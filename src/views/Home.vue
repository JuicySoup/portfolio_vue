<template>
<!-- Hero section -->
  <section class="info-section bg-image">
    <div class="content">
      <h1>Jonathan Österberg</h1>
      <div class="short-about">
        <p>
          I am a .NET Developer student and self-taught 3D Artist from Sweden.
        </p>
      </div>
      <div class="actionbuttons">
        <button @Click="document.getElementByClassName('about-info').scrollIntoView()" class="portfolio-btn">View Portfolio</button>
      </div>
    </div>
  </section>

<!-- portfolio section -->
  <div class="content-bg">
    <div class="content">
      <section class="portfolio">
        <div class="inner transition2">
          <p class="subtitle">&lt;Portfolio&gt;</p>
          <h2 class="portfolio-title">Some of my work</h2>
        </div>
        <div class="portfolio-grid">
          <FilterNav @filterChange="current = $event" :current="current" />
          <div v-if="projects" class="portfolio-items">
            <div v-for="project in filteredProjects" :key="project.id">
              <div class="project-item">
                <SingleProject :project="project" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section class="about">
      <div class="centered">
        <p class="subtitle">&lt;About&gt;</p>
        <h2 class="portfolio-title">Who am I?</h2>
        <p class="about-info">
          Hello! My name is Jonathan and I enjoy being creative while also
          solving problems. Ever since I was young I had an interest in creating
          videos and I was often out filming with friends.
        </p>
        <p class="about-info">
          Fast-forward to today, I am currently studying software development
          while doing 3D animation and video editing freelance jobs on the side.
        </p>
      </div>
    </section>

    <section class="about">
      <div class="centered">
        <p class="subtitle">&lt;Whats next?&gt;</p>
        <h2 class="portfolio-title">Get In Touch</h2>
        <p class="about-info">
          If you want to know more about me, my services or what I can help with
          feel free to send me an email!
        </p>
        <div class="actionbuttons">
          <button>
                  <a href="mailto:contact@jonathanosterberg.com?subject=Hey%20there!">Contact me!</a>
            </button>
        </div>
      </div>
    </section>
      </div>
</template>

<script>
import useCollection from "../composables/useCollection";
import FilterNav from "../components/FilterNav.vue";
import SingleProject from "../components/SingleProject.vue";

export default {
  name: "Home",
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    const { documents } = useCollection("images");
    this.projects = documents;
  },
  computed: {
    filteredProjects() {
      console.log(this.projects);
      if (this.current === "renders") {
        return this.projects.filter(
          (project) => project.category.category === "3D Render"
        );
      }
      if (this.current === "animations") {
        return this.projects.filter(
          (project) => project.category.category === "3D Animation"
        );
      }
      if (this.current === "videos") {
        return this.projects.filter(
          (project) => project.category.category === "Video"
        );
      }
      return this.projects;
    },
  },
};
</script>
