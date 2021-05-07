
export default class UserModel {
    #parseUser;
    constructor(parseUser) {
        this.id = parseUser.id;
        this.email = parseUser.get("email");
        this.#parseUser = parseUser;
    }
}