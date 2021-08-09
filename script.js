let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  prevScrollpos > currentScrollPos
    ? (document.getElementById("navbar").style.top = "0")
    : (document.getElementById("navbar").style.top = "-82px");
  prevScrollpos = currentScrollPos;
};
