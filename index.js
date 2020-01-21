$(document).ready(function() {
  var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
  $.getJSON(url,function(data){


    var quotes = data.hits; //it contains 20 hits
    var currentQuote = '';


      $('.read').unbind('click').on('click',function(){
          //first create a random number to show a random new (bwetneen 1- lengh)
        var ranNum = Math.floor(Math.random() * quotes.length);
        //select the random new
        currentQuote = quotes[ranNum];
        console.log(currentQuote);

        //put the title and author into the html
        $(".quoteBody").hide();
        $(".quoteBodyLink").html(currentQuote.title);
        $(".quoteBodyLink").attr('href', currentQuote.url);
        $(".quoteAuthor").html(currentQuote.author);

        //click the twitt button and open a new tap with the new
        $(".tweetQuote").attr('href','https://twitter.com/intent/tweet?text= '
                            + currentQuote.title + ' By- '+ currentQuote.author)
                            .attr('target','_blank')
                            .attr('disabled', false);

        $('.read').html('Showme one more');

      });


  });
});
