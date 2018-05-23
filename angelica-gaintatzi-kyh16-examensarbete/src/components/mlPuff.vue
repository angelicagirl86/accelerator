<template>
        <!-- all maskine learning (ml) puffs -->
        <div class="ml-wrapper">
            <!-- loop through json -->
            <!-- find the type with the value of "ml" -->
            <div class="ml-post post" v-for="item in mlPuff.filter(item => (item.type === 'ml'))" v-bind:key="item.id" >
                
                <div>
                    <a :href="item.content_url">
                        <img class = "post-image" :src="`//images.sprinklecontent.com/600/600/?dpr=2&i=${encodeURIComponent(item.image)}`"/>
                    </a> 
                      <!-- <img class="post-image" :src="item.image"/>-->
                    <div class="post-source">
                        <div class="post-source-from">från</div>
                        {{item.site}}
                    </div>
                    <a :href="item.content_url">
                        <div class="post-title">{{item.title}}</div>
                    </a>
                    <!-- slice content so it only shows a certain amount of characters and the '...' -->
                    <div class="post-content">{{item.content.slice(0, 75) + '...'}}</div>
                </div>
            </div>
        </div>
</template>

<script>
    import json from './json/data.json'
    export default {
        name: 'mlPuff',
        data(){
            return {
                mlPuff: json
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.ml-wrapper {
    /*background-color: #f6f6f6;*/
    margin: 0 auto;
}

a {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}
 
/* 4 columns (980px and up) - desktop */
.ml-post {
    box-shadow: 0 0 0.5em #cfcfcf;
    display: inline-block;
    position: relative;
    border-radius: 0.2em;
    background-color: #fff;
    overflow: hidden;
    width: 23%;
    margin: 1%;
    margin-top: 0px;
    margin-bottom: 2%;
    height: auto;
    box-sizing: border-box;
}

.post-image {
    width: 92%;
    display: block;
	background-position: center;
	background-size: cover;
    margin: auto;
	margin-top: 4%;
    height : 44%;
}

.post-source {
    display: inline-block;
	margin: 0.6em 2em 1.5em 2em;
	color: #545454;
	font: 300 0.75em/1.2em Helvetica,Arial,sans-serif;
	text-transform: lowercase;
    text-align: left;
}

.post-source-from {
	display: inline;
	color: #4D92E3;
	font: bold 1em/1.2em Helvetica,Arial,sans-serif;
	text-transform: lowercase !important;
}

.post-title {
    color: #262626;
	font: bold 1.25em/1.3em Oswald,sans-serif;
	text-transform: none;
	word-wrap: break-word;
    text-align: left;
	padding: 0;
	margin: 0 1.3em 0.6em 1.3em;
}

.post-content {
	display: block;
	color: #686868;
	font: 400 0.8em/1.4em Helvetica, Arial, sans-serif;
	word-wrap: break-word;
	text-align: left;
	margin: 0 1.81em;
	padding-bottom: 2.5em;
}

/* Media Queries */

/* 3 columns (768px-979px) - ex. landscrape tablet */
@media screen and (min-width : 768px) and (max-width : 979px)  {
   .ml-post.post {
        width: 30.974%;
        margin: 1.2%;
    }
}

/* 2 columns (481px-767px) - ex. portrait tablet */
@media screen and (min-width : 481px) and (max-width : 767px) {
    .ml-post.post {
        width: 48.5%;
        margin: 0 1.5%;
        margin-bottom: 3%;
    }    
    
    .ml-post.post:nth-child(odd) {
        margin-left: 0 !important;
    }

     .ml-post.post:nth-child(even) {
        margin-right: 0 !important;
    }
}

/* 1 column (480px and down) - landscrape phones and smaller */
@media screen and (max-width : 480px) {
   .ml-post.post {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 5%;
    }
}

</style>
