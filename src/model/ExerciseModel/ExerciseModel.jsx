
export default class ExerciseModel {
    constructor(parseExercise) {
        this.id = parseExercise.id;
        this.name = parseExercise.get("name");
        this.image = parseExercise.get("image");
        this.muscles = parseExercise.get("muscles");
    }
}