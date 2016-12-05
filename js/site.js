//$.noConflict();
//(function($) {
//  $(document).ready(function() {
 $(document).ready(function() {
    $('#search-form').on('submit', function(e) {
       var baseurl ='https://api.genius.com/oauth/authorize?client_id=3513jSnBzZdQJJc-HjcmG-ab6I2O26c6v82uMbpHtCVx-Z9sbcgytAUGcuUPuA9x&redirect_uri=http://www.rjdcp3.com/&scope=me&state=2&response_type=token';
      $.get(baseurl,
      function(data,json) {
        
      });
       var searched = $('#searchplease').val();
       e.preventDefault();
       console.log(searched);
  //   headers = {'Authorization': 'Bearer naNsqLeRWgjgmRgtVnw-lriaHr4j4VldmMZYwMr5skyyhvt3uuXYlfeJQDd2i3RL2BPio1vBHa2rCmNGVn8hHw'};
       var searchurl = baseurl + 'search?q='+searched;

 //   $.get(baseurl,
 //     function(data,json) {
  //      var para=QueryString;
 //       $('#content').append(
       //   data.result+" "+data.url
  //     searched
 //       );
  //    });
 //  event.preventDefault();
   
  })
})


// https://api.genius.com/oauth/authorize?client_id=3513jSnBzZdQJJc-HjcmG-ab6I2O26c6v82uMbpHtCVx-Z9sbcgytAUGcuUPuA9x&redirect_uri=https://itmd-361-raivenjdennisc.github.io/Project-3-Group/&scope=me&state=12&response_type=token

//https://itmd-361-raivenjdennisc.github.io/Project-3-Group/#access_token=naNsqLeRWgjgmRgtVnw-lriaHr4j4VldmMZYwMr5skyyhvt3uuXYlfeJQDd2i3RL2BPio1vBHa2rCmNGVn8hHw&state=12/'

/*
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    </IfModule>
    */