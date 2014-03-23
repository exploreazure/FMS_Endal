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
        FontView: FMS.FMSView.extend({
            template: 'font',
            id: 'font-page',
            
            events: {
                'vclick #utils': 'onClickUtils',
                'vclick #settings': 'onClickSettings',
                'vclick #home': 'onClickHome',
                'vclick #default': 'onClickDefault',
                'vclick #inc50': 'onClickInc50',
                'vclick #inc70': 'onClickInc70',
                'vclick #inc150': 'onClickInc150',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy'
            },
            
            beforeDisplay: function() {
            	getFont();
            	getTheme();
            },

            onClickDefault: function(e) {
                FMS.printDebug('Set to default font size function triggered');
                setFont('d');
                return false;
            },
            
            onClickInc50: function(e) {
                FMS.printDebug('Increase by 50% function triggered');
                setFont('l');
                return false;
            },
            
            onClickInc70: function(e) {
                FMS.printDebug('Increase by 70% function triggered');
                setFont('x');
                return false;
            },
            
            onClickInc150: function(e) {
                FMS.printDebug('Increase by 150% function triggered');
                setFont('m');
                return false;
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