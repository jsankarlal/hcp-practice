//JS
(function(global) {
    function Hcc() {
    };

    Hcc.prototype.bindEvents = function() {
        var _this = this;
            
        //on resize event
        _this.$window.on('resize', function() {
           
        });
        
        //on scroll event
         _this.$window.on('scroll', function() {

         });
    }

    //init
    Hcc.prototype.init = function() {
        var _this = this;
        _this.$window = $(window), 
        _this.$html = $('html'),
        _this.$body = $('body');
        _this.bindEvents();
       
    };
    
    global.Hcc = Hcc;
}(this));

$(function() {
    var hcc = new Hcc();
    hcc.init();
});