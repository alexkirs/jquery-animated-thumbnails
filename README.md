# jQuery plugin Animated Thumbnails

## Demo
[Demo page: http://alexkirs.github.com/jquery-animated-thumbnails/](http://alexkirs.github.com/jquery-animated-thumbnails/)

## Quick start

```html
<img src="1/image.png" class="thumb" data-images="1/image.png,1/image2.png" />
<img src="2/image.png" class="thumb" data-images="2/image.png,2/image2.png" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="https://raw.github.com/alexkirs/jquery-animated-thumbnails/master/jquery.animated-thumbnails.js"></script>
<script>
$(document).ready(function(){
  $('.thumb').animatedThumbnails();
});
</script>
```

## Options

* hover_block - what parent element will handle :hover instead of image
* hover_class - which CSS class to add to :hover element

## Auhors

* Alex Kirs
* Sergey Korobov
