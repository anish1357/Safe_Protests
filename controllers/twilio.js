const Protest = require('../models/Protest');
const User = require('../models/User');
const dotenv = require('dotenv');
dotenv.config();

const accountSid = process.env.Sid;
const authToken = process.env.AuthToken;

const client = require('twilio')(accountSid, authToken);

exports.help = (req, res, next) => {
    console.log(req.body);
    const protest_id = req.params.protestId;
    const userId = req.userId;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    let name;
    let arr = [];
    User.findById(userId).then(user => {
        name = user.name;
    }).then(result => {
        Protest.findById(protest_id).then(protest => {
            const users = protest.presentUser.map(el => {
                return User.findById(el.user_id);
            });
            Promise.all(users).then(resulto => {
                arr = resulto.map(el => el.number);
            }).then(okay => {
                arr.forEach(element => {
                    client.messages.create({
                        to: `+91${element}`,
                        from: `+12548707460`,
                        body: `I am ${name}.I am in trouble.
                        Could somebody please contact me.
                        Please click the link below to see where I am located.
                        http://www.google.com/maps/place/${latitude},${longitude}`
                    });
                });
                res.status(200).send({ msg: "Sent Successfuly" });
            });
        });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};