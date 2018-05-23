<template>
    <body>
        <!-- all article puffs -->
        <div class="wrapper">
            <!-- Using a Vue component, called "vue-masonry-css", to create the masonry grid (https://github.com/paulcollett/vue-masonry-css)-->
            <masonry
                :cols="{default: 4, 980: 3, 768: 2, 480: 1}"
                :gutter="{default: '10px', 980: '10px', 768: '10px', 480: '10px'}"
             >
                <!-- loop through json -->
                <div class="post" v-for="item in mlPuff" v-bind:key="item.id" >
                    <a :href="item.content_url">
                        <img class = "post-image" :src="item.image"/>
                    </a>
                    <div class="post-source">
                        <div class="post-source-from">från</div>
                        {{item.site}}
                    </div>
                    <a :href="item.content_url">
                        <div class="post-title">{{item.title}}</div>
                    </a>
                    <div class="post-content">{{item.content}}</div>
                </div>  
            </masonry>   
        </div>
    </body>
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
<style scoped>

.wrapper {
    background-color: #f6f6f6;
    margin: 0 auto;
}

a {
	text-decoration: none;
}

a:hover {
	text-decoration: none;
}

.post {
    display: inline-block;
    position: relative;
    border-radius: 0.2em;
    box-shadow: 0 0 0.5em #cfcfcf;
    background-color: #fff;
    overflow: hidden;
    margin : 10px; 
}

.post-image {
    width: 94%;
    height: auto;
    display: block;
	background-position: center;
	background-size: contain;
    margin: auto;
	margin-top: 3%;
}

.post-source {
    display: inline-block;
	margin: 0.6em 2em 1.1em 2em;
	color: #545454;
	font: 300 0.8em/1.2em Helvetica,Arial,sans-serif;
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
	margin: 0 1.3em 1.25em 1.3em;
}

.post-content {
	display: block;
	color: #686868;
	font: 400 0.9em/1.4em Helvetica, Arial, sans-serif;
	word-wrap: break-word;
	text-align: left;
	margin: 0 1.75em;
	padding-bottom: 2.5em;
}

</style>
