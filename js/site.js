$.noConflict();
(function($) {
  $(document).ready(function() {
    $('#search-form').on('submit', function(e) {
        alert('Clicked!');
        e.preventDefault();
        console.log('got submitted'); 
        var searched = $('#search-form').val();
        var baseurl ='https://api.genius.com/&access_token/naNsqLeRWgjgmRgtVnw-lriaHr4j4VldmMZYwMr5skyyhvt3uuXYlfeJQDd2i3RL2BPio1vBHa2rCmNGVn8hHw/';
  //      headers = {'Authorization': 'Bearer naNsqLeRWgjgmRgtVnw-lriaHr4j4VldmMZYwMr5skyyhvt3uuXYlfeJQDd2i3RL2BPio1vBHa2rCmNGVn8hHw'};
        var searchurl = baseurl + 'search?q='+searched;
   //     data = {q:searched};
    //    response=request.get(searchurl, data=data, headers=headers);
    $.get(searchurl).done(
      function(data,json) {
        
        
    });
   }
  );
  }
})(jQuery);
