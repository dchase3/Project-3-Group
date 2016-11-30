$.noConflict();
(function($) {
  $(document).ready(
    function() {
      $('search-form').on('submit', function(e) {
        e.preventDefault();
        $('.error').text('');
       // console.log('got submitted'); 
        var searched = $('#search-form').val();
        var baseurl = 'http://api.genius.com';
        headers = {'Authorization': 'Bearer naNsqLeRWgjgmRgtVnw-lriaHr4j4VldmMZYwMr5skyyhvt3uuXYlfeJQDd2i3RL2BPio1vBHa2rCmNGVn8hHw'};
        var searchurl = 'http://api.genius.com' + '/search?q=';
        data = {q:searched};
        response=request.get(searchurl, data=data, headers=headers);
     })
    }
  )
 })(jQuery);