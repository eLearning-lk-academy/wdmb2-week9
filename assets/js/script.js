$(document).ready(() => {
  let firstName = $("#firstName");
  let lastName = $("#lastName");
  let username = $("#username");
  let usernameChanged = false;
  firstName.on("focusout", () => {
    if (firstName.val() === "") {
      firstName.addClass("is-invalid");
      firstName.removeClass("is-valid");

      $("#firstName+div")
        .html("First name can not be empty")
        .addClass("invalid-feedback")
        .removeClass("valid-feedback");
    } else if (firstName.val().length < 3) {
      firstName.addClass("is-invalid").removeClass("is-valid");
      $("#firstName+div")
        .html("First name must be at least 3 characters")
        .addClass("invalid-feedback")
        .removeClass("valid-feedback");
    } else {
      firstName.addClass("is-valid").removeClass("is-invalid");
      usernameGeneration();
    }
  });

  lastName.on("focusout", () => {
    if (lastName.val() === "") {
      lastName.addClass("is-invalid");
      lastName.removeClass("is-valid");

      $("#lastName+div")
        .html("Last name can not be empty")
        .addClass("invalid-feedback")
        .removeClass("valid-feedback");
    } else if (lastName.val().length < 3) {
      lastName.addClass("is-invalid").removeClass("is-valid");
      $("#lastName+div")
        .html("Last name must be at least 3 characters")
        .addClass("invalid-feedback")
        .removeClass("valid-feedback");
    } else {
      lastName.addClass("is-valid").removeClass("is-invalid");
      usernameGeneration();
    }
  });

  username.on("focusout", () => {
    if (firstName.val().length > 3 && lastName.val().length > 3) {
      let regEx = /^[a-z][a-z0-9]*_[a-z][a-z0-9]*$/;

      if (username.val() === "") {
        username.addClass("is-invalid").removeClass("is-valid");
        $("#username+div")
          .html("Username can not be empty")
          .addClass("invalid-feedback")
          .removeClass("valid-feedback");
      } else if (!regEx.test(username.val())) {
        username.addClass("is-invalid").removeClass("is-valid");
        $("#username+div")
          .html("Username patten invalid")
          .addClass("invalid-feedback")
          .removeClass("valid-feedback");
      } else {
        username.addClass("is-valid").removeClass("is-invalid");
        usernameChanged = true;
        $("#username+div")
          .html("Username is valid")
          .addClass("valid-feedback")
          .removeClass("invalid-feedback");
      }
    }
  });

  //username generation
  function usernameGeneration() {
    if (firstName.val().length > 3 && lastName.val().length > 3) {
      let usernameVal =
        firstName.val().toLowerCase() +
        "_" +
        lastName.val().charAt(0).toLowerCase();
      if (username.val() == "" || !usernameChanged) {
        username.val(usernameVal);
      }
    }
  }

  let nextBtn = $("#nextBtn");
  let backBtn = $("#backBtn");
  let form  = $("#regForm");

  nextBtn.on("click", () => {
	let step = form.data("step");
	$("#step_"+step).fadeOut(300);
	step++;
	$("#step_"+step).fadeIn(600);
	form.data("step", step);
	if(step >1){
		backBtn.show();
	}
	if(step == 3){
		nextBtn.hide();
	}else{
		// nextBtn.show();
	}
  })

  backBtn.on("click", () => {
	let step = form.data("step");
	nextBtn.show();
	$("#step_"+step).fadeOut(300);
	step--;
	$("#step_"+step).fadeIn(400);
	form.data("step", step);
	if(step == 1){
		backBtn.hide();

	}

  });

});
