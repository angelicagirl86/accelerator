<template>
        <!-- featured article puff -->
        <div class="featured-post">
            <!-- loop through json -->
            <!-- find the type with the value of "featured" -->
            <!-- add masonry class "stamp" and apply a fixed position -->
            <div class="featured-post stamp" v-for="item in featuredPuff.filter(item => (item.type === 'featured'))" v-bind:key="item.id" >
                
                <div>
                    <a :href="item.content_url">
                        <div class="featured-header-title">Artikel i Fokus</div>
                        <div class="header-title-border"></div>
                        <img class="post-image" :src="`//images.sprinklecontent.com/900/450/?dpr=2&i=${encodeURIComponent(item.image)}`"/>
                    </a>
                    <div class="source-and-date">
                        <span class="post-source">
                            <div class="post-source-from">från</div>
                            {{item.site}}
                        </span>
                        <span class="post-date">{{(item.published * 1000) | sayDate}}</span>
                    </div>
                   
                    <a :href="item.content_url">    
                        <div class="post-title"> 
                            {{item.title}}     
                        </div>
                    </a> 
                    
                    <!-- slice content so it only shows a certain amount of characters and the '...' -->
                    <div class="post-content">{{item.content.slice(0, 200) + '...'}}</div>
                    <a :href="item.content_url">
                        <div class="read-more-btn">
                            <div class="read-more">Läs mer</div>
                        </div>
                        <div class="read-more-btn-border"></div>
                    </a>
                </div>
            </div>  
        </div>
</template>

<script>
    import json from './json/data.json'
    export default{
        name: 'featuredPuff',
        data(){
            return{
                featuredPuff: json
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.featured-wrapper {
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

.featured-post {
    border-radius: 0.2em;
    box-shadow: 0 0 0.9em #a3a3a3;
    background-color: #fff;
    overflow: hidden;
    left: 26.001%;
    margin-top: 0px;
}

.featured-post > .featured-post.stamp {
    position: absolute;
    width: 48%;
    margin: auto; 
    margin-top: 0px;
    margin-bottom: 2%;
}

.featured-header-title {
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

.header-title-border {
    display:block;
    border-bottom: 0.25em solid #4D92E3;
    margin: -1.1em auto 2.3em auto;
    width: 100%;
    z-index: 100;
}

.post-image {
    width: 90% ;
    height: 44%;
    display: block;
	background-position: center;
	background-size: crop;
	margin: auto;
}

.source-and-date {
    display: block;
    margin: 0.6em 2.7em 3.5em 2.7em;
}

.post-source {
	color: #545454;
	font: 300 0.85em/1.2em Helvetica,Arial,sans-serif;
	text-transform: lowercase;
    float: left;
    margin:0px;
}

.post-source-from {
	display: inline;
	color: #4D92E3;
	font: bold 1.02em/1.2em Helvetica,Arial,sans-serif;
	text-transform: lowercase !important;
}

.post-date {
    color: #545454;
	font: 300 0.85em/1.2em Helvetica,Arial,sans-serif;
    float: right;
    text-transform: capitalize;
        margin: 0px;
}

.post-title {
    color: #262626;
	font: bold 2.1em/1.3em 'Oswald',sans-serif;
	text-transform: none;
	word-wrap: break-word;
    text-align: left;
	margin: 0 1.3em 0.8em 1.3em;
}

.post-content {
	display: block;
	color: #686868;
	font: 400 1em/1.4em Helvetica, Arial, sans-serif;
	word-wrap: break-word;
	text-align: left;
	margin: 0 2.7em;
	padding-bottom: 2.6em;
}

.read-more {
    display: inline-block;
    border: none;
    color: #444;
    font: bold 1.3em/1.2em Helvetica, Arial, sans-serif;
    letter-spacing: 0.05em;
    margin: 0 auto;
    padding-bottom: 0.3em;
    margin-left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
}

.read-more-btn-border {
    display: block;
    width: 2em;
    border-bottom: 0.3em solid #4D92E3;
    margin: 0 auto;
    margin-bottom: 2.5em;
}

.read-more-btn:hover + .read-more-btn-border {
    width: 2.5em;
    transition: all 0.2s ease-in-out;
}


/* Media Queries - breakpoints from https://www.designfiles.net/responsive-infographic/ */

/* 3 columns (768px-979px) - ex. landscrape tablet */
@media screen and (min-width : 768px) and (max-width : 979px)  {
   .featured-post > .featured-post.stamp{
        width: 98%;
        margin: 1%;
        margin-top: 0;
        margin-bottom: 1.1%;
        left: 0;
    } 
    .source-and-date {
        margin: 0.6em 3.7em 3em 3.7em;
    }

    .post-title {
	    margin: 0 1.8em 0.8em 1.8em;
    }

    .post-content {
	    margin: 0 3.7em;
    }
}

/* 2 columns (481px-767px) - ex. portrait tablet */
@media screen and (min-width : 481px) and (max-width : 767px) {
   .featured-post > .featured-post.stamp{
        width: 100%;
        margin: 0;
        margin-top: 0;
        margin-bottom: 3.1%;
        left: 0;
    } 
}

/* 1 column (480px and down) - landscrape phones and smaller */
@media screen and (max-width : 480px) {
   .featured-post > .featured-post.stamp{
        width: 100%;
        margin-top: 0;
        margin-bottom: 5.2%;
        left: 0;
    }
}


</style>
