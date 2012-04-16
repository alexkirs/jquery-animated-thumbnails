<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
  <style>
    body {
      background-color: #eee;
    }
    img {
      border: 0px;
    }
    .video_block {
      float: left;
      background-color: #eee;
      margin: 0 10px 20px 0;
      height: 370px;
      border: 0;
      /*border:1px solid white;*/
    }

    .video_block .short {
      display: block;
    }
    .video_block.hover .short {
      display: none;
    }
    .video_block .long {
      display: none;
      position: absolute;
      z-index: 2;
      background-color: #eee;
    }
    .video_block.hover .long {
      display: block;
    }

    .video_block .options {
      background-color: black;
      color: white;
    }

    .video_block .options .duration {
      float: right;
    }

  </style>
</head>
<body>
<h1>jQuery plugin Animated Thumbnails DEMO</h1>
<br/>
<?for($i = 0; $i < 18; $i++):?>
		<div class="video_block" style="width: 308px;">
			<a href="#"><img src="i/1.png" class="main thumb" data-images="<?php $n=rand(1,6);for($k=1; $k<=$n;$k++):?>i/<?=$k?>.png,<?php endfor;?>" /></a>
			<div class="options">
				<span class="rating">12343 Views</span>
				<span class="duration">33:12</span>
			</div>
			<div class="short">
				<a href="#">Some best description! <span style="color:red;font-wight:bold;"><?=$n?> images</span></a>
				<div class="">
					description description description description description description description description 
					description description description description description description description description 
				</div>
			</div>
			<div class="long">
				<a href="#">Some best porn! <span style="color:red;font-wight:bold;"><?=$n?> images</span></a>
				<div class="">
					Tags: tag1, tag2, tag3
				</div>
			</div>
		</div>
<?endfor?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.animated-thumbnails.js"></script>
<script>
$(document).ready(function(){
  $('.thumb').animatedThumbnails({'hover_object':'.video_block', 'hover_class':'hover'});
});
</script>
</body>
</html>