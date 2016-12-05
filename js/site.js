 $(document).ready(function() {
/*     newUrl=document.URL
     $('#content').append(newURL);
     var url=document.URL;
     var url2=url.substr(url.indexOf('=')+1,url.length);
     console.log(url2);
     var token = url2.split('&')[0];
     console.log(token);     
 */         
    $('#search-form').on('submit', function(e) {
      
      var searched = $('#searchplease').val();
      e.preventDefault();
      console.log(searched);
      var searchurl = 'http://api.genius.com/search?q='+searched+'&access_token=I7MsEH2Ji96IhXL7Cw90PRZGj-90coK0WZ0LWJVVYiWi2Juv2aCFLbMSfpLGL5nd';
        
      $.get(searchurl,
      function(data) {
        $('#content').append(
        searched+" "+data.hits
        );
        
      });
      e.preventDefault();
        
    });  
 })

    // Use JSON.parse to parse JSON data. in success: function(data) { var result = JSON.parse(data); document...value = result.Code; } 