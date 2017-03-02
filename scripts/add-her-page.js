// Custom code for posting a new /i-stand-beside page
var jq2 = jQuery.noConflict();
jq2(function($) {

  var f = $('.Main-content form');
  var scrapeForm = function() {
    fHerName = f.find('input[type=text]');
    fPagePW = f.find('input[type=password]');
    var form = {
      herName: fHerName.val(),
      pagePW: fPagePW.val()
    }
    fHerName.css({borderColor:(form.herName ? '#ccc' : 'red')});
    fPagePW.css({borderColor:(form.pagePW ? '#ccc' : 'red')});
    console.log(form);
    if (!form.herName) {
      fHerName.focus();
      return null;
    }
    if (!form.pagePW) {
      fPagePW.focus();
      return null;
    }
    return form;
  }

  f.attr('onsubmit',null).submit(function(){
    console.log('onSubmit');
    var fields = scrapeForm();
    if (fields) {
      $.ajax({
        url: 'https://c784rk69oh.execute-api.us-east-1.amazonaws.com/prod/her-page',
        type:"POST",
        data:fields,
        contentType:"application/json; charset=utf-8",
        // dataType:"json",
        success: function(d){
          alert("SUCCESS: " + JSON.stringify(d));
        },
        fail: function(e) {
          alert("An error occurred, please try again later.");
        }
      });
    }
    return false;
  });

});
