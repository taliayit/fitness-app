import Parse from 'parse';

export default class UserModel {
    #parseUser;
    constructor(parseUser) {
        this.id = parseUser.id;
        this.email = parseUser.get("email");
        this.#parseUser = parseUser;
    }

    static activeUser = null;

    static async login(email, pwd) {
        const parseUser = await Parse.User.logIn(email, pwd);
        UserModel.activeUser = new UserModel(parseUser);
        return UserModel.activeUser;
    }

    static async signup(email, password) {
        const user = new Parse.User()
        user.set('email', email);
        user.set('username', email);
        user.set('password', password);

        const parseUser = await user.signUp();
        UserModel.activeUser = new UserModel(parseUser);
        return UserModel.activeUser;
    }
}