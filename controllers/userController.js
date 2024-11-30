const userService = require("../services/userService");

class UserController {
  async create(req, res, next) {
    try {
      const user = await userService.create(req.body);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const data = await userService.login(username, password);
      return res.json(data);
      // return res.json({ status: 200, data: user });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserController();
