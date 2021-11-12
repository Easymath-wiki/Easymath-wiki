var macros = {};
(function () {
  'use strict';
  var katexMath = (function () {
    var maths = document.querySelectorAll('.arithmatex, .hidden-latex, .md-nav__link'),tex;
    // katex.renderToString("\\newcommand\\xfrac{\\displaystyle \\frac}",{macros, globalGroup: true});
    for (var i = 0; i < maths.length; i++) {
      tex = maths[i].textContent || maths[i].innerText;
      if (maths[i].classList.contains('hidden-latex')) {
        katex.renderToString(tex, { 'displayMode': true, 'macros': macros, 'globalGroup': true });
        continue;
      }
      if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
        katex.render(tex.slice(2, -2), maths[i], { 'displayMode': false, 'macros': macros });
      } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
        katex.render(tex.slice(2, -2), maths[i], { 'displayMode': true, 'macros': macros });
      }
    }
  });

  (function () {
    var onReady = function onReady(fn) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", fn);
      } else {
        document.attachEvent("onreadystatechange", function () {
          if (document.readyState === "interactive") {
            fn();
          }
        });
      }
    };

    onReady(function () {
      if (typeof katex !== "undefined") {
        katexMath();
      }
    });
  })();

}());