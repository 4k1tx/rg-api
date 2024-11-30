const User = require("../schemas/userSchema");

class UserService {
  async create(data) {
    try {
      const candidate = await User.findOne({ username: data.username });
      if (candidate) {
        throw error("User is already exists");
      } else {
        await User.create(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async login(username, password) {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        throw error("Invalid username");
      } else {
        const isPasswordEquals = password === user.password;
        if (!isPasswordEquals) {
          throw error("Invalid password");
        } else {
          return { status: 200, user };
        }
      }
    } catch (error) {
      console.log(error);
      return { status: 500, user: {} };
    }
  }
}

module.exports = new UserService();
