module.exports = {
  components: {
    securitySchemes: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            scopes:{
            read:"users"
            }
        }
    },
    schemas: {
      // username model
      username: {
        type: "string", // data type
        description: "Username", // desc
        example: "john123", // example of an username
      },
      // User model
      User: {
        type: "object", // data type
        properties: {
          first_name: {
            type: "string", // data type
            description: "First Name", // desc
            example: "john", // example of a title
          },
          last_name: {
            type: "string", // data type
            description: "Last Name", // desc
            example: "Mathew", // example of a title
          },
          username: {
            type: "string", // data type
            description: "Username", // desc
            example: "johnmathew12", // example of a title
          },
          email: {
            type: "string", // data type
            description: "Email", // desc
            example: "xxxx@gmail.com", // example of a title
          },
          mobile: {
            type: "number", // data type
            description: "Mobile", // desc
            example: "8575895684", // example of a title
          },
          password: {
            type: "string", // data type
            description: "Password", // desc
            example: "******", // example of a completed value
          },
        },
      },
      // User input model
      LoginInput: {
        type: "object", // data type
        properties: {
          email: {
            type: "string", // data type
            description: "Email", // desc
            example: "xxxx@gmail.com", // example of a title
          },
          password: {
            type: "string", // data type
            description: "Password", // desc
            example: "******", // example of a completed value
          },
        },
      },
      UpdateInput: {
        type: "object", // data type
        properties: {
          username: {
            type: "string", // data type
            description: "Username", // desc
            example: "john123", // example of a title
          },
          mobile: {
            type: "string", // data type
            description: "Mobile", // desc
            example: "9598965421", // example of a completed value
          },
        },
      },
      UserInput: {
        type: "object", // data type
        properties: {
          first_name: {
            type: "string", // data type
            description: "First Name", // desc
            example: "john", // example of a title
          },
          last_name: {
            type: "string", // data type
            description: "Last Name", // desc
            example: "Mathew", // example of a title
          },
          username: {
            type: "string", // data type
            description: "Username", // desc
            example: "johnmathew12", // example of a title
          },
          email: {
            type: "string", // data type
            description: "Email", // desc
            example: "xxxx@gmail.com", // example of a title
          },
          mobile: {
            type: "number", // data type
            description: "Mobile", // desc
            example: "8575895684", // example of a title
          },
          password: {
            type: "string", // data type
            description: "Password", // desc
            example: "******", // example of a completed value
          },
        },
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};
