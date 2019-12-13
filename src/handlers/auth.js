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
      this.successHandler(res, {data});
    } catch (e) {
      this.errorHandler(e, res);
    }
  }


  fetchCurrent = async (req, res) => {
    try {
      const token = req.headers.authorization
      const user = await DbHelper.getUserbyToken(token);
      if (!user) {
        throw { message: 'Invalid Username or passsword.' }
      }
      this.successHandler(res, {data : user});
    } catch (e) {
      this.errorHandler(e, res);
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
      this.successHandler(res, {data});
    } catch (e) {
      this.errorHandler(e, res);
    }
  }

  successHandler = (res, data) => {
    res.status(200).json(data);
  }

  errorHandler = (e, res) => {
    res.status(e.code || 400).json({ errorMessage: e.message });
  }

}

export default new Handlers();

