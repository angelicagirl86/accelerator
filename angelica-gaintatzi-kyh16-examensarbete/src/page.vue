<template>
    <!-- ************ main ************ -->
    <main>
        <div>
            <mlPuff></mlPuff>
            <mostReadPuff></mostReadPuff>
            <mostSharedPuff></mostSharedPuff>
            <latestPuff></latestPuff>
            <trendingPuff></trendingPuff>
        </div>
    </main>
    <!-- ************ end of main ************ -->
</template>



<script>
// masonry from https://masonry.desandro.com/
import Masonry from 'masonry-layout';


//infinite scroll from https://infinite-scroll.com/
import InfiniteScroll from 'infinite-scroll';

import featuredPuff from './components/featuredPuff.vue'
import mlPuff from './components/mlPuff.vue'
// import latestPuff from './components/latestPuff.vue'
// import mostReadPuff from './components/mostReadPuff.vue'
// import mostSharedPuff from './components/mostSharedPuff.vue'
// import trendingPuff from './components/trendingPuff.vue'

export default {
  data() {
    return {
      navEnabled: false
    }
  },
  name: 'app',
  components: {
    mlPuff,
    featuredPuff,
    // latestPuff,
    // mostReadPuff,
    // mostSharedPuff,
    // trendingPuff
  }
}
</script>



<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f6f6f6;
}

#app {
  background-color: #f6f6f6;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #545454;
}

a {
  text-decoration: none;
}

main {
  margin: 0 auto;
  width: 96%;
  max-width : 1700px;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  box-sizing : border-box;
}

/* .nav-wrap {
  background: rgba(246, 246, 246, 0.6) !important;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
} */

.main-nav {
  padding: 15px 7% 9px 7%;
  background: rgba(246, 246, 246, 0.6) !important;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
  list-style-type: none;
  display: -webkit-flex;
  display: flex;
  font: 400 0.9em/1.4em Helvetica, Arial, sans-serif;
}

.main-nav li:first-child {
  margin-right: auto;
}

.strossle-logo {
  width: 23%;
}

.strossle-link {
  font: 300 0.9em/1.4em Helvetica, Arial, sans-serif;
  color: #686868;
  white-space: nowrap;
}

.strossle-link-border {
    display: block;
    width: 1.1em;
    border-bottom: 0.2em solid #4D92E3;
    margin: 0 auto;
}

.strossle-link:hover + .strossle-link-border {
    width: 1.4em;
    transition: all 0.2s ease-in-out;
}

/* 2 columns (481px-767px) - ex. portrait tablet */
@media screen and (min-width: 481px) and (max-width : 767px) {
  .strossle-logo {
    width: 30%;
  }
}

/* 1 column (480px and down) - landscrape phones and smaller */
@media screen and (max-width: 480px) {
  .strossle-logo {
    width: 40%;
  }
}

</style>
