import User from "../modals/userModal.js";

export const getAllUser = async (req, res) => {
  try {
    let user = await User.find();
    if (user.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User does not exists!",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "user",
        user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "This Email Already Exist!",
      });
    }
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All field are required!",
      });
    }

    const newUser = new User({
      username,
      email,
      password,
    });
    const saveUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "User Registered Successfully!",
      saveUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(421).json({
        success: false,
        message: "Email and Password is required",
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist!",
      });
    } else if (user) {
      res.status(200).json({
        success: false,
        message: "user login successfully!",
        user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
