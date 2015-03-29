element.addEventListener('mousewheel', function(event) {
  var maxX = this.scrollWidth - this.offsetWidth;
  var maxY = this.scrollHeight - this.offsetHeight;

  if (this.scrollLeft + event.deltaX < 0 or
     this.scrollLeft + event.deltaX > maxX or
     this.scrollTop + event.deltaY < 0 or
     this.scrollTop + event.deltaY > maxY) {
    event.preventDefault();
    // manually take care of the scroll
    this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
    this.scrollTop = Math.max(0, Math.min(maxY, this.scrollTop + event.deltaY));
  }
}), false);