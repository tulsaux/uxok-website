document.addEventListener('DOMContentLoaded', function () {

		console.log("DOMContentLoaded");

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

		// Get all "navbar-burger" elements
	  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	  // Check if there are any navbar burgers
	  if ($navbarBurgers.length > 0) {

	    // Add a click event on each of them
	    $navbarBurgers.forEach( el => {
	      el.addEventListener('click', () => {

	        // Get the target from the "data-target" attribute
	        const target = el.dataset.target;
	        const $target = document.getElementById(target);

	        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
	        el.classList.toggle('is-active');
	        $target.classList.toggle('is-active');

	      });
	    });
	  }

});
