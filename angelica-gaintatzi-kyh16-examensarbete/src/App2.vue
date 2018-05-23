<template>

<!--  <div id="app"> -->
    <!-- ************ nav ************ -->
    <!-- For responsive design: we want a toolbar menu on big screens and a drawer/hamburger menu on smaller screens -->
    <v-app>
      <!-- drawer with hamburger icon -->
      <v-navigation-drawer fixed v-model="sideNav">
        <v-list>
          <!-- v-list-tile = rows in the list -->
          <v-list-tile v-for="item in menuItems" :key="item.title">
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>          
      </v-navigation-drawer>
      <v-toolbar>
        <!-- hamburger icon (click listener to open and close the drawer)
        (with the modifier .native we tell vue to get the native DOM click event)
        (with the modifier .stop we don't dismiss the drawer)
        -->
        <!-- css class for drawer menu to be hidden on medium viewports and up -->
        <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
        <!-- logo -->
        <v-toolbar-title>
          <img class="strossle-logo" src="https://s3-eu-west-1.amazonaws.com/strossle-assets/other/Images/Strossle-logo-RGB_1.png" alt="Strossle logo">
        </v-toolbar-title>
        <!-- space between logo and menu items -->
        <v-spacer></v-spacer>
        <!-- menu items -->
        <!-- css class for toolbar menu to be hidden on small viewports and down -->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat v-for="item in menuItems" :key="item.title">{{ item.title }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!-- ************ end of nav ************ -->

      <!-- ************ main ************ -->
      <!--
      <main>
          <v-content>
            <v-container class="container-margin">
              <v-layout row wrap>
                <v-flex xl12 class="test1">
                  <v-card>
                      <featuredPuff></featuredPuff>
                      <mlPuff></mlPuff>
                  </v-card>
                </v-flex>
              </v-layout>
              <latestPuff></latestPuff>
              <mostReadPuff></mostReadPuff>
              <mostSharedPuff></mostSharedPuff>
              <trendingPuff></trendingPuff>
            </v-container>
          </v-content>
      </main> -->

      <main>
        <featuredPuff></featuredPuff>
        <mlPuff></mlPuff>
        <latestPuff></latestPuff>
        <mostReadPuff></mostReadPuff>
        <mostSharedPuff></mostSharedPuff>
        <trendingPuff></trendingPuff>
      </main>

      <!-- ************ end of main ************ -->
    </v-app>
<!--  </div> //closing tag of <div id="app">-->

</template>

<script>
//import Skills from './components/Skills.vue' //remove
import featuredPuff from './components/featuredPuff.vue'
import mlPuff from './components/mlPuff.vue'
import latestPuff from './components/latestPuff.vue'
import mostReadPuff from './components/mostReadPuff.vue'
import mostSharedPuff from './components/mostSharedPuff.vue'
import trendingPuff from './components/trendingPuff.vue'

export default {
  data() {
    return {
      sideNav: false, //boolean set to false so that the drawer is closed at the beginning
      //dynamic menu
      menuItems: [
        { title: 'HEM' },
        { title: 'SENAST' },
        { title: 'MEST LÄST' },
        { title: 'MEST DELAD' },
        { title: 'OM STROSSLE' }
      ]
    }
  },
  name: 'app',
  components: {
    mlPuff,
    featuredPuff,
    latestPuff,
    mostReadPuff,
    mostSharedPuff,
    trendingPuff
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
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

.toolbar {
  background: rgba(255, 255, 255, 0.6) !important;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,.2);
}

.strossle-logo {
  width:127px;
  height:33px;
  padding-top: 0.62em;
}

.container-margin {
  max-width: 92%;
  margin: 0 auto;
}

.btn {
  font-size: 0.75em;
}

.btn:hover {
  border-bottom: 0.3em solid #4D92E3;
}

aside > div.list > div > div > div > button:nth-child(4) > div {
  justify-content: left;
  align-items: flex-start;
  padding: 0px;
}

.main {
  margin: 50px auto;
}


</style>
