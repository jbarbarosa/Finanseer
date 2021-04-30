import User from "../../../models/userModel.js";

const findUserByEmail = async (email, shouldReturnPassword) => {
  if (shouldReturnPassword) {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return false;
    return user;
  } else {
    const user = await User.findOne({ email });
    if (!user) return false;
    return user;
  }
}

export default findUserByEmail;
