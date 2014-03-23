$(document).on('pageinit',function(){
	$("#detailsForm").validate({
		rules: {
			emailAddress: {
				required: true,
				email: true
			},
			repTitle: "required",
			repDetails: "required"
		},
		messages: {
			emailAddress: "Please enter a valid email address",
			repTitle: "Please enter a report title",
			repDetails: "Please enter report details"
		},
		
		submitHandler: function(form) {
			form.submit();
		}
	});
	$("#detailsCatForm").validate({
		rules: {
			category: "required"
		},
		messages: {
			category: "Please select a category before moving to next screen"
		},
		
		submitHandler: function(form) {
			console.log('Prior to submit in validate');
			form.submit();
		}
	})
});