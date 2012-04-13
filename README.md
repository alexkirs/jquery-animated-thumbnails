# jQuery plugin Animated Thumbnails

## Demo
[Demo page: example.html]

## Quick start

  <img src="1/image.png" class="thumb" data-images="1/image.png,1/image2.png" />
  <img src="2/image.png" class="thumb" data-images="2/image.png,2/image2.png" />

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script src="jquery.animated-thumbnails.js"></script>
  <script>
  $(document).ready(function(){
    $('.thumb').animatedThumbnails();
  });
  </script>

## Options

* hover_block
* hover_class