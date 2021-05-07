
export default class MuscleModel {
    constructor(parseExercise) {
        this.id = parseExercise.id;
        this.name = parseExercise.get("name");
    }
}