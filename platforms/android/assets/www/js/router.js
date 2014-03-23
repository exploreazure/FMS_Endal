(function (FMS, Backbone, _, $) {
    _.extend(FMS, {
        appRouter: Backbone.Router.extend({
            currentView: null,
            reverse: false,

            routes: {
                '': 'around',
                'around': 'around',
                'detailsCat': 'detailsCat',
                'photo': 'photo',
                'details': 'details',
                'submit': 'submit',
                'utils': 'utils',
                'settings': 'settings',
                'font': 'font',
                'colour': 'colour'
             },

      
            back: function(e) {
            	FMS.printDebug('Back function router triggered');
            	if (this.currentView && this.currentView.back) {
                    this.currentView.back(e);
                }
            },

            around: function() {
                // page to capture location details from user
            	FMS.printDebug('Around / Home function router triggered');
            	var aroundView = new FMS.AroundView({ model: FMS.currentDraft });
                this.changeView(aroundView);
            	//$('body').html('<body><h1>Photo</h1><br/>Cheese');
            },
         
            photo: function() {
        	    $('body').html('<h1>Photo</h1><br/>Cheese');
            },
            
            utils: function() {
            	FMS.printDebug('Utils function router triggered');
            	utilsView = new FMS.UtilsView ({ model: FMS.CurrentDraft });
            	this.changeView(utilsView);
            },

            settings: function() {
            	FMS.printDebug('Settings function router triggered');
            	settingsView = new FMS.SettingsView ({ model: FMS.CurrentDraft });
            	this.changeView(settingsView);
            },

            font: function() {
            	FMS.printDebug('Font function router triggered');
            	fontView = new FMS.FontView ({ model: FMS.CurrentDraft });
            	this.changeView(fontView);
            },
            
            photo: function() {
            	FMS.printDebug('Take photo function router triggered');
            	photoView = new FMS.PhotoView ({ model: FMS.CurrentDraft });
            	this.changeView(photoView);
            },

            colour: function() {
            	FMS.printDebug('Colour function router triggered');
            	colourView = new FMS.ColourView ({ model: FMS.CurrentDraft });
            	this.changeView(colourView);
            },
            
            
            detailsCat: function() {
            	FMS.printDebug('Gather category details - router triggered');
            	detailsCatView = new FMS.DetailsCatView ({ model: FMS.CurrentDraft });
            	this.changeView(detailsCatView);
            },

            details: function() {
            	FMS.printDebug('Gather final details - router triggered');
            	detailsView = new FMS.DetailsView ({ model: FMS.CurrentDraft });
            	this.changeView(detailsView);
            },

            submit: function() {
            	FMS.printDebug('Final submit screen - router triggered');
            	submitView = new FMS.SubmitView ({ model: FMS.CurrentDraft });
            	this.changeView(submitView);
            },
            
            changeView: function(view) {
                FMS.printDebug( 'change View to ' + view.id );
                $(view.el).attr('data-role', 'page');
                view.render();  
                $('.jquerymobile').append($(view.el));
                var options = { changeHash: false };
                options.transition = 'none';
                if ( this.reverse ) {
                    options.reverse = true;
                }
                if (view.id == 'around-page' ) {
                	FMS.printDebug('Hide the loading page');
                	$('#load-screen').hide();
                }
                
                this.reverse = false;
                $.mobile.changePage($(view.el), options);             
                this.currentView = view;
            }
        })
    });
})(FMS, Backbone, _, $);