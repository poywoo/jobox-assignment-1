$("form").submit(function(event) {
	if ($("#firstName").val() && $("#lastName").val() && $("#email").val() && $("#nonprofitName").val() && $("#website").val() &&
		$("#phoneNumber").val() && $("#twitterUsername").val()) {
			$("#sentModal").modal("show");
	} else {
		alert("Please fill out all fields before sending the form");
	}
	event.preventDefault();
});

$("#closeModal").click(function() {
	window.location.reload();
});
