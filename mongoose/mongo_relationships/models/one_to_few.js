const mongoose = require('mongoose');
let userId;

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => console.log('Database connected :)'))
    .catch(err => console.log('Database connection error :('))

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false }, // if we want to remove the generated id
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

const saveUser = async() => {
    const user = new User({
        first: 'Vinidu',
        last: 'Minsara'
    });
    user.addresses.push({
        street: 'Suhada Mawatha',
        city: 'Kalutara',
        state: 'Western',
        country: 'Sri Lanka'
    });

    const res = await user.save();
    console.log(res);
    userId = res.id;
}

const add_address = async(id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: 'Jaya Mawatha',
        city: 'Colombo',
        state: 'Western',
        country: 'Sri Lanka'
    });
    const res = await user.save();
    console.log(res);
}

saveUser()
    .then(() => {
        add_address(userId)
            .then(() => mongoose.connection.close())
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

