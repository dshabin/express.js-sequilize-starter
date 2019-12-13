import bcrypt from 'bcrypt-nodejs';
import {database} from '../index';


class DbHelper {

    signup = async (username, password) => {
        try {
            const hash = bcrypt.hashSync(password.trim());
            let user = await database.User.create({ username, password: hash });
            user = user.toJSON();
            delete user.password;
            let token = await database.Token.create({ user_id: user.id, key: (Math.random().toString(36).substring(7)).toString() });
            token = token.toJSON().key;
            return { user, token };
        } catch (e) {
            console.log(e);
            throw { message: e.message };
        }
    }

    getUserbyToken = async (token) => {
        try {
            let user = await database.Token.findOne({
                where : { key : token} , include: [{
                    model: database.User,
                  }]
            });
            user = user.toJSON();
            delete user.User.password;
            return user.User;
        } catch (e) {
            console.log(e);
            throw { message: e.message };
        }
    }

    login = async (username, password) => {
        try {
            let user = await database.User.findOne({ where: { username } });
            if (!user) {
                return null
            }
            user = user.toJSON();
            const isMatch = bcrypt.compareSync(password, user.password);
            if (isMatch) {
                let token = await database.Token.findOrCreate({ where: { user_id: user.id } });
                token = token[0].toJSON().key;
                delete user.password;
                return { user, token };
            } else {
                return null;
            }
        } catch (e) {
            console.log(e);
            throw { message: e.message };
        }
    }
}

export default new DbHelper();
