const scroller = document.querySelectorAll("hero1");
const autoScroller = () => {
  hero1.scrollLeft += hero1.width;
};
setInterval(autoScroller, 2000);
