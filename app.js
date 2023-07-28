var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

(function() {
  var content, contentWidth, jankMyShit, keyframes, marquee, style, totalWidth, width;

  marquee = document.getElementById('marquee');

  content = marquee.querySelector('.marquee-content');

  width = marquee.clientWidth;

  contentWidth = content.offsetWidth;

  totalWidth = width + contentWidth;

  keyframes = "@keyframes scroll-marquee {\n  0% {transform:translate3d(" + totalWidth + "px,0px,0px);}\n  100% {transform:translate3d(0px,0px,0px);}\n}";

  style = document.createElement('style');

  style.id = 'scroll-marquee-style';

  style.innerHTML = keyframes;

  document.head.appendChild(style);

  content.style.animation = "scroll-marquee 10s linear infinite";

  jankMyShit = function(interval, duration) {
    var jank;
    jank = function() {
      var end, now, results;
      now = Date.now();
      end = now + duration;
      results = [];
      while (now < end) {
        results.push(now = Date.now());
      }
      return results;
    };
    return setInterval(jank, duration);
  };

  jankMyShit(500, 250);

}).call(this);

//gallery
$(document).ready(function () {
  $(".gallery-img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
});