<template>
        <!-- most shared article puff -->
        <div class="most-shared-wrapper">
            <!-- loop through json -->
            <!-- find the type with the value of "most_shared" -->
            <div class="most-shared-post post" v-for="item in mostSharedPuff.filter(item => (item.type === 'most_shared'))" v-bind:key="item.id" >
                
                <div>
                    <a :href="item.content_url">
                        <div class="most-shared-header-title">Mest delad</div>
                        <div class="most-shared-header-title-border"></div>
                        <img class="post-image" :src="item.image"/>
                    </a>
                    <div class="post-source">
                        <div class="post-source-from">från</div>
                        {{item.site}}
                    </div>
                    <a :href="item.content_url">
                        <div class="post-title">{{item.title}}</div>
                    </a>
                    <!-- slice content so it only shows a certain amount of characters and the '...' -->
                    <div class="post-content">{{item.content.slice(0, 120) + '...'}}</div>
                    <a :href="item.content_url">
                        <div class="most-shared-read-more-btn">
                            <div class="most-shared-read-more">Läs mer</div>
                        </div>
                        <div class="most-shared-read-more-btn-border"></div>
                    </a>
                </div>
            </div>  
        </div>
</template>

<script>
    import json from './json/data.json'
    export default{
        name: 'mostSharedPuff',
        data(){
            return{
                mostSharedPuff: json
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.most-shared-wrapper {
    /*background-color: #f6f6f6;*/
    margin: 0 auto;
}

a {
    text-decoration: none;
    cursor: pointer;
}

a:hover {
	text-decoration: none;
}

.most-shared-post {
    box-shadow: 0 0 0.9em #a3a3a3;
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

.most-shared-header-title {
    display: inline-block;
    text-align: center;
    text-transform: none;
    font: 600 1.8em/1.2em 'Oswald', 'Open Sans', sans-serif;
    color: #474747;
    margin: 1.1em 0 0 0;
    padding: 0 0.9em;
    background-color: #fff;
    margin-left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}

.most-shared-header-title-border {
    display:block;
    border-bottom: 0.25em solid rgb(255, 0, 0);
    margin: -1.1em auto 2.3em auto;
    width: 100%;
    z-index: 100;
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

.most-shared-read-more {
    display: inline-block;
    border: none;
    color: #444;
    font: bold 0.9em/1.2em Helvetica, Arial, sans-serif;
    letter-spacing: 0.05em;
    margin: 0 auto;
    padding-bottom: 0.3em;
    margin-left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}

.most-shared-read-more-btn-border {
    display: block;
    width: 1.5em;
    border-bottom: 0.23em solid rgb(255, 0, 0);
    margin: 0 auto;
    margin-bottom: 2.5em;
}

.most-shared-read-more-btn:hover + .most-shared-read-more-btn-border {
    width: 2em;
    transition: all 0.2s ease-in-out;
}

/* Media Queries */

/* 3 columns - ex. landscrape tablet */
@media screen and (min-width : 768px) and (max-width : 979px)  {
   .most-shared-post.post {
        width: 30.974%;
        margin: 1.2%;
    }
}

/* 2 columns (481px-767px) - ex. portrait tablet */
@media screen and (min-width : 481px) and (max-width : 767px) {
    .most-shared-post.post {
        width: 48.5%;
        margin: 0 1.5%;
        margin-bottom: 3%;
    }    
    
    .most-shared-post.post:nth-child(odd) {
        margin-left: 0 !important;
    }

    .most-shared-post.post:nth-child(even) {
        margin-right: 0 !important;
    }
}

/* 1 column (480px and down) - landscrape phones and smaller */
@media screen and (max-width : 480px) {
   .most-shared-post.post {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 5%;
    }
}

</style>
