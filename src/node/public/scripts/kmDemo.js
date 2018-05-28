
var kmDemo = {
    init: function() {
        //Check old browser
        if ((kendo.support.browser.msie && kendo.support.browser.version < 10) || kendo.support.browser.opera) {
            $("#mobile-application-container")
                .addClass("old-browser")
                .empty()
                .html("<div class='content'><span class='centered'><strong>Kendo UI Mobile</strong><span>is fully supported only in WebKit based browsers and IE10.</span><br><br>Please use a compatible desktop browser or open the examples in a mobile WebKit based browser or Windows Phone.</span></div>");
        }

        //OS 
        kendoMobileOS = this.getOs();
        
        //Skin
        var skin = (kendoMobileOS !== "flat") ? {} : { platform: "ios", skin: "flat"};
        
        //If supported browser, init Kendo
        if (!(kendo.support.browser.msie && kendo.support.browser.version < 10) && !kendo.support.browser.opera) {
            window.kendoMobileApplication = new kendo.mobile.Application($("#mobile-application-container"),
                $.extend({
                    layout: "examples",
                    platform: kendoMobileOS,
                    updateDocumentTitle: false,
                    hideAddressBar: false
                }, skin));
        }
    },
            
    changeScreenWidth: function(size) {
        $('body').removeClass('phoneWidth');
        
        switch (size) {
            case 'phone':
                $('body').addClass('phoneWidth');
                break;
                
            case 'default':
            default:
                break;
        }
    },
            
    getOs: function() {
        //Retrieve from localStorage or use default
        var os = localStorage.kendoMobileOS || 'flat'; 
        return os;
    },
    saveOs: function(os) {
        localStorage.kendoMobileOS = os;
    },
    switchOs: function(os) {
        //Default
        if (os!="android" && os!="blackberry" && os!="wp" && os!="flat") {
            os = "ios";
        }

        //Save OS
        this.saveOs(os);
        
        //Reload iframe
        document.getElementById('kmDemoIframe').contentDocument.location.reload(true);
        
        //Restyle device wrapper
        this.styleDeviceWrapper(os);
    },
    
    move: function(move){
        //Make sure screen is not at phoneWidth
        this.changeScreenWidth('default');
        
        //If they want to reset position to default
        if (move === 'default') {
            move = {x:null, y:null};
            
            //Center device on screen
            var wrapperWidth = $('#moveableBlocksWrapper').outerWidth();
            var deviceWidth = $('#device-wrapper').outerWidth();
            move.x = wrapperWidth/2 - deviceWidth/2;

            var wrapperHeight = $('#moveableBlocksWrapper').outerHeight();
            var deviceHeight = $('#device-wrapper').outerHeight();
            var navbarHeight = $('#navbar').outerHeight();
            move.y = wrapperHeight/2 - deviceHeight/2 - navbarHeight/2;

        }
        
        //Move
        $('#device-wrapper').setX(move.x);
        $('#device-wrapper').setY(move.y);
    },
            
    rotate: function(degrees){
        //Make sure screen is not at phoneWidth
        this.changeScreenWidth('default');
        
        //If they want to reset rotation to default
        if (degrees === 'default') {
            var currentRotation = $('#device-wrapper').getRotation();
            degrees = currentRotation * -1;
        }
        
        //Rotate
        $('#device-wrapper').rotate(degrees);
    },
    
    styleDeviceWrapper: function() {
        var kendoMobileOS = this.getOs();
        $("#device-wrapper").removeClass("ios android blackberry wp flat").addClass(kendoMobileOS);
    }
};

