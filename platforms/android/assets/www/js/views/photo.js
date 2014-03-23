/**
 * This js routine is used by the take a photo page
 * The take a photo is currently not implemented 
 * The user can only choose to skip this stage
 * Version 1.0 BS 22/03/2014
 * 
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        PhotoView: FMS.FMSView.extend({
            template: 'photo',
            id: 'photo-page',
            
            events: {
                'vclick #home': 'onClickHome',
                'vclick #details': 'onClickDetails',
                'vclick #addPhoto': 'onClickAddPhoto',
                'vclick #takePhoto': 'onClickTakePhoto',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy'
            },
            
            beforeDisplay: function() {
            	getFont();
            	getTheme();
            },
           
            onClickHome: function(e) {
                FMS.printDebug('Home function triggered');
                this.close();
                this.navigate('around');
            },
            
            onClickDetails: function(e) {
                FMS.printDebug('Details function triggered');
                this.close();
                this.navigate('details');
            },
            
            onClickAddPhoto: function(e) {
            	navigator.notification.alert('This function has not been developed yet');
            },
            
            onClickTakePhoto: function(e) {
            	navigator.notification.alert('This function has not been developed yet');
            },
            
            close: function() {
                this.remove();
                this.unbind();            	
            }
        })
    })
}) (FMS, Backbone, _, $);