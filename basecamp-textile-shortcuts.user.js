// ==UserScript==
// @name        Textile keyboard shortcuts for Basecamp Classic
// @description cmd + b and cmd + i for ** and __
// @match       https://*.basecamphq.com/*
// @include     https://*.basecamphq.com/*
// @version     0.1
// @author      Kris Handley
// @homepage    http://twitter.com/Kris_0_o
// ==/UserScript==
(function(){
  var keys = "";

  document.querySelectorAll('.body')[0].addEventListener('keydown', function(e){
    keys = keys + e.keyCode;
  }, false);

  document.querySelectorAll('.body')[0].addEventListener('keyup', function(e){
    var t = e.target,
        start = t.selectionStart,
        end = t.selectionEnd,
        cursor_pos = end > start ? 2 : 1,
        v = t.value,
        wrap = false,
        c = '';

    if (keys == '9166' || keys == '9185') {
      wrap = true;
    }

    if (keys == '9166') {
      c = '*';
    } else if (keys == '9185') {
      c = '_';
    }

    if (wrap){
      var substr = v.substring(start, end),
          len    = v.length;

      e.target.value = v.substring(0, start) + c + substr + c + v.substring(end, len);

      e.target.setSelectionRange(end + cursor_pos, end + cursor_pos);
    }

    keys = "";
  }, false);
})();
