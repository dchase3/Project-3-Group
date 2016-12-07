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
        
        var artistname=data.response.hits[0].result.primary_artist.name;        
        var songs = [10];
             
        for(var i=0;i<=9;i++ )
        {
          var songname=data.response.hits[i].result.title;
          songs[i] = songname;
  //        console.log(songname);
        }
        
        var songlist =' ';
        songs.forEach(function(song) {
        songlist += '<li>' + song + '</li>\n'
        }
        );  
  //      console.log(songlist);
       
        $('#ten-songs').empty();
        $('#ten-songs').append(
        'Top 10 songs by ' + artistname + ':\n' + songlist
        );
        
        //);
        
      });
      e.preventDefault();

    });  
    /*End of first search bar*/
    //Beginning of second search bar
    $('#search-form2').on('submit', function(eve) {
      
    var searched2 = $('#searchartist').val();
    eve.preventDefault();
    console.log(searched2);
    var searchurl = 'http://api.genius.com/search?q='+searched2+'&access_token=I7MsEH2Ji96IhXL7Cw90PRZGj-90coK0WZ0LWJVVYiWi2Juv2aCFLbMSfpLGL5nd';
        
    $.get(searchurl,
    function(data) {

    
      var artists = [5]; 
      for(var i=0;i<=4;i++ )
      {
        var artistname=data.response.hits[i].result.primary_artist.name;
        artists[i] = artistname;
        console.log(artistname);
      }
      
      var artistlist = ' ';
      artists.forEach(function(artist) {
      artistlist += '<li>' + artist + '</li>\n'
      }
      ); 
      console.log(artistlist);
      
      $('#5-artists').empty();
      $('#5-artists').append(
      'Top 5 artist matching ' + searched2 + ':\n' + artistlist
      );
        
    });
    eve.preventDefault();
        

    });  
    
    //End of second search bar
    /*Beginning of third search bar*/
    $('#search-form3').on('submit', function(ev) {
      var allLyrics = [];
      var searched3 = $('#searchlyrics').val();
      ev.preventDefault();
      console.log(searched3);
      var search3=searched3.replace(' ', '%20');
      console.log(search3);
      
      $.get('http://api.genius.com/search?q='+searched3.replace(' ', '%20')+'&access_token=I7MsEH2Ji96IhXL7Cw90PRZGj-90coK0WZ0LWJVVYiWi2Juv2aCFLbMSfpLGL5nd',
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
         $('#lyrics').empty();
         $('#lyrics').prepend(
         allLyrics.join('<br />')
         ).append('<br /> <br />');
       }); 
      }); 

    });
/*End of third search bar*/    
 })

    // Use JSON.parse to parse JSON data. in success: function(data) { var result = JSON.parse(data); document...value = result.Code; } 