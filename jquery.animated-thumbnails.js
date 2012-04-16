(function( $ ) {
  $.fn.animatedThumbnails = function(options) {
    var style = '<style type="text/css"> \
    .__jquery_at_hidden * {visibility: hidden;} \
    .__jquery_at_thumb {position: relative;z-index:0;} \
    .__jquery_at_thumb img{position: relative; z-index:0;} \
    .__jquery_at_thumb_controller {z-index:10; top: -18px; position: absolute; border-collapse: collapse; width: 100%; border:0; } \
    .__jquery_at_thumb_controller .__jquery_at_item {padding: 15px 0 10px 0; height: 3px;} \
    .__jquery_at_thumb_controller .__jquery_at_item .__jquery_at_bar { background: black; height: 100%; } \
    .__jquery_at_thumb_controller .__jquery_at_item.__jquery_at_selected .__jquery_at_bar { background: red;} \
    .__jquery_at_thumb_controller.__jquery_at_active .__jquery_at_item { height: 8px; padding-top:10px;} \
    </style>';
    style += '<!--[if IE]><style type="text/css"> \
    .__jquery_at_thumb_controller {background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)} \
    </style><![endif]-->';
    
    $(style).appendTo("head");

    var THUMB_INTERVAL = null;

    this.each(function(){
      var $this = $(this);
      $this.wrap('<div class="__jquery_at_thumb"/>');
      var container = $this.parent();
      
      var images = $this.attr('data-images').split(',');
      for (var i = 0; i < images.length; i++) {
        if (!images[i]) {         
          images.splice(i, 1);
          i--;
        }
      }
          
      var controller = $('<table class="__jquery_at_thumb_controller"><tr></tr></table>').appendTo(container);
      controller.data('images', images);
  
      for (var i = 0; i < images.length; i++) {
      	var dopClass = '';
      	if ( i == 0 ) {
      		dopClass = '__jquery_at_selected';
      	}
        var controllItem = $('<td class="__jquery_at_item '+dopClass+'"><div class="__jquery_at_bar"></div></td>');
        controller.find('tr').append(controllItem);
  
        controllItem.bind('mouseover', function(){
          var index = $(this).index();
          controller.addClass('__jquery_at_active');
          changeImage(index, true);
          controller.data('startShow', 0);
        }).bind('mouseout', function(){
          controller.data('startShow', 1);
          controller.removeClass('__jquery_at_active');
        });
  
      }
      controller.addClass('__jquery_at_hidden');
  
      if(options && options.hover_object)
        var hover_object = container.parents(options.hover_object);
      else
        var hover_object = container;

      var hover_class = (options && options.hover_class)?options.hover_class:'active';
      
      hover_object.hover(function(e){
        hover_object.addClass(hover_class);

        if(!controller.data('prelaoded'))
          preload(controller.data('images'));
        
        controller.removeClass('__jquery_at_hidden');
        controller.data('startShow', 1);
        
         THUMB_INTERVAL = setInterval(function(){
           //console.log('interval');
           changeImage();
        }, 1000);
  
      }, function(){
        hover_object.removeClass(hover_class);
        controller.addClass('__jquery_at_hidden');
        controller.data('startShow', 0);
        clearInterval(THUMB_INTERVAL);
        //controller.removeClass('__jquery_at_active');
      });
  
      function changeImage(index, force) {
        if (controller.data('startShow') == 0 && force != true) {
          return;
        }
        var activeIndex = controller.data('activeIndex') || 0;
        var images = controller.data('images');
      
        if ( index == null ) {
          index = activeIndex+1;
        }
      
        if ( index >= images.length ) {
          index = 0;
        }
      
        var src = images[index];
        container.find('img:first').attr('src', src);
        controller.find('.__jquery_at_item').removeClass('__jquery_at_selected');
        controller.find('.__jquery_at_item:eq('+index+')').addClass('__jquery_at_selected');
        controller.data('activeIndex', index);
      }
      
      function preload(arrayOfImages) {
        controller.data('prelaoded', true);
        $(arrayOfImages).each(function(){
          $('<img/>')[0].src = this;
        });
      }
    });
  };

})( jQuery );