# webscraper

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Approach :

Approach:


This problem statement can be considered as part of Web Crawling where we crawl any websites using DFS /BFS manner . Web Scraping is the process of scraping the web site
and store it's html content in local directory for later use.


Here I am using "cheerio" library to fetch html contents from any web site


Method used:


getWebsiteData(){




}let self = this;
    let url = 'https://www.msn.com/en-au?AR=1'; // url we get data from
    let dataArray = [];                         // we put data in this array
    // GET request for remote image in node.js
    //get the HTML Content with try catch blocl


    try {
     
      axios({
      method: 'get',
      url: url,
    })
    .then(function (response) {
        let html = response.data;
        alert(html)
        let $ = cheerio.load(html);


        $("ul.tertiary li").each(function(){
              const title = $(this).find('h3').attr('aria-label');
              const image  = $(this).find('img').attr('src');


              // putting data in array.


              dataArray.push({
                'title': title,
                'image': image
              })
        });






