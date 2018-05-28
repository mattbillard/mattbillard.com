
var kmPhp = {
    //Holds global info like deviceType etc
    utils: {},
    
    //Display PHP errors in console (b/c they will get hidden behind Kendo's panes)
    displayPhpErrorsInConsole: function() {
        $('.xdebug-error').each(function(i, node){
             var error = $(node).find('tbody tr:first th').text();
             console.log(error);
        });
    },
    
    //Initialize app
    init: function() {
        //Initialize nav
        kmPhp.nav.init();
        
        //Display PHP errors in console
        this.displayPhpErrorsInConsole();
    }
    
};


//Various helper methods
kmPhp.helper = {
    //-------------------- Device/version  --------------------
    setDeviceType: function(deviceType) {
        kmPhp.utils['deviceType'] = deviceType;
    },
    getDeviceType: function() {
        return kmPhp.utils['deviceType'];
    },
    isPhone: function() {
        return (kmPhp.utils['deviceType'] == 'PHONE');
    },
    isTablet: function() {
        return (kmPhp.utils['deviceType'] == 'TABLET');
    }
};


//For all navigation methods
kmPhp.nav = {
    _changeSidePane: function(goTo, transition) {
        //Only Tablet has sidePane. We don't want phone to try and change sidePane.
        if (kmPhp.helper.isTablet()) {
            goTo = this._prepUrlString(goTo);
            
            //Tell Kendo to navigate
            var url = '../../'+goTo+'/pane/side/index.html';
            this.sidePane.navigate(url, transition);
        }
    },
    _changeMainPane: function(goTo, transition) {
        goTo = this._prepUrlString(goTo);

        //Tell Kendo to navigate
        var url = '../../'+goTo+'/pane/main/index.html';
        this.mainPane.navigate(url, transition);
    },
    _prepUrlString: function(path) {
        if (path) {
            //If string starts and ends with '/', remove them b/c they'll be added later and we don't want //'s
            if (path.first() === '/') {
                path = path.from(1);
            }
            if (path.last() === '/') {
                path = path.to(path.length - 1);
            }
        }
        return path;
    },
    _updateUrl: function(goToSidePane, goToMainPane) {
        //Turn query string into object
        var queryObj = $.url(window.location.href).param();
        
        //Remember old queryObj
        var oldState = $.extend(true, {}, queryObj);
        
        //Update queryObj
        if (goToMainPane) {
            queryObj.mainPane = goToMainPane;
        }
        if (goToSidePane) {
            queryObj.sidePane = goToSidePane;
        }
        
        //Convert to queryString
        var queryString = '?';
        $.each(queryObj, function(key, val){
            queryString += '&'+key+'='+val;
        });
        queryString = queryString.replace('&', '');
        
        //Update URL
        window.history.replaceState(queryObj, '', queryString+'#/');
    },
    
    //Initialize nav
    init: function() {
        //Find and remember the mainPane and sidePane so we can programmatically navigate
        this.mainPane = $("#mainPane").data("kendoMobilePane");
        this.sidePane = $("#sidePane").data("kendoMobilePane");
        
        //Set the device type. 
        if (this.sidePane === null) {
            //Phone doesn't have a sidePane
            kmPhp.helper.setDeviceType('PHONE');
        } else {
            kmPhp.helper.setDeviceType('TABLET');
        }
        
        //Load content into the panes
        var queryObj = $.url(window.location.href).param();
        //If there is a sidePane (phone doesn't have a sidePane)
        if (kmPhp.nav.sidePane !== null) {
            //Use sidePanePath from URL or default
            var sidePanePath = (queryObj.sidePane) ? queryObj.sidePane : '/home/root/';
        }
        //Use mainPanePath from URL or default
        var mainPanePath = (queryObj.mainPane) ? queryObj.mainPane : '/home/root/';

        //Navigate
        kmPhp.nav.to(null, sidePanePath, mainPanePath);
    },
    
    //Navigate to...
    to: function(context, goToSidePane, goToMainPane) {
        var linkIsInThisPane = ($(context).closest('#mainPane')[0]) ? 'mainPane' : 'sidePane';
        
        //Figure out which transition to use
        var transition;
        if (linkIsInThisPane == 'sidePane') {
            transition = 'fade';
        } else {
            transition = 'slide';
        }
        
        //Navigate
        if (goToMainPane) {
            this._changeMainPane(goToMainPane, transition);
        }
        if (goToSidePane) {
            this._changeSidePane(goToSidePane, transition);
        }
        
        //Update URL
        this._updateUrl(goToSidePane, goToMainPane);
    },
    
    //Navigate back to...
    back: function(context, goToSidePane, goToMainPane) {
        var transition = 'slide:right';
        
        if (goToMainPane) {
            this._changeMainPane(goToMainPane, transition);
        }
        if (goToSidePane) {
            this._changeSidePane(goToSidePane, transition);
        }
        
        //Update URL
        this._updateUrl(goToSidePane, goToMainPane);
    },
    
    //When navigating to a new page
    newPage: function(url) {
        $('body').fadeOut('medium', function () {
            window.location = url;
        });
    }
};