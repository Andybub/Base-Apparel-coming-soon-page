$(document).ready(function () {
  $(".submit").click(function (e) {
    validateForm();
  });

  function validateForm() {
    var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = $(".emailAddressInput > input").val();

    console.log(email);
    console.log(emailReg.test(email));

    if (emailReg.test(email)) {
      $(".warning").removeClass("active");
      $(".exclamationMark").removeClass("active");
    } else {
      $(".warning").addClass("active");
      $(".exclamationMark").addClass("active");
    }
  }
});
