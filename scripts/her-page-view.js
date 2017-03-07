// Custom code for viewing the /beside/.. pages
var jq2 = jQuery.noConflict();
jq2(function($) {
  // Don't load when on the blog home page
  if (document.location.pathname == '/beside' || document.location.pathname == '/beside/') {return;}

  // Scrape URL params
  var slugParts = window.location.href.split('-');
  var urlParts = window.location.href.split('/');
  var pageId = slugParts[slugParts.length - 1];
  var urlId = urlParts[urlParts.length - 1];

  var hashPW = function(pagePW) {return Base64.encode(pagePW.toLowerCase());};
  var verifyPW = function() {
    var form = scrapePWForm();
    if (validatePWForm(form)) {
      var pagePW = form.data.pagePW;
      form.fields.submit.prop('value','Verifying password...').prop("disabled",true);
      var url = 'https://c784rk69oh.execute-api.us-east-1.amazonaws.com/prod/her-page' +
        '/' + pageId + '?pagePW=' + encodeURIComponent(pagePW);
      $.ajax({
        url: url,
        dataType: 'json',
        jsonp: false,
        success: function(d){
          var cc = d.customContent;
          if (pagePW != cc.pagePW) {
            alert('Incorrect password. Try again.');
            form.fields.submit.prop('value','Next >').prop("disabled",false);
            form.fields.pagePW.val('').focus();
          }
          var editUrl = '/her-page' +
            '?page=' + encodeURIComponent(urlId) +
            '&hash=' + encodeURIComponent(pagePW);
          window.location.href = editUrl;
        },
        error: function(e) {
          alert('Incorrect password. Try again.');
          form.fields.submit.prop('value','Next >').prop("disabled",false);
          form.fields.pagePW.val('').focus();
        }
      });
    }
    return false;
  }

  // Scrape the password form, returning a structure of form fields
  // Form structure:
  // {
  //   fields: {
  //     ...
  //   },
  //   data: {
  //     ...
  //   }
  // }
  var scrapePWForm = function() {
    var form = {};
    var inputs = $('#edit-her-page form input');
    var fields;
    var fields = form.fields = {
      pagePW: $(inputs[0]),
      cancel: $(inputs[1]),
      submit: $(inputs[2])
    }
    form.data = {
      pagePW: hashPW(fields.pagePW.val())
    }
    return form;
  }

  // Validate the password form
  var validatePWForm = function(form) {
    var fields = form.fields;
    var data = form.data;
    var firstInvalidField = null;
    fields.pagePW.css({borderColor:(data.pagePW ? '#ccc' : 'red')});
    if (!data.pagePW) {
      firstInvalidField = firstInvalidField || fields.pagePW;
    }
    if (firstInvalidField) {
      firstInvalidField.focus();
    }
    return firstInvalidField == null;
  }

  // Open the password entry form for editing the her page
  var openPWForm = function() {
    $('#edit-her-page')
      .off('click', openPWForm)
      .css({
        float:'none',
        height:'auto',
        width:'auto',
        margin:'0',
        backgroundImage:'none',
        opacity:1,
        cursor:'auto'
      })
      .html(inputForm)
    $('#pw-cnx')
      .css({marginRight: 20})
      .on('click', closePWForm);
    $('#pw-btn')
      .on('click', verifyPW);
    $('#pw-field').focus();
  }

  // Fix up some CSS
  var closePWForm = function() {
    $('#edit-her-page')
      .css({
        color: '#000',
        float:'right',
        height:44,
        width:44,
        margin:'-44px 0',
        backgroundImage:'url(/assets/pencil-square-o.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px 10px',
        opacity:.4,
        cursor:'pointer'
      })
      .html('')
      .on('click', openPWForm);
    return false;
  }
  closePWForm();

  var inputForm =
'<div class="form-wrapper" id=""> ' +
'  <div class="form-inner-wrapper" id="">' +
'    <form autocomplete="on" id="">' +
'      <div class="field-list clear" id="">' +
'        <div id="password-" class="form-item field password required">' +
'          <label class="title" for="pw-field" id="">Page Password <span class="required">*</span></label>' +
'          <div class="description" id="">' +
'            Enter the password used when creating this page. ' +
'            The word that comes to mind when thinking of Her.' +
'          </div>' +
'          <input class="field-element" type="password" id="pw-field">' +
'        </div>' +
'      </div>' +
'      <div class="form-button-wrapper form-button-wrapper--align-right" id="">' +
'        <input id="pw-cnx" class="button sqs-system-button sqs-editable-button" type="reset" value="Cancel">' +
'        <input id="pw-btn" class="button sqs-system-button sqs-editable-button" type="submit" value="Next >">' +
'      </div>' +
'    </form>' +
'  </div>' +
'</div>' +
'<style>' +
'  #pw-cnx,#pw-btn {' +
'    font-size: 14px;' +
'    line-height: 1em;' +
'  }' +
'  #pw-cnx:focus,#pw-btn:focus {' +
'    opacity:.8;' +
'  }' +
'</style>';

var viewPageStyle = 
'<style>' +
'  #block-her-photo img {' +
'    margin-left:auto;' +
'    margin-right:auto;' +
'  }' +
'</style>';
$('body').append(viewPageStyle);

  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

});
