const bcrypt = require('bcrypt');

const hashpassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt);
    console.log(hash);
} 

const login = async(password, hashpw) => {
    const res = await bcrypt.compare(password, hashpw);
    console.log(res  ? 'Password matched' : 'Password not matched');
}

hashpassword('12345');

login('12345', '$2b$10$gVmv9MnaiXI6MsoPnm6ytuuNa80GAEQjR2PqVLWz9BhaPpBxEkcUO');
