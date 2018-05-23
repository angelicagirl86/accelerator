const express = require('express')
const cors = require('cors')
const app = express()
const data = require('./json/data.json')



app.use(cors())

app.get('/api', (req, res) => {
    let responseHtml = ''
    for (let i = 0; i < data.length; i++) { 
        const article = data[i]


        switch (article.type) {
            case "ml":
                responseHtml += `<div class="ml-post post">
                    <div>
                        <a href="${article.content_url}">
                            <img class = "post-image" src="//images.sprinklecontent.com/600/600/?dpr=2&i=${encodeURIComponent(article.image)}"/>
                        </a>
                        <div class="post-source">
                            <div class="post-source-from">från</div>
                            ${article.site}
                        </div>
                        <a href="item.${article.content_url}">
                            <div class="post-title">${article.title}</div>
                        </a><div class="post-content">${article.content.slice(0, 75)}...</div>
                    </div>
                    </div>`
                break;
            case "most_shared":
                responseHtml += `<div class="most-shared-post post">
                        <div>
                            <a href="${article.content_url}">
                                <div class="most-shared-header-title">Mest delad</div>
                                <div class="most-shared-header-title-border"></div>
                                <img class="post-image" src="//images.sprinklecontent.com/600/600/?dpr=2&i=${encodeURIComponent(article.image)}"/>
                            </a>
                            <div class="post-source">
                                <div class="post-source-from">från</div>
                                ${article.site}
                            </div>
                            <a href="${article.content_url}">
                                <div class="post-title">${article.title}</div>
                            </a>
                            <div class="post-content">${article.content.slice(0, 120)}...</div>
                            <a href="${article.content_url}">
                                <div class="most-shared-read-more-btn">
                                    <div class="most-shared-read-more">Läs mer</div>
                                </div>
                                <div class="most-shared-read-more-btn-border"></div>
                            </a>
                        </div>
                    </div>`
                 break;
                 case "most_read":
                 responseHtml += `<div class="most-read-post post">
                         <div>
                             <a href="${article.content_url}">
                                 <div class="most-read-header-title">Mest läst</div>
                                 <div class="most-read-header-title-border"></div>
                                 <img class="post-image" src="//images.sprinklecontent.com/600/600/?dpr=2&i=${encodeURIComponent(article.image)}"/>
                             </a>
                             <div class="post-source">
                                 <div class="post-source-from">från</div>
                                 ${article.site}
                             </div>
                             <a href="${article.content_url}">
                                 <div class="post-title">${article.title}</div>
                             </a>
                             <div class="post-content">${article.content.slice(0, 120)}...</div>
                             <a href="${article.content_url}">
                                 <div class="most-read-read-more-btn">
                                     <div class="most-read-read-more">Läs mer</div>
                                 </div>
                                 <div class="most-read-read-more-btn-border"></div>
                             </a>
                         </div>
                     </div>`
                  break;
                  case "latest":
                  responseHtml += `<div class="latest-post post">
                          <div>
                              <a href="${article.content_url}">
                                  <div class="latest-header-title">Senast</div>
                                  <div class="latest-header-title-border"></div>
                                  <img class="post-image" src="//images.sprinklecontent.com/600/600/?dpr=2&i=${encodeURIComponent(article.image)}"/>
                              </a>
                              <div class="post-source">
                                  <div class="post-source-from">från</div>
                                  ${article.site}
                              </div>
                              <a href="${article.content_url}">
                                  <div class="post-title">${article.title}</div>
                              </a>
                              <div class="post-content">${article.content.slice(0, 120)}...</div>
                              <a href="${article.content_url}">
                                  <div class="latest-read-more-btn">
                                      <div class="latest-read-more">Läs mer</div>
                                  </div>
                                  <div class="latest-read-more-btn-border"></div>
                              </a>
                          </div>
                      </div>`
                   break;
                   case "trending":
                   responseHtml += `<div class="trending-post post">
                           <div>
                               <a href="${article.content_url}">
                                   <div class="trending-header-title">Populärt</div>
                                   <div class="trending-header-title-border"></div>
                                   <img class="post-image" src="//images.sprinklecontent.com/600/600/?dpr=2&i=${encodeURIComponent(article.image)}"/>
                               </a>
                               <div class="post-source">
                                   <div class="post-source-from">från</div>
                                   ${article.site}
                               </div>
                               <a href="${article.content_url}">
                                   <div class="post-title">${article.title}</div>
                               </a>
                               <div class="post-content">${article.content.slice(0, 120)}...</div>
                               <a href="${article.content_url}">
                                   <div class="trending-read-more-btn">
                                       <div class="trending-read-more">Läs mer</div>
                                   </div>
                                   <div class="trending-read-more-btn-border"></div>
                               </a>
                           </div>
                       </div>`
                    break;
        }


    }
    responseHtml += `<a class="pagination__next" href="http://localhost:3000/api?page=2">Next page</a>`
    setTimeout(() => res.send(responseHtml), 1000)
    // res.send(responseHtml)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))