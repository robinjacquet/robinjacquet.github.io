/* ====> TEXTE DE PRESENTATION<==== */

var texts = ["Hello","I am Robin", "A Legal & Compliance Guy", "Looking for new opportunities"];
var count = 0;
function changeText() {
  $("#textederoulant").text(texts[count]);
  count < 4 ? count++ : count = 0;
}
setInterval(changeText, 1500);
