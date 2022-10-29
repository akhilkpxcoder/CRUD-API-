module.exports = {
    // operation's method.
    delete: {
      tags: ["User CRUD operations"], // operation's tag
      description: "Deleting a User", // short desc
      operationId: "deleteUser", // unique operation username
      parameters: [
        // expected parameters
        {
          name: "username", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/username", // username model
          },
          required: true, // mandatory
          description: "Deleting a done User", // param desc
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "User deleted successfully", // response desc
        },
        // response code
        404: {
          description: "User not found", // response desc
        },
        // response code
        500: {
          description: "Server error", // response desc
        },
      },
    },
  };