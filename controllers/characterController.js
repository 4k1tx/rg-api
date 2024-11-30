const characterService = require("../services/characterService");
class CharacterController {
  async create(req, res, next) {
    try {
      const data = req.body;
      const userId = req.query.userId;
      const character = await characterService.create(data, userId);
      return res.json(character);
    } catch (error) {
      next(error);
    }
  }

  async getByUser(req, res, next) {
    try {
      const userId = req.params.userId;
      const character = await characterService.getByUser(userId);
      return res.json(character);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = req.body;
      const userId = req.params.userId;
      const character = await characterService.update(userId, data);
      return res.json(character);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CharacterController();
