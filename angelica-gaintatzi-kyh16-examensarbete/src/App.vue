<template>
  <div>
    <!-- ************ nav ************ -->
    <nav class="nav-wrap">
      <ul class="main-nav">
        <li>
          <router-link to="/">
            <img class="strossle-logo" src="https://s3-eu-west-1.amazonaws.com/strossle-assets/other/Images/Strossle-logo-RGB_1.png" alt="Strossle logo">
          </router-link>
        </li>
        <li>
          <router-link to="about">
            <span class="strossle-link">What is strossle.it?</span>
            <div class="strossle-link-border"></div>
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- ************ end of nav ************ -->
    
    <!-- ************ main ************ -->
    <main>
      <router-view></router-view>
    </main>
    <!-- ************ end of main ************ -->
  </div>
</template>



<script>
export default {
  name: 'app',
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
  /* text-transform: uppercase; */
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
