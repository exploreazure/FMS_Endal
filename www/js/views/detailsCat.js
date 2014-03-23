/**
 * This js routine is used by the details category page
 * The type of complaint is selected by user on this page
 * Version 1.0 BS 22/03/2014
 */

(function (FMS, Backbone, _, $) {
    _.extend( FMS, {
        DetailsCatView: FMS.FMSView.extend({
            template: 'detailsCat',
            id: 'detailsCat-page',
            
            events: {
                'vclick #home': 'onClickHome',
                'vclick #photo': 'onClickPhoto',
                'vclick #showMore': 'onClickShowAll',
                'vclick #showCommonOnly': 'onClickShowCommon',
                'pagebeforeshow': 'beforeDisplay',
                'pagehide': 'destroy',
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
            
            onClickPhoto: function(e) {
                FMS.printDebug('Photo function triggered');
                //FMS.printDebug('Value = ' + $('#detailsCatForm').category.val() );
                FMS.printDebug('Radio = ' + $("input[type='radio'][name='category']:checked").val());
                if ($('input[name="category"]:checked').val() === undefined) {
                	// radio box has not been selected - Let jquery validation pllugin show error meesage
                } else {
                	FMS.currentDraft.set({ category : $("input[type='radio'][name='category']:checked").val()});
                	//$("input[type='radio'][name='category']:checked").val());
                	this.close();
                    this.navigate('photo');
                }
            },
            
            onClickShowAll: function(e) {
            	FMS.printDebug('Clicked show all function triggered');
            	$('#commonOptions').hide();
            	$('#commonHeading').hide();
            	$('#showMore').hide();
            	$('#allHeading').show();
            	$('#allOptions').show();
            	$('#showCommon').show();
            	FMS.printDebug('Clicked show all function triggered - Finished');
            },
            
            onClickShowCommon: function(e) {
            	FMS.printDebug('Clicked show common function triggered');
            	$('#allHeading').hide();
            	$('#allOptions').hide();
            	$('#showCommon').hide();
            	$('#commonOptions').show();
            	$('#commonHeading').show();
            	$('#showMore').show();
              	FMS.printDebug('Clicked show common function triggered - Finished');
     
            },
            
            close: function() {
                this.remove();
                this.unbind();            	
            }
        })
    })
}) (FMS, Backbone, _, $);