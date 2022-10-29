module.exports = {
  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Simple Users API", // short title.
    description: "A simple Users API", //  desc.
    version: "1.0.0", // version number
    contact: {
      name: "Akhil KP", // your name
      email: "akhilkp@gmail.com", // your email
      url: "web.com", // your website
    },
  },
  security: [{
    bearerAuth: []
}]
};
