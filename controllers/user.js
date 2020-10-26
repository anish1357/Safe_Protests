const express = require('express');
const Protest = require('../models/Protest');
const User = require('../models/User');



//POST: Create a protest by a specific user
exports.createProtest = (req, res, next) => {
    const userId = req.userId;
    const organisation = req.body.organisation;
    const title = req.body.title;
    const description = req.body.description;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const location = req.body.location;
    Protest.create({
        organisation: organisation,
        title: title,
        description: description,
        location: location,
        startTime: startTime,
        endTime: endTime,
        createdBy: userId
    }).then(result => {
        console.log(result);
        User.findById(userId).then(user => {
            user.createdProtest.push({ protest_id: result._id });
            user.save().then(updateUser => {
                result.signedupUser.push({ user_id: userId });
                result.presentUser.push({ user_id: userId });
                result.admins.push({ user_id: userId });
                result.save().then(stored => {
                    res.status(200).send({ msg: "Protest created successfully" });
                });
            });
        });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};


//GET:Find the protests created by a specific user
exports.myProtests = (req, res, next) => {
    const userId = req.params.userId;
    User.findById(userId).then(user => {
        if (!user)
            return res.status(401).send({ msg: "User does not exist" });
        const allProtests = user.createdProtest.map(elem => {
            return Protest.findById(elem.protest_id);
        });
        Promise.all(allProtests).then(result => {
            res.status(200).json({ Protests: result });
        });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};

