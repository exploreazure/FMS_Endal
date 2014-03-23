/**
 * This js routine is used by the details page
 * Email address, Report Title, Report Details are collated
 * Version 1.0 BS 22/03/2014
 * 
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        DetailsView: FMS.FMSView.extend({
            template: 'details',
            id: 'details-page',
            
            events: {
                'vclick #home': 'onClickHome',
                'vclick #submitBtn': 'onClickSubmit',
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
            
            onClickSubmit: function(e) {
                FMS.printDebug('Submit function triggered');
      
                // set collection values
                FMS.currentDraft.set({ emailAddress : $('#emailAddress').val() });
            	FMS.currentDraft.set({ title : $('#repTitle').val() });
            	FMS.currentDraft.set({ details : $('#repDetails').val() });
            	               	   
               	this.close();
                this.navigate('submit');
            },
            
            close: function() {
                this.remove();
                this.unbind();            	
            }
        })
    })
}) (FMS, Backbone, _, $);