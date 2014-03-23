/**
 * This js routine is used by the utility page
 * This page is intended to provide the user a opportunity to check battery and network status
 * Both this options are currently not implemented
 * Version 1.0 BS 22/03/2014
 * 
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        UtilsView: FMS.FMSView.extend({
            template: 'utils',
            id: 'utils-page',
            
            events: {
                'vclick #utils': 'onClickUtils',
                'vclick #settings': 'onClickSettings',
                'vclick #home': 'onClickHome',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy'
            },
            
            beforeDisplay: function() {
            	getFont();
            	getTheme();
            },

            
            onClickUtils: function(e) {
            	FMS.printDebug('Currently in Utils page - Ignore request');
            },
            
            onClickSettings: function(e) {
            	FMS.printDebug('Settings function triggered');
                this.close();
                this.navigate('settings');
            },
            
            onClickHome: function(e) {
            	FMS.printDebug('Home function triggered');
                this.close();
                this.navigate('around');
            },
            
            close: function() {
                this.remove();
                this.unbind();            	
            }
             
        })
    })
}) (FMS, Backbone, _, $);