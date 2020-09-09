document.addEventListener('DOMContentLoaded', function () {
		new Vue({
				el: "#notification-form",
				data: {
						name : "",
						email : "",
				},
				methods: {
						submitNotificationForm: function () {
								console.log("Posting email address.");
								fetch("https://v2-api.sheety.co/13d26148e15f7a22105200ebb373c845/uxokApi/newsletterRegistrations", {
										method: "POST",
										headers: {
												'Content-Type': 'application/json'
										},
										body: JSON.stringify({
												newsletterRegistration : {
														firstName : this.name,
														email : this.email
												}
										})
								}).then(function(data) {
										console.log(data);
								}).then(function(error) {
										console.log(error);
								})
						}
				}
		});
});
