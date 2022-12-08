const Command = require('../Models/index').CommandModel;
const asyncHandler = require("express-async-handler");


// function to retrieve all commands en cours : (default en cours)
/**
 * methode => get
 * @Route => api/admin/commands
 * access => private
 */
 const getAllCommand = asyncHandler((req, res) => {
    Command.findAll({
        where: {
            status: 'en cours'
        }
    })
        .then((data) => {
            res.json(data)
            .status(200)
        }).catch((err) => {
            res.status(400).json({
                error: err.message
            })
        })
})
// function to retrieve all commands livré (updated to livré ):
/**
 * methode => get
 * @Route => api/admin/commandslivrer
 * access => private
 */
 const getCommandLivre = asyncHandler((req, res) => {
    Command.findAll({
        where: {
            status: 'livré'
        }
    })
        .then((data) => {
            res.json(data)
            .status(200)
        }).catch((err) => {
            res.status(400).json({
                error: err.message
            })
        })
})
// function to update status  commands livré (updated to livré ):
/**
 * methode => get
 * @Route => /api/admin/command/update/:id
 * access => private
 */
 const updateStatus = asyncHandler((req, res) => {
    const id = req.params.id;
    console.log(id);
  
    Command.update(   {
      status: "livré"
    },
    {
      where: { id_command: id },
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Status command was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Status command with id=${id}. Maybe Command was not found !`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Status Command with id=" + id
        });
      });
 });




module.exports = { getAllCommand , getCommandLivre , updateStatus }