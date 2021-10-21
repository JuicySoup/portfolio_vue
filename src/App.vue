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
        <router-view/>
      </main>
  </body>
</template>

<script>

export default {
  name: "app",
  components: {
  }
};
</script>