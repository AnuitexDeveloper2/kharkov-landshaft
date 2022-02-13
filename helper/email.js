import emailjs from "@emailjs/browser";

export const sentEmail = (name, phone, email, description, location) => {
  emailjs
    .send(
      "service_l7nyakn",
      "template_cjnqfo8",
      {
        name: name,
        phone: phone,
        email: email,
        description: description,
        location: location,
      },
      "user_pt5xyJAcPvSkCL86MJV9o"
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
