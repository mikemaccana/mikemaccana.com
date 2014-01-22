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

  posts.forEach(function(post){

  var results;

    if ( post['wp:post_type'][0] === 'page' ) {
      // console.log('\n\n')

      // console.dir(post)
      var postName = post.link[0].avstrip('/');
      var html = post['content:encoded'][0]

      if ( postName !== 'new-page' ) {
        jsdom.env(
          html,
          ["http://code.jquery.com/jquery.js"],
          function (errors, window) {
            var imageURL = window.$("img").attr('src')
            var extension = imageURL.split('?')[0].split('.').reverse()[0] || 'unknown'
            console.log(postName, imageURL, extension);
            request(imageURL).pipe(fs.createWriteStream(postName+'.'+extension))
          }
        );
      }


    }



  })
});