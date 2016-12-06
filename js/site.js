 $(document).ready(function() {
/*     newUrl=document.URL
     $('#content').append(newURL);
     var url=document.URL;
     var url2=url.substr(url.indexOf('=')+1,url.length);
     console.log(url2);
     var token = url2.split('&')[0];
     console.log(token);     
 */      
    /*Beginning of first search bar*/
    $('#search-form').on('submit', function(e) {
      
      var searched = $('#searchplease').val();
      e.preventDefault();
      console.log(searched);
      var searchurl = 'http://api.genius.com/search?q='+searched+'&access_token=I7MsEH2Ji96IhXL7Cw90PRZGj-90coK0WZ0LWJVVYiWi2Juv2aCFLbMSfpLGL5nd';
        
      $.get(searchurl,
      function(data) {
        
        var lyricspath=data.response.hits[0].result.path;
        var title=data.response.hits[0].result.title;
        var songid=data.response.hits[0].result.id;
        var lyricsp2=data.response.hits[0].result.url;
        
        $('#content').append(
        searched+" "+lyricsp2+ " "+songid
        );
        
      });
      e.preventDefault();
        

    });  
    /*End of first search bar*/
    
    /*Beginning of second search bar*/
    $('#search-form2').on('submit', function(ev) {
      var allLyrics = [];
      var searched2 = $('#searchlyrics').val();
      ev.preventDefault();
      console.log(searched2);
      var search3=searched2.replace(' ', '%20');
      console.log(search3);
      
      $.get('http://api.genius.com/search?q='+searched2.replace(' ', '%20')+'&access_token=I7MsEH2Ji96IhXL7Cw90PRZGj-90coK0WZ0LWJVVYiWi2Juv2aCFLbMSfpLGL5nd',
      function(data) { 
        var songid2=data.response.hits[0].result.id;
        $.get('http://api.genius.com/referents?song_id='+songid2+'&per_page=50&access_token=I7MsEH2Ji96IhXL7Cw90PRZGj-90coK0WZ0LWJVVYiWi2Juv2aCFLbMSfpLGL5nd', 
        function(data){ 
         var lyrics = data.response.referents; 
         lyrics.forEach(lyric => { 
          if (lyric.fragment[0] != "[") allLyrics.push(lyric.fragment); 
         }); 
         console.log('Lyrics added'); 
         console.log(allLyrics);
         $('#content').append(
         allLyrics.join('<br />')
         ).append('<br /> <br />');
       }); 
      }); 

    });
/*End of second search bar*/    
 })

    // Use JSON.parse to parse JSON data. in success: function(data) { var result = JSON.parse(data); document...value = result.Code; } 