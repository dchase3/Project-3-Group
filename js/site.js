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
        var artistname=data.response.hits[0].result.primary_artist.name;
        var artistnl=data.response.hits[0].result.primary_artist.url;
        
        var songs = [10];
              
        
         
        
        //$('#content1').append(
        for(var i=0;i<=9;i++ )
        {
          var songname=data.response.hits[i].result.title;
          songs[i] = songname;
          console.log(songname);
        }
       
        
        $('#content1').append(
        'Top 10 songs by ' + artistname + ':<br />' + songs[0] + ', '+ songs[1] + ', '+ songs[2] + ', '+ songs[3] + ', '+ songs[4] + ', '+ songs[5] + ', '+ songs[6] + ', '+ songs[7] + ', '+ songs[8] + ', '+ songs[9]
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
        
      var lyricspath=data.response.hits[0].result.path;
      var title=data.response.hits[0].result.title;
      var songid=data.response.hits[0].result.id;
      var lyricsp2=data.response.hits[0].result.url;
      var artistname=data.response.hits[0].result.primary_artist.name;
      var artistnl=data.response.hits[0].result.primary_artist.url;
        
      var artist = [5];
        
      for(var i=0;i<=9;i++ )
      {
        var artistname=data.response.hits[i].result.primary_artist.name;
        artist[i] = artistname;
        console.log(artistname);
      }
        
      $('#content2').append(
      'Top 5 artist matching ' + searched2 + ':<br />' + artist[0] + ', '+ artist[1] + ', '+ artist[2] + ', '+ artist[3] + ', '+ artist[4]
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
         $('#content3').prepend(
         allLyrics.join('<br />')
         ).append('<br /> <br />');
       }); 
      }); 

    });
/*End of third search bar*/    
 })

    // Use JSON.parse to parse JSON data. in success: function(data) { var result = JSON.parse(data); document...value = result.Code; } 