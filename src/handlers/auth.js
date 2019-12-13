import DbHelper from '../db/dbHelpers'

class Handlers {

  signup = async (req, res) => {
    try {
      const { body } = req;
      const username = body.username;
      const password = body.password;
      const userWithToken = await DbHelper.signup(username, password);
      const data = userWithToken.user;
      data.token = userWithToken.token;
      res.json(data);
    } catch (e) {
      res.json({ error: e.message });
    }
  }


  fetchCurrent = async (req, res) => {
    try {
      const token = req.headers.authorization
      const user = await DbHelper.getUserbyToken(token);
      if (!user) {
        res.json({ message: 'Invalid Username or passsword.'})
      }
      res.json(user);
    } catch (e) {
      res.json({ error: e.message });
    }
  }

  login = async (req, res) => {
    try {
      const { body } = req;
      const username = body.username;
      const password = body.password;
      const userWithToken = await DbHelper.login(username, password);
      if (!userWithToken) {
        throw { message: 'Invalid Username or passsword.' }
      }
      const data = userWithToken.user;
      data.token = userWithToken.token;
      res.json(data);
    } catch (e) {
      res.json({ error: e.message });
    }
  }
}

export default new Handlers();

