function validateForm() {
    var checkbox = document.getElementById("checkbox");
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var contactInput = document.getElementById("contact").value;
    var subjectInput = document.getElementById("subject").value;
  
    if (checkbox.checked) {
      alert(
        "Welcome " +
          nameInput +
          "! Thank you for your interest in " +
          subjectInput +
          "! We will contact you via the email provided: " +
          emailInput +
          " or alternatively on the phone number: " +
          contactInput
      );
    } else {
      alert(
        "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " +
          nameInput +
          "! If you want to sign up, you better CHECK that newsletter box!"
      );
    }

    console.log(validateForm)
  }

  function moveImage(direction) {
    var imgContainer = document.querySelector('.img-4');
    var currentPosition = parseInt(
      window.getComputedStyle(imgContainer).getPropertyValue('transform').split(',')[4].trim()
    );
  
    var moveBy = 200; // Adjust this value to change the distance to move
  
    if (direction === 'left') {
      imgContainer.style.transform = `translateX(${currentPosition - moveBy}px)`;
    } else if (direction === 'right') {
      imgContainer.style.transform = `translateX(${currentPosition + moveBy}px)`;
    }
  }