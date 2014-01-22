var fs = require('fs'),
  parseString = require('xml2js').parseString,
  jsdom = require('jsdom'),
  agave = require('agave'),
  request = require('request');

agave.enable('av');

var xml = fs.readFileSync('myfile.xml')
parseString(xml, function (err, result) {
  var blog = result.rss.channel[0];

  var posts = blog.item

  var count = posts.length

  var results = [];

  console.log(count, 'posts to import')

  posts.forEach(function(post){

    if ( post['wp:post_type'][0] === 'page' ) {
      //console.log('\n\n')

      //console.dir(post)
      var postName = post.link[0].avstrip('/');
      var html = post['content:encoded'][0]

      if ( postName !== 'new-page' ) {
        jsdom.env(
          html,
          ["http://code.jquery.com/jquery.js"],
          function (errors, window) {
            var imageURL = window.$("img").attr('src')
            var extension = imageURL.split('?')[0].split('.').reverse()[0] || 'unknown'
            // console.log(postName, imageURL, extension);

            var cleanPost = {
              slug: postName,
              previewImage: postName+'.'+extension,
              title: post.title[0],
              pubDate: post.pubDate[0],
              content: post['content:encoded'][0]
            }
            //console.log(cleanPost)
            results.push(cleanPost)

            count--;
            console.log(count)

            if ( count === 0 ) {
              console.log('done!')

              fs.writeFile('works.json', JSON.stringify(results, null, 2), function(err) {
                  if(err) {
                    console.log(err);
                  } else {
                    console.log("JSON saved!");
                  }
              });
            }
          }
        );
      } else {
        count--;
      }
    } else {
      count--;
    }
  })
});