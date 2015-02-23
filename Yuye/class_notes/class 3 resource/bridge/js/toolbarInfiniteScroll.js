( function( $ ) {
    $.fn.scrollLoad = function( options ) {
        var count_examples = 1;
        var defaults = {
            data : '',
            ScrollAfterHeight : 90,
            onload : function( data, itsMe ) {
                alert( data );
            },
            start : function( itsMe ){},
            continueWhile : function() {
                return true;
            },
            getData : function( itsMe ) {
                return '';
            }
        };

        for( var eachProperty in defaults ) {
            if( options[ eachProperty ] ) {
                defaults[ eachProperty ] = options[ eachProperty ];
            }
        }

        return this.each( function() {
            this.scrolling = false;
            this.scrollPrev = this.onscroll ? this.onscroll : null;
            $( this ).bind( 'scroll', function ( e ) {
                if( this.scrollPrev ) {
                    this.scrollPrev();
                }
                if( this.scrolling ) return;
                //var totalPixels = $( this ).attr( 'scrollHeight' ) - $( this ).attr( 'clientHeight' );
                if( Math.round( $( this ).prop( 'scrollTop' ) / ( $( this ).prop( 'scrollHeight' ) - $( this ).prop( 'clientHeight' ) ) * 100 ) > defaults.ScrollAfterHeight ) {

                    defaults.start.call( this, this );
                    this.scrolling = true;
                    $this = $( this );
                    setTimeout(function(){
                        $.ajax( { url : 'http://demo.qodeinteractive.com/bridge/demo_examples/examples'+count_examples+'.php', data : defaults.getData.call( this, this ), type : 'post', success : function( data ) {
                            $this[ 0 ].scrolling = false;
                            defaults.onload.call( $this[ 0 ], data, $this[ 0 ] );
                            if( !defaults.continueWhile.call( $this[ 0 ], data ) ) {
                                $this.unbind( 'scroll' );
                            }
                            count_examples++;
                        }});
                    },300);
                }
            });
        });
    }
})( jQuery );
