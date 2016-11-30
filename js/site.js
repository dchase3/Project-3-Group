$.noConflict();
(function($) {
  $(document).ready(function() {
    $('#search-form').on('submit', function(e) {
        alert('Clicked!');
        e.preventDefault();
        console.log('got submitted'); 
        var searched = $('#search-form').val();
        var baseurl = 'http://api.genius.com';
        headers = {'Authorization': 'Bearer ***'};
        var searchurl = 'http://api.genius.com' + '/search?q=';
        data = {q:searched};
        response=request.get(searchurl, data=data, headers=headers);
   })
   }
 )
})(jQuery);