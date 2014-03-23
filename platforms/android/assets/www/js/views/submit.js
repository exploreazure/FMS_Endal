/**
 * This js routine is used by the final submit page
 * The page displays a summary of the report
 * It will also send the json request
 * currently the json request has not been implemented
 * version 1.0 BS 22/03/2014
 * 
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        SubmitView: FMS.FMSView.extend({
            template: 'submit',
            id: 'submit-page',
            
            events: {
                'vclick #home': 'onClickHome',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy'
            },
            
            beforeDisplay: function() {
            	getFont();
            	getTheme();
            },
            
            /*
             * this code will be used when json interface is implemented
             render: function() {
            	var emailAddress = FMS.currentDraft.get('emailAddress');
            	var title        = FMS.currentDraft.get('title');
            	var details      = FMS.currentDraft.get('details');
            	var category     = FMS.currentDraft.get('category');
            },
            */
            
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