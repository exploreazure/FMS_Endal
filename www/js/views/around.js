/**
 * The original FMS app extended FMSLocatorView
 * The endal interface no longer requires this inheritance
 * 
 * This version does not automatically retrieve the device location
 * This version also doesn't give the user the opportunity to change location
 * 
 * version 1.0 BS 22/03/2014
 *  
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        AroundView: FMS.FMSView.extend({
            template: 'around',
            id: 'around-page',
        
            events: {
                'vclick #utils': 'onClickUtils',
                'vclick #settings': 'onClickSettings',
                'vclick #detailsCat': 'onClickDetailsCat',
                'vclick #changeLoc': 'onClickChangeLoc',
                'vclick #home': 'onClickHome',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy'
            },
            
            beforeDisplay: function() {
            	getFont();
            	getTheme();
            },
            
            onClickUtils: function(e) {
            	FMS.printDebug('Utils function triggered');
                this.remove();
                this.unbind();
                this.navigate('utils');
            },
            
            onClickSettings: function(e) {
            	FMS.printDebug('Settings function triggered');
                this.remove();
                this.unbind();
                this.navigate('settings');
            },
            
            onClickDetailsCat: function(e) {
            	FMS.printDebug('Gather category details function triggered');
                this.remove();
                this.unbind();
                this.navigate('detailsCat');
            },
            
            onClickChangeLoc: function(e) {
            	navigator.notification.alert('This function has not been developed yet');
            },
            
            onClickHome: function(e) {
                FMS.printDebug('Home function triggered');
                this.close();
                this.navigate('around');
            }
            
            
            /*
            render: function(){
                 	
            	if ( CONFIG.DEBUG ) {
            	     FMS.printDebug('Rending template: ' + this.template);
            	}
                
            	if ( !this.template ) {
                    FMS.printDebug('no template to render');
                    return;
                }
            	
                template = _.template( tpl.get( this.template ) );
                if ( this.model ) {
                    this.$el.html(template({ model: this.model.toJSON(), user: FMS.currentUser.toJSON() }));
                } else {
                    this.$el.html(template());
                }
                this.afterRender();
                return this;

            }*/
         })
    })
}) (FMS, Backbone, _, $);