
export default class WorkoutModel {
    constructor(parseWorkout) {
        this.id = parseWorkout.id;
        this.name = parseWorkout.get("name");
        this.level = parseWorkout.get("level");
        this.time = parseWorkout.get("time");
        this.exercises = parseWorkout.get("exercises");
    }
}