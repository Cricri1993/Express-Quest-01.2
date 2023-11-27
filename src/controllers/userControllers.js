const database = require("../../database");

const getUsers = (req, res) => {
    database
  .query("select * from users")
  .then((result) => {
    const [users] = result;
    res.status(200).json(users);
  })
  .catch((err) => {
    console.error(err);
  })
} 

const getUserById = (req, res ) => {
    const id = parseInt(req.params.id);
    
    database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
        if (users[0] != null) {
            res.status(200).json(users[0]);
        } else {
            res.sendStatus(404);
        }
    })
    .catch((err) => {
        console.error(err);
    })
}

module.exports = {
    getUsers,
    getUserById,
  };
  