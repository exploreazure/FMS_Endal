var tpl = {
   /**
    * Hash of preloaded templates for the app
	* Recursively pre-load all the templates for the app.
	* This implementation should be changed in a production environment. All the template files should be
	* concatenated in a single file. 
	* 
	* This routine relies on the templates object being set
	* this is set at the begin of (function (FMS, Backbone, _, $) { _.extend(FMS, {
	* 
	* This routine outputs a object called templates which elements containing each html template 
	*/
		
    templates:{},

    loadTemplates:function (names, callback) {

        var that = this;

        var loadTemplate = function (index) {
            var name = names[index];
            FMS.printDebug('Loading template: ' + name + ', index: ' + index);
            $.get('templates/' + CONFIG.LANGUAGE + '/' + name + '.html', function (data) {
                that.templates[name] = data;
                index++;
                if (index < names.length) {
                    loadTemplate(index);
                } else {
                    callback();
                }
            });
        };

        loadTemplate(0);
    },

    // Get template by name from hash of preloaded templates
    get:function (name) {
        return this.templates[name];
    }

};


(function (FMS, Backbone, _, $) {
    _.extend(FMS, {

      templates: [
          'around', 'detailsCat', 'photo', 'details', 'submit', 'utils', 'font', 'colour', 'settings' 
      ],
    	
      usedBefore: 0,
	  isLoggedIn: 0,
	  isOffline: 0,
	  initialized: 0,
	  currentUser: null,
	  // functionality not currently implemented users: new FMS.Users(),
	  currentPosition: null,
	  isAndroid: true,
	  iPhoneModel: 0,
	  uploadTimeout: CONFIG.UPLOAD_TIMEOUT || 120000,
	  testing: 1,
	
	  currentDraft: new FMS.Draft(),
	  allDrafts: new FMS.Drafts(),
	  
	  
	  reportToView: null,
  	
      printDebug: function(msg) {
          if ( CONFIG.DEBUG ) {
             console.log(msg);
          }
  	  },
  	  


      loadCurrentDraft: function() {
          if ( localStorage.currentDraftID && localStorage.currentDraftID != 'null' ) {
              var r = FMS.allDrafts.get( localStorage.currentDraftID );
              if ( r ) {
                  FMS.currentDraft = r;
              }
          }
          localStorage.currentDraftID = null;
      },

      removeDraft: function(draftID, removePhoto) {
          var draft = FMS.allDrafts.get(draftID);
          var uri = draft.get('file');
          FMS.allDrafts.remove(draft);
          draft.destroy();

          if ( removePhoto && uri ) {
              return FMS.files.deleteURI( uri );
          }
          var p = $.Deferred();
          p.resolve();
          return p;
      },

      setCurrentDraft: function(draft) {
          FMS.currentDraft = draft;
          localStorage.currentDraftID = draft.id;
      },

      clearCurrentDraft: function() {
          FMS.currentDraft = new FMS.Draft();
          localStorage.currentDraftID = null;
      },
  	
      initialize: function () {
          // only execute this routine once on app startup
    	  if ( this.initialized == 1 ) {
              return this;
          }
    	  
    	  FMS.printDebug('In initialize code');
    	  
    	  // iniitialized variable prevents this routine from executing again 
          FMS.initialized = 1;
  
          // hide splash screen
          //if ( navigator && navigator.splashscreen ) {
          //    navigator.splashscreen.hide();
          //}
          
	      tpl.loadTemplates( FMS.templates, function() {
	          // do not display any effects when moving between pages
	    	  $.mobile.defaultPageTransition = 'none';
	    	  
	    	  _.extend(FMS, {
	    	      // new instance of router
	              router: new FMS.appRouter
	    	  });
	    	  
	    	  // minimal event listeners
	    	  //$(document).on('ajaxStart', function() { $.mobile.loading('show'); } );
	          //$(document).on('ajaxStop', function() { $.mobile.loading('hide'); } );

	          Backbone.history.start();
	          
	          //navigator.splashscreen.hide();
	      })
	      
	      if ( CONFIG.TESTING ) {
              FMS.testing = 1;
          }
      }
    });
}) (FMS, Backbone, _, $);

function onload() {
	/**
	 * this routine is triggered from the onload body tag in index.html 
	 */
	
	if ( CONFIG.DEBUG ) {
	    console.log('Pre deviceready');
	}
	
	// the below event listener triggers the initialize routine within the FMS object
	document.addEventListener('deviceready', FMS.initialize, false);
	
	if ( CONFIG.DEBUG ) {
	    console.log('Post deviceready');
	}
}