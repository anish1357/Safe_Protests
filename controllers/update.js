const Protest_Update = require('../models/Protest_Update');
const Pending_Updates = require('../models/Pending_Updates');
const User = require('../models/User');

exports.verifyUpdate = (req, res, next) => {
    const updateId = req.params.updateId;
    Pending_Updates.findById(updateId).then(update => {
        Protest_Update.insertMany(update).then(result => {
            Pending_Updates.findByIdAndDelete(updateId)
                .then(okay => {
                    res.status(200).send({ msg: "Update transferred" });
                });
        });
    }).catch(err => {
        console.log(err);
    });
};


exports.ignoreUpdate = (req, res, next) => {
    const updateId = req.params.updateId;
    Pending_Updates.findByIdAndDelete(updateId).then(result => {
        res.status(200).send({ msg: "Successfully removed" });
    }).catch(err => {
        console.log(err);
    });
};

exports.blockUsers = (req, res, next) => {
    const updateId = req.params.updateId;
    Pending_Updates.findByIdAndDelete(updateId).then(update => {
        User.findById(update.user_id).then(user => {
            user.blocked = true;
            return user.save();
        }).then(result => {
            res.status(200).send({ msg: "Blocked" });
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getPendingUpdates = (req, res, next) => {
    const protestId = req.params.protestId;
    Pending_Updates.find({ protest_id: protestId }).then(pending => {
        res.status(200).json({ pending: pending });
    }).catch(err => { console.log(err); });
};