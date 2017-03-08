// Custom code for managing edits to her page
var jq2 = jQuery.noConflict();
var isAdd = null;
var cropper = null;
var origFormFields = null;
var cropper = null;
var fromSS = null;
var newPagePW = 'Strength&Beauty';
var fromUrl = {   // Items scraped from the page URL
  id: null, // post id
  page: null, // slug
  pagePW: null // hashed PW
};
jq2(function($) {

  var hasImageLoaded = false;
  var hasImageChanged = false;

  var $form = $('.Main-content form');
  var hashPW = function(pagePW) {return Base64.encode(pagePW.toLowerCase());};
  var isDefaultPW = function() {return fromUrl.pagePW == hashPW(newPagePW)};
  isAdd = $('.Main-content form input').length < 5;

  // Scrape the form, returning a structure of form fields
  // Form structure:
  // {
  //   fields: {
  //     herName: jQuery selector for form field
  //     ...
  //   },
  //   data: {
  //     ...
  //   }
  // }
  var scrapeForm = function() {
    var form = {};
    var inputs = $('.Main-content form input');
    var fields = form.fields = origFormFields;
    if (isAdd) {
      if (!fields) {
        fields = origFormFields = form.fields = {
          herName: $(inputs[0]),
          submit: $(inputs[1])
        }
      }
      form.data = {
        herName: fields.herName.val(),
        pagePW: hashPW(newPagePW),
      }
    }
    else {
      if (!fields) {
        fields = origFormFields = form.fields = {
          herName: $(inputs[0]),
          herPicture: $(inputs[1]),
          herDoing: $form.find('textarea'),
          whenMM: $(inputs[2]),
          whenDD: $(inputs[3]),
          whenYY: $(inputs[4]),
          pagePW: $(inputs[5]),
          submit: $(inputs[6])
        }
      }
      form.data = {
        herName: fields.herName.val(),
        herPicture: hasImageChanged ? scrapePicture() : '',
        herDoing: fields.herDoing.val(),
        whenMM: fields.whenMM.val(),
        whenDD: fields.whenDD.val(),
        whenYY: fields.whenYY.val(),
        pagePW: hashPW(fields.pagePW.val()),
      }

      // Place pw if not changed
      if (!form.data.pagePW) {
        form.data.pagePW = fromUrl.pagePW;
      }
    }
    return form;
  }

  // Fill the form with backend data
  var fillForm = function(form) {
    var fields = form.fields;
    var cc = fromSS.customContent;
    fields.herName.val(cc.herName);
    fields.herDoing.val(cc.herDoing);
    fields.whenMM.val(cc.whenMM);
    fields.whenDD.val(cc.whenDD);
    fields.whenYY.val(cc.whenYY);

    // Building the cropper image source is tricky due to CORS issues.
    if (cc.imageId) {
      var imageSrc;
      var loc = document.location;
      if (loc.host == 'localhost:9000') {
        imageSrc = fromSS.coverImageUrl.replace(/^.*squarespace.com/, loc.protocol + '//' + loc.host);
      }
      else {
        imageSrc = 'https://istandbesideher.org/item/' + cc.imageId + '?format=original'
      }
      cropper.cropit('imageSrc', imageSrc);
    }
  }

  // Validate a new form post, placing user into invalid fields
  var validateForm = function(form) {
    var fields = form.fields;
    var data = form.data;
    var firstInvalidField = null;

    // Common add/update fields
    fields.herName.css({borderColor:(data.herName ? '#ccc' : 'red')});
    if (!data.herName) {
      firstInvalidField = firstInvalidField || fields.herName;
    }

    // Specific add/update fields
    if (isAdd) {

    }
    else {
      // Update validation

      // pagePW is required if it's default
      var pwNeeded = isDefaultPW() && data.pagePW == hashPW(newPagePW);
      fields.pagePW.css({borderColor:(pwNeeded ? 'red' : '#ccc')});
      if (pwNeeded) {
        firstInvalidField = firstInvalidField || fields.pagePW;
      }

    }

    // Set focus to first invalid field
    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    return firstInvalidField == null;
  }

  // Load data into form from backend
  var loadForm = function(id, pwHash) {
    var url = 'https://c784rk69oh.execute-api.us-east-1.amazonaws.com/prod/her-page';
    if (!isAdd) {
      url += '/' + fromUrl.id + '?pagePW=' + encodeURIComponent(fromUrl.pagePW);
    }

    // Send 
    $.ajax({
      url: url,
      dataType: 'json',
      jsonp: false,
      success: function(d){
        fromSS = d;
        var form = scrapeForm();
        fillForm(form);
        // form.fields.herDoing.focus();
      },
      error: function(e) {
        console.error(e);
        alert("An error occurred, please try again later.");
      }
    });
  };

  // Save the form to the backend
  var saveForm = function(form) {
    var fields = form.fields;
    var data = form.data;

    var url = 'https://c784rk69oh.execute-api.us-east-1.amazonaws.com/prod/her-page';
    if (!isAdd) {
      url += '/' + fromUrl.id + '?pagePW=' + encodeURIComponent(fromUrl.pagePW);
    }

    // Send 
    $.ajax({
      url: url,
      type: isAdd ? "POST" : "PUT",
      data: JSON.stringify(data),
      contentType:"application/json; charset=utf-8",
      success: function(d){
        // Take them to their new page
        window.location.href = d;
      },
      error: function(e) {
        alert("An error occurred, please try again later.");
      }
    });
  };

  $form.prop('onsubmit',null).submit(function(){
    try {
      var form = scrapeForm();
      if (validateForm(form)) {
        var submitLabel = isAdd ? 'Creating page...' : 'Updating page...';
        form.fields.submit.prop('value',submitLabel).prop("disabled",true);
        saveForm(form);
      }
    }
    catch(e) {
      console.log("Problem saving form", e);
      alert("Problem saving form. Try again later.");
    }
    return false;
  });

  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

  var parseUrlParams = function() {
    var query = {};
    var qstr = window.location.search.substr(1);
    var parts = qstr.split('&');
    for (var i = 0; i < parts.length; i++) {
      var nv = parts[i].split('=');
      query[decodeURIComponent(nv[0])] = decodeURIComponent(nv[1] || '');
    }
    return query;
  };

  // Page load processing
  var fields = scrapeForm().fields;
  fields.herName.css({fontSize:24,fontWeight:400});
  if (isAdd) {

  }
  else {

    // Scrape URL params
    var urlParams = parseUrlParams();
    var urlId = urlParams.page;
    var slugParts = urlId.split('-');
    fromUrl.id = slugParts[slugParts.length - 1];
    fromUrl.page = urlId;
    fromUrl.pagePW = urlParams.hash;

    // Fix up some fields
    fields.herDoing.css({fontSize:20,fontWeight:400});
    fields.pagePW.css({width:260});
    var pwHelp = isDefaultPW()
      ? 'Enter a password to use for updating her page'
      : '(optional) Change the password used for updating her page';
    $('.password .description').text(pwHelp);

    // Load data from the backend
    loadForm();

    // Inject the image editor
    fields.herPicture.parent().html(
'<div id="image-cropper">' +
'' +
'  <div class="cropit-preview"></div>' +
'  <div class="picture-controls">' +
'' +
'    <span class="icon icon-rotate-left rotate-ccw-btn"></span>' +
'    <span class="icon icon-rotate-right rotate-cw-btn"></span>' +
'' +
'    <span class="icon icon-image small-image"></span>' +
'    <input type="range" class="cropit-image-zoom-input custom">' +
'    <span class="icon icon-image large-image"></span>' +
'' +
'    <input type="file" class="cropit-image-input" />' +
'    <span class="select-image-btn">Select a picture</span>' +
'  </div>' +
'' +
'</div>' 
    );

    cropper = $('#image-cropper')
    cropper.cropit({
      minZoom: 'cover',
      maxZoom: 1.5,
      exportZoom: 2,
      freeMove: false,
      imageBackground: false,
      onFileLoaderError:function(){
        console.log(Date.now(), 'File Loader Error');
      },
      onImageError:function(e){
        console.log(Date.now(), 'Image Error');
        alert(e.message);
      },
      onImageLoaded:function(){
        hasImageLoaded = true;
      },
      onOffsetChange:function(){
        hasImageChanged = hasImageLoaded;
      }
    });

    cropper.cropit('previewSize', {width:320, height:240});
    cropper.find('.cropit-preview-image-container')
      .append('<div style="margin-top:80px">Drop a picture of her here</div>')

    $('.select-image-btn').click(function() {
      hasImageChanged = true;
      $('.cropit-image-input').click();
    });
    $('.rotate-cw-btn').click(function() {
      hasImageChanged = true;
      $('#image-cropper').cropit('rotateCW');
    });
    $('.rotate-ccw-btn').click(function() {
      hasImageChanged = true;
      $('#image-cropper').cropit('rotateCCW');
    });

  }

  var scrapePicture = function() {
    var imageData = cropper.cropit('export', {
        type: 'image/png'
    });
    return imageData.substr(22);
  }

  // Inject styles
  var editPageStyle = 
'<style>' +
'  .cropit-preview {' +
'    border: 1px solid #ccc;' +
'  }' +
'  .cropit-preview-image {' +
'    cursor: move;' +
'  }' +
'  .cropit-preview-image-container {' +
'    text-align: center;' +
'  }' +
'  input.cropit-image-input {' +
'    visibility: hidden;' +
'    width: 20px;' +
'  }' +
'  .picture-controls {' +
'    cursor: pointer;' +
'    margin: 15px 0 40px;' +
'  }' +
'  .picture-controls input {' +
'    cursor: pointer;' +
'  }' +
'</style>';
  $('body').append(editPageStyle);

});
