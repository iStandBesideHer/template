// Custom code for managing her-page comments
var jq2 = jQuery.noConflict();
jq2(function($) {
  // Don't load when on the blog home page
  if (document.location.pathname == '/beside' || document.location.pathname == '/beside/') {return;}
  var translator = document.createElement('textarea');
  var shareUrl = encodeURIComponent(document.location.href);
  var shareTitle = encodeURIComponent('#iStandBesideHer - ' + $('.BlogItem-title').text());
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

  var openSocial = window.openSocial = function(url) {
    window.open(url,'_blank', "top=0,left=0,width=500,height=500");
  }

  // Scrape comment input, placing into original textarea
  var scrapeComment = function() {
    var comment = {
      msg: $('#her-input').val() || ' ',
      ways: []
    }
    var ways = besideWays.ways;
    for (var i = 0; i < ways.length; i++) {
      var way = ways[i];
      var checkbox = $('#way-check-' + way.name);
      if (checkbox.is(':checked')) {
        comment.ways.push({name: way.name});
      }
    }
    $('.comment-input').val(JSON.stringify(comment));
  }

  // Reformat a single comment
  var reformatComment = function($comment){
    var text = $comment.html();
    translator.innerHTML = text;
    text = translator.value;
    try {
      var comment = JSON.parse(text);
      var view = {
        msg: comment.msg,
        ways:[]
      }
      for (var i = 0; i < comment.ways.length; i++) {
        var wayName = comment.ways[i].name;
        var way = getBesideWay(wayName);
        if (way) {
          view.ways.push({icon:way.icon, alt:way.alt});
        }
      }
      var html = Mustache.render(commentTemplate, view).replace(/\n/g,'<br />');
      $comment.html(html);
    }
    catch (e) {return;}
  }

  // Reformat the comments section when it comes back from AJAX
  var reformatComments = function(a){

    // Format the comment input section
    $('#comments .comment-btn').html('Submit');
    $('#comment-header,#her-input,#beside-ways').remove();
    $('#comments .new-comment-area')
      .before('<h3 id="comment-header"><span>How do you stand beside her?</span></h3>');
    $('#comments .input').css({height:'auto'});
    $('#comments .comment-form:first').append(Mustache.render(besideWaysTemplate, besideWays));
    $('.comment-list').before(whoDoYouStandBesideTemplate);
    $('.comment-form').on('change', scrapeComment);
    $('.way-check').on('click', function(event) {
      var $t = $(this);
      var checkbox = $t.find('input[type=checkbox]');
      var isChecked = checkbox.is(':checked');
      checkbox.attr({checked: !isChecked});
    })

    // Add social icons and actions
    var wayActions = $('.way-action');

    // Fixup the comment preview action
    $('#comments .preview-comment').on('click',function(){
      var t = this;
      setTimeout(function(){
        reformatComment($('.comment-preview-wrapper p'));
      },1);
      setTimeout(function(){
        if ($(t).html() == 'Edit') {
          $('.comment-preview-wrapper').css({height:'auto'});
          $('.comment-preview-wrapper .timesince').text('Stands beside her');
        }
        if ($(t).html() == 'Preview') {
          $('.new-comment-area .input').css({height:'auto'});
        }
      }, 360);
    });

    // Fixup the comment submit action
    $('.new-comment-area .comment-btn').on('click',function(){
      var t = this;
      setTimeout(reformatComments, 360);
    });

    // Format each comment
    $('.reply-area-wrapper').html('')
    $('.comment-list .timesince').text('Stands beside her');
    var items = $('.comment-list .comment-body p');
    items.each(function(index) {
      reformatComment($(this));
    });

  }

  // Hide social icons (replaced later)
  $('.BlogItem-share').css({display:'none'});

  // Observe for actual comments being injected
  var commentHook = function() {
    var observer = new MutationObserver(reformatComments);
    var observeThis = $('.comments-content')[0];
    observer.observe(observeThis, {attributes:false, childList:true, characterData:true});
  }

  // Observe for comments-content (scaffolding) being injected
  var observer = new MutationObserver(commentHook);
  var observeThis = document.body;
  var observeThis = $('.squarespace-comments')[0];
  observer.observe(observeThis, {attributes:false, childList:true, characterData:true});

  // Templates
  var besideWays = {ways:[
    {
      name:'beside',
      alt:'By being with her',
      icon:'people-24.png',
      desc:'By being with her'
    },{
      name:'facebook',
      alt:'By posting on Facebook',
      icon:'facebook-24.png',
      desc:'By posting my support on Facebook',
      href:'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl + '&t=' + shareTitle
    },{
      name:'twitter',
      alt:'By posting on Twitter',
      icon:'twitter-bird-24.png',
      desc:'By posting my support on Twitter',
      href:'https://twitter.com/intent/tweet?url=' + shareUrl + '&text=' + shareTitle + ' - '
    },{
      name:'google',
      alt:'By posting on Google+',
      icon:'google-plus-24.png',
      desc:'By posting my support on Google+',
      href:'https://plus.google.com/share?url=' + shareUrl
    },{
      name:'email',
      alt:'By posting a link in email',
      icon:'email-24.png',
      desc:'By sharing a link in email',
      href:'mailto:%20?subject=' + shareTitle + '&body=' + shareUrl
    },{
      name:'donation',
      alt:'By donating in her behalf',
      icon:'heart-24.png',
      desc:'By donating in her behalf'
    }
  ],
  action: function() {
    var way = this;
    var html = '';
    if (way.href) {
      html = '<a onclick="openSocial(\'' + way.href + '\');return false" href="' + way.href + '" target="_blank">Post <img src="/assets/' + way.icon + '"></a>';
    }
    return html;
  }
  };

  var getBesideWay = function(wayName) {
    var ways = besideWays.ways;
    for (var i = 0; i < ways.length; i++){
      if (ways[i].name == wayName) {
        return ways[i];
      }
    }
    return null;
  };

  var styleTemplate = 
'<style>' +
'  .BlogItem-pagination, .comment-input, .header-controls, .squarespace-comment-buttons {' +
'    display:none !important;' +
'  }' +
'  #her-input {' +
'    resize:vertical;' +
'    height:auto;' +
'    border-bottom:1px dashed #ccc;' +
'  }' +
'  .beside-way > div {' +
'    float:left;' +
'  }' +
'  .beside-way input {' +
'    cursor:pointer;' +
'  }' +
'  .way-check {' +
'    padding:0px 20px;' +
'    cursor:pointer;' +
'  }' +
'  .way-icon {' +
'    padding:0px' +
'  }' +
'  .way-desc {' +
'    padding:0px 20px;' +
'  }' +
'  .beside-way .way-action {' +
'    float: right;' +
'    margin-right: 20px;' +
'    font-size: 14px;' +
'  }' +
'  .way-action img {' +
'    height: 24px;' +
'    padding: 2px;' +
'    background: #111;' +
'    border-radius: 16px;' +
'    margin-left: 5px;' +
'    margin-bottom: -7px;' +
'  }' +
'  .squarespace-comments {' +
'    margin-top:-32px;' +
'  }' +
'  #comment-header {' +
'    margin-top:0;' +
'    margin-bottom:5px;' +
'  }' +
'  .her-comment-icon {' +
'    margin:15px 20px -10px 0;' +
'  }' +
'  @media only screen and (max-width: 500px) {' +
'    .author {' +
'      display:inline !important;' +
'    }' +
'    .way-desc {' +
'      width:172px;' +
'    }' +
'  }' +
'</style>';
    $('body').append(styleTemplate);

  var besideWaysTemplate = 
'<textarea id="her-input" placeholder="A few words about standing beside Her..."></textarea>' +
'<div id="beside-ways">' +
'{{#ways}}' +
'  <div id="way-{{name}}" class="beside-way" data-way-type="{{name}}">' +
'    <div class="way-check">' +
'      <input id="way-check-{{name}}" data-way-type="{{name}}" type="checkbox"></input>' +
'    </div>' +
'    <div class="way-icon">' +
'      <img src="/assets/{{icon}}">' +
'    </div>' +
'    <div class="way-desc">' +
'      {{{desc}}}' +
'    </div>' +
'    <div class="way-action">' +
'      {{{action}}}' +
'    </div>' +
'  </div>' +
'  <div style="height:1px; clear:both;">&nbsp;</div>' +
'{{/ways}}' +
'</div>';

  var whoDoYouStandBesideTemplate = 
'<div class="sqs-block-html" style="text-align:right;">' +
'  <p><a href="/i-stand-beside"><i>Who do you stand beside?</i></a></p>' +
'</div>';

  var commentTemplate = 
'{{msg}}<br/>' +
'{{#ways}}' +
'  <img class="her-comment-icon" src="/assets/{{icon}}" title="{{alt}}" alt="{{alt}}">' +
'{{/ways}}';

});
