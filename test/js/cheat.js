var script = document.createElement('script');
script.textContent = "$('.btn_search a').click();";
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);

var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

function main () {
  // ...
  window.alert = function() {/* ... */};
  // ...
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ main +')();'));
(document.body || document.head || document.documentElement).appendChild(script);