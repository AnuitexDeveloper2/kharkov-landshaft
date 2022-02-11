import emailjs from "@emailjs/browser";

export const sentEmail = (name, phone, email, description, location) => {
  return;
  emailjs
    .send(
      "service_2qmv8nb",
      "template_j17tbja",
      {
        name: name,
        phone: phone,
        email: email,
        description: description,
        location: location,
      },
      "user_MH3KNUNzhOxyH3RAxobWS"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};
