/**
 * This js routine is used by the settings page
 * The user can select to goto the font page or the Colour page
 * Version 1.0 BS 22/03/2014
 * 
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        SettingsView: FMS.FMSView.extend({
            template: 'settings',
            id: 'settings-page',
            
            events: {
                'vclick #utils': 'onClickUtils',
                'vclick #settings': 'onClickSettings',
                'vclick #home': 'onClickHome',
                'vclick #font': 'onClickFont',
                'vclick #colour': 'onClickColour',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy'
            },
            
            beforeDisplay: function() {
            	getFont();
            	getTheme();
            },
            
            onClickUtils: function(e) {
                FMS.printDebug('Utils function triggered');
                this.close();
                this.navigate('utils');
            },
            
            onClickSettings: function(e) {
                FMS.printDebug('Currently in Settings page - Ignore request');
            },
            
            onClickHome: function(e) {
            	FMS.printDebug('Home function triggered');
                this.close();
                this.navigate('around');
            },

            onClickFont: function(e) {
            	FMS.printDebug('Font page triggered');
                this.close();
                this.navigate('font');
            },

            onClickColour: function(e) {
            	FMS.printDebug('Colour page triggered');
                this.close();
                this.navigate('colour');
            },
                        
            close: function() {
                this.remove();
                this.unbind();            	
            }
        })
    })
}) (FMS, Backbone, _, $);