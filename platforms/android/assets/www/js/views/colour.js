/**
 * This routine is used by the font settings page
 * A user can select the size of the font
 * 
 * default       = 16px
 * Increase 50%  = 24px
 * Increase 70%  = 29px
 * Increase 150% = 43px
 * Version 1.0 BS 22/03/2014
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        ColourView: FMS.FMSView.extend({
            template: 'colour',
            id: 'colour-page',
            
            events: {
                'vclick #utils': 'onClickUtils',
                'vclick #settings': 'onClickSettings',
                'vclick #home': 'onClickHome',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy',
                'vclick #default': 'onClickDefault',
                'vclick #yellow': 'onClickYellow',
                'vclick #red': 'onClickRed'
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
                FMS.printDebug('Settings function triggered');
                this.close();
                this.navigate('settings');
            },
            
            onClickDefault: function(e) {
            	FMS.printDebug('Theme changed to default function triggered');
            	changeTheme('a');
            },

            onClickYellow: function(e) {
            	FMS.printDebug('Theme changed to yellow function triggered');
            	changeTheme('b');
            },
            
            onClickRed: function(e) {
            	FMS.printDebug('Theme changed to red function triggered');
            	changeTheme('c');
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