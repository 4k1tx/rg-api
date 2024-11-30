const Character = require("../schemas/characterSchema");

class CharacterService {
  async create(data, userId) {
    try {
      const character = await Character.create({
        ...data,
        user: userId,
      });
      return {
        ...character._doc,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async getByUser(userId) {
    try {
      const character = await Character.findOne({ user: userId });
      if (character) {
        return { status: 200, character };
      } else {
        return { status: 500, character: {} };
      }
    } catch (error) {
      console.log(error);
      return { status: 500, character: {} };
    }
  }

  async update(userId, data) {
    try {
      const character = await Character.findOneAndUpdate(
        { user: userId },
        data,
        { new: true }
      );
      if (character) {
        return { status: 200, character };
      } else {
        return { status: 500, character: {} };
      }
    } catch (error) {
      console.log(error);
      return { status: 500, character: {} };
    }
  }
}

module.exports = new CharacterService();
