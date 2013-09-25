
jQuery( document ).ready( function($){
  $( "#from-service" ).imgCombobox();
  $( "#to-service" ).imgCombobox();

  $('.combobox').on( "success", function() { 
    console.log(  'success event by #' + $input.attr("id"),'::',$input.attr("value") ); } );
  $( "#from-service" ).on( "success", function(){
    $( "#popup-helper-1" ).hide();
    $( "button", $( this ).parent() ).attr( "disabled", "disabled" ); 
    $ ("button", $( "#to-service" ).parent() ).removeAttr( "disabled" );
    $( "#layout-header-block-1" ).show();
  });

  $( "#to-service" ).on( "success", function(){
    $( "button", $( this ).parent() ).attr( "disabled", "disabled" ); 
    
    $( "button", "#layout-header-block-2" ).removeAttr( "disabled" );
    $( "#helper" ).show();
  });
  //продолжить нажатие
  $( "button", "#layout-header-block-2" ).click( function() {
    //скрываем саму себя
    $( this ).parent().hide();
    //скрываем подсказку
    $( "#helper" ).hide();
    //показываем breadcrumb
    $( '#breadcrumb').show();
    //показываем следуюзий этап
    $( '.order-layout-1').show();
  } );

//продолжить нажатие
  $( "#step-2" ).click( function() {
    //показываем breadcrumb
    $( '#breadcrumb').show();
    //скрываем выбор сервисов
    $( '.order-layout-header' ).hide();
    //скрываем следуюзий этап
    $( '.order-layout-1').hide();
    //показываем следуюзий этап
    $( '.order-layout-3').show();
    //$( '.order-layout-2-1').hide();
    // $( '.news-block').hide();
    // $( '.help-how-block').hide();
  } );
//симуляция нажатия
//$( "#step-2" ).click();  
});

(function( $ ){
  jQuery.fn.extend( { 
    imgCombobox: function(){ 
      $this = jQuery( this );
      console.log( $this.attr( "class" ) );
      var itemClick = function(){
        var $this = $( this ),
            $but = $( $this.closest("ul").data("parent") );
        if ( !$but.length ) return false;
        
        var rmClasses = $but.attr("class");
        if ( rmClasses ) {
          var rmArr = rmClasses.match(/item([0-9])*/g);
          if ( rmArr && rmArr.length ) {  
            $but.removeClass( rmArr.join( " " ) );
          }
          
        }
        
        $but.addClass( $this.closest("li").attr( "class" ) );
        $but.html( "<span></span>" + $this.text() );

        var hInput = $but.data( "hiddeninput" );
        if ( hInput && ( $input = $( hInput ) ).length ) {
          $input.attr( "value", $this.data( "val" ) ? $this.data( "val" ) : "empty" );
        }
        
        $but.parent().removeClass( "open" );
        $but.trigger("success");
        return false;
      }

      jQuery( "[role='menu'] .item > a", $this.parent() ).click( itemClick );
    }
  });
})(jQuery);

