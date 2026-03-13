function submitForm() {
  let contactForm = document.getElementById("contactForm");
  let nameInput = document.getElementById("nameInput");
  let businessInput = document.getElementById("businessInput");
  let emailInput = document.getElementById("emailInput");

  let submit = {
    name: nameInput.value,
    business: businessInput.value,
    email: emailInput.value,
  };
  console.log(submit);

  alert(`Thanks for reaching out ${submit.name}!`);
}
