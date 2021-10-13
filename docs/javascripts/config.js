window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex|hidden-latex|md-nav__link"
  }
};

document$.subscribe(() => {
  MathJax.typesetPromise()
})
document.querySelector(".md-content").insertAdjacentHTML('beforeEnd','<div id="disqus_thread"></div>');
(function () { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = 'https://easymath-wiki.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();