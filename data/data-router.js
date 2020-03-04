const router = require("express").Router();

const DataTable = require("./data-model.js");
const Users = require("../users/users-model")

router.get('/all', (req, res) => {
    DataTable.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => res.send(err))
})

router.post("/input/:id", (req, res) => {
    const inputData = req.body;
    const {id} = req.params;

    Users.findById(id)
    .then(user =>{
        if(user) {
            DataTable.addData(inputData, user.id)
            .then(step => {
                res.status(201).json(step)
            })
        } else {
            res.status(404).json({message: 'Could not find the user id'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'Failed to add a new listing'})
    })
  });

module.exports = router;


// name, hostStatus,latitude,longitude, propertyType, accomodates, bathrooms,
//     bedrooms, roomType, bedType, size, distance, securityDeposit, cleaning, guests,
// extraPeople,
//     minimumNights, cancellationPolicy, tv, wifi, washer, dryer, kitchen,
// heating,
//     freeParking, smoking, neighbourhood, instantBookable