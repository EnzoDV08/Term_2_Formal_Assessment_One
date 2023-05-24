function validateForm() {
    var checkbox = document.getElementById("checkbox");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var subject = document.getElementById("subject").value;
  
    if (checkbox.checked) {
      alert(
        "Welcome " +
          name +
          "! Thank you for your interest in " +
          subject +
          "! We will contact you via the email provided: " +
          email +
          " or alternatively on the phone number: " +
          contact
      );
    } else {
      alert(
        "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " +
          name +
          "! If you want to sign up, you better CHECK that newsletter box!"
      );
    }

    console.log(validateForm)
  }
