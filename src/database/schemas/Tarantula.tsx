export default class Tarantula {
  name: string;
  species: string;
  gender: "F" | "U" | "M";
  feeding_day: number;
  feeding_cicle: "Dias" | "Semanas" | "Meses";
  watering_day: number;
  watering_cicle: "Dias" | "Semanas" | "Meses";
  cleaning_day: number;
  cleaning_cicle: "Dias" | "Semanas" | "Meses";
  notes: string;

  constructor() {
    this.name = "";
    this.species = "";
    this.gender = "U";
    this.feeding_day = 1;
    this.feeding_cicle = "Dias";
    this.watering_day = 1;
    this.watering_cicle = "Dias";
    this.cleaning_day = 1;
    this.cleaning_cicle = "Dias";
    this.notes = "";
  }
}
