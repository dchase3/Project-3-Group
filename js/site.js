//$.noConflict();
//(function($) {
//  $(document).ready(function() {
 $(document).ready(function() {
     newUrl=document.URL
     $('#content').append(newURL);
     var url=document.URL;
     var url2=url.substr(url.indexOf('=')+1,url.length);
     console.log(url2);
     var token = url2.split('&')[0];
     console.log(token);     
          
    $('#search-form').on('submit', function(e) {
      
      var searched = $('#searchplease').val();
      e.preventDefault();
      console.log(searched);
      var searchurl = 'api.genius.com/search?q='+searched+'&access_token='+token;
        
      $.get(searchurl,
      function(data) {
        $('#content').append(
          data.hits
       event.preventDefault();
        );
        
      });
        
    });
      
      
      
      //pulling access token from address bar
/*      var url1=document.URL;
      var url2=url1.substr(url1.indexOf('=')+1,url1.length);
      console.log(url2);
      var token = url2.split('&')[0];
      console.log(token);
 */
   
  })


/*

$('#search-form').on('submit', function(e) {
       var baseurl ='https://api.genius.com/oauth/authorize?client_id=3513jSnBzZdQJJc-HjcmG-ab6I2O26c6v82uMbpHtCVx-Z9sbcgytAUGcuUPuA9x&redirect_uri=http://www.rjdcp3.com/&scope=me&state=2&response_type=token?callback=?';
      $.get(baseurl,
        function(data){
    //    resp.addHeader("Access-Control-Allow-Origin", "*");
          
          var newUrl=document.URL
          $('#content').append(newURL);
          
          
      
          var searched = $('#searchplease').val();
          e.preventDefault();
          console.log(searched);
      
      var searchurl = 'api.genius.com/search?q='+searched+'/#access_token='+;
      
      $.get(searchurl,
      function(data,jsonp) {
        $('#content').append(
  //        data.result+" "+data.url
       searched
  //     event.preventDefault();
        );
        
      });
        
      });
      
      
      
      //pulling access token from address bar
/*      var url1=document.URL;
      var url2=url1.substr(url1.indexOf('=')+1,url1.length);
      console.log(url2);
      var token = urls2.split('&')[0];
      console.log(token);
 */
/*  
  })
})
*/

// https://api.genius.com/oauth/authorize?client_id=3513jSnBzZdQJJc-HjcmG-ab6I2O26c6v82uMbpHtCVx-Z9sbcgytAUGcuUPuA9x&redirect_uri=https://itmd-361-raivenjdennisc.github.io/Project-3-Group/&scope=me&state=12&response_type=token

//https://itmd-361-raivenjdennisc.github.io/Project-3-Group/#access_token=naNsqLeRWgjgmRgtVnw-lriaHr4j4VldmMZYwMr5skyyhvt3uuXYlfeJQDd2i3RL2BPio1vBHa2rCmNGVn8hHw&state=12/'

/*
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    </IfModule>
    */
    
    // Use JSON.parse to parse JSON data. in success: function(data) { var result = JSON.parse(data); document...value = result.Code; } 