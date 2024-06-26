const db = require("../models");
const jwt = require("jsonwebtoken");
const Users = db.users;

// Create and Save a new Users
exports.create = (req, res) => {
  // Validate request
  if ( !req.body.password || !req.body.emailphone) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }


  // Create a Users
  
  const userData = {
    password: req.body.password,
    emailphone: req.body.emailphone,
  };

  // Save Users in the database
  Users.create(userData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

  const userData = {
    emailphone: req.body.emailphone,
    password: req.body.password,
  };
  console.log(req.body);
  Users.findOne({
    where: { username: userData.emailphone, password : userData.password },
  })
    .then((data) => {
      res.send(token);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};

// Find a single Users with an id
exports.findOne = (req, res) => {
  const id = req.params.id;


  
  Users.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Users with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Users with id=" + id,
      });
    });
};

// Update a Users by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Users.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Users was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Users with id=${id}. Maybe Users was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Users with id=" + id,
      });
    });
};

// Delete a Users with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Users was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Users with id=${id}. Maybe Users was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Users with id=" + id,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  Users.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Users.",
      });
    });
};

// Find all published Users
exports.findAllPublished = (req, res) => {
  Users.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};

// Create admin
const newUser = {
  password: "admin",
  emailphone: "jurgen-kruja@live.com",
};

// Insert the new user record into the "users" table
Users.create(newUser)
  .then((user) => {
    console.log(`Created user with ID ${user.id}`);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });
