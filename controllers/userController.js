const User = require('../models/user')
const jwt = require('jsonwebtoken')
const brcypt = require('bcryptjs')

const JWT_SECRET = "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jdsds039[]]pou89ywe";

module.exports = {

  register: async (req, res) => {
    const { username, password, email, role } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email: email } });

      if (existingUser) {
        console.log(req.body);
        return res.status(409).json({ status: 409, data: "User already exists!!!" });
      } else {
        const encryptedPass = await brcypt.hash(password, 10);

        await User.create({
          username: username,
          password: encryptedPass,
          email: email,
          role: role
        });

        res.status(200).json({ status: "ok", data: "User Created" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", data: error.message });
    }
  },


  login: async (req, res) => {
    
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email: email } });

    if (!existingUser) {
      return res.send({data: "Email not register!!!"});
    }

    if (await brcypt.compare(password, existingUser.password)) {
      const token = jwt.sign({ email: existingUser.email }, JWT_SECRET, { expiresIn: '1d' });
  
      if (res.status(201)) {
        return res.send({ status: "ok", token: token, role: existingUser.role, userId: existingUser.id});
      } else {
        return res.send({ error: "error" });
      }
    } else {
      return res.send({data: "Invalid email or password!!!"})
    }
    },

  userdata: async(req,res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      const email = user.email;
  
      User.findOne({where: { email: email }}).then((data) => {
        return res.send({ status: "ok", data: data.dataValues, role:data.dataValues.role});
      });
    } catch (error) {
      return res.send({status: 401});
    }
  },

  //get all user
  index: async (req, res) => {
    try {
      const users = await User.findAll()
      if(users.length > 0){
      res.status(200).json({
        status: true,
        data: users,
        method: req.method,
        url: req.url
      })
      }else{
        res.json({
          status: false,
          message: "Data masih kosong"
        })
      }
    } catch (error) {
      res.status(400).json({sucess: false})
    }

  },
  //get a user by id
  show: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id)
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message:"Data berhasil didapat"
      })

    } catch (error) {
      console.log(error)
      res.status(400).json({success: false})
    }
  },
  store: async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan"
      })
    } catch (error) {
      res.status(400).json({success: false})
    }    
  },
  update: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      res.json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message:"Data berhasil diubah"
      })

    } catch (error) {
      res.status(400).json({success: false})
    }
  },
  delete: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      await user.destroy();

      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
}
