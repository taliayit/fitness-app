import Parse from 'parse';
import WorkoutModel from '../Workout/WorkoutModel';

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

    static loadActiveUser() {
        UserModel.activeUser = Parse.User.current() ? new UserModel(Parse.User.current()) : null;
        return UserModel.activeUser;
    }

    static logout() {
        UserModel.activeUser = null;
        Parse.User.logOut();
    }

    async addWorkout(name, level, time, exercises) {
        const Workout = Parse.Object.extend('Workout');
        const newWorkout = new Workout();
        
        newWorkout.set('name', name);
        newWorkout.set('level', level);
        newWorkout.set('time', time);
        newWorkout.set('exercises',exercises);
        newWorkout.set('userId', this.#parseUser);

        const parseWorkout = await newWorkout.save();
        const workout = new WorkoutModel(parseWorkout);
        return workout;
    }

    async getMyWorkouts() {
        const Workout = Parse.Object.extend('Workout');
        const query = new Parse.Query(Workout);
        query.equalTo("userId", this.#parseUser);
        const parseWorkouts = await query.find();
        const workouts = parseWorkouts.map(parseWorkout => new WorkoutModel(parseWorkout));
        return workouts;
    }
}