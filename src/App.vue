<template>
<div class="nav-container">
  <header>
    <nav class="nav-container">
      <ul>
        <li><a href="#">Work</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </header>
    </div>
    <body>
      <main id="app" class="hero">
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
            <h2 class="portfolio-title">Work I have done</h2>
          </div>
          <div class="portfolio-grid">
            <div class="portfolio-menu">
              <a href="#">Everything</a>
              <a href="#">3D Animations</a>
              <a href="#">3D renders</a>
              <a href="#">videos</a>
              <a href="#">web</a>
            </div>
            <div class="portfolio-items">
              <PortfolioGrid
                v-for="item in portfolioitems"
                :key="item.title"
                :item="item"
              />
            </div>
          </div>
        </section>
      </main>
  </body>
</template>

<script>
import PortfolioGrid from './components/PortfolioGrid.vue';

export default {
  name: "app",
  components: {
    PortfolioGrid,
  },
  data() {
    return {
      portfolioitems: [
        {
          title: "Environment intro",
          category: "3D Animation",
          created: "Aug 2020",
          src: require('./assets/Environment.png')
        },
        {
          title: "Garen",
          category: "3D Render",
          created: "Aug 2021",
          src: require('./assets/Garen.png')
        },
        {
          title: "Hellfire",
          category: "3D Animation",
          created: "Oct 2021",
          src: require('./assets/Hellfire_2k.png')
        },
      ],
    }
  }
};
</script>