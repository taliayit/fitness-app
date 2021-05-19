import Parse from 'parse';

export default class WorkoutModel {
    constructor(parseWorkout) {
        this.id = parseWorkout.id;
        this.name = parseWorkout.get("name");
        this.level = parseWorkout.get("level");
        this.time = parseWorkout.get("time");
        this.exercises = parseWorkout.get("exercises");
    }

    async deleteWorkout() {
        console.log(this)
        const Workout = Parse.Object.extend('Workout');
        const query = new Parse.Query(Workout);

        const parseWorkout = await query.get(this.id);
        (await parseWorkout).destroy();
    }

}