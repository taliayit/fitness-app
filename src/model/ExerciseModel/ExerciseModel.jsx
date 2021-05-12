
export default class ExerciseModel {
    // constructor(parseExercise) {
    //     this.id = parseExercise.id;
    //     this.name = parseExercise.get("name");
    //     this.image = parseExercise.get("image");
    //     this.muscles = parseExercise.get("muscles");
    // }
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
}