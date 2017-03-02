setTimeout(function(){
  var f = document.querySelector('.Main-content form');
  f.onsubmit = function() {
    console.log('caught');
    return false;
  }
}, 1);
