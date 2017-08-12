//utility object
(function(global) {
    function Utility() {
    };

    Utility.prototype.bindEvents = function() {
        var _this = this;
            
        //on resize event
        _this.$window.on('resize', function() {
           
        });
        
        //on scroll event
         _this.$window.on('scroll', function() {

         });
    }

    //init
    Utility.prototype.init = function() {
        var _this = this;
        _this.$window = $(window), 
        _this.$html = $('html'),
        _this.$body = $('body');
        _this.bindEvents();
       
    };
    
    global.Utility = Utility;
}(this));

$(function() {
    var util = new Utility();
    util.init();
});