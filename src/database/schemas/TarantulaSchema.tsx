import { ObjectSchema } from "realm";

export interface TarantulaDTO {
  name: string;
  species: string;
  gender: "F" | "M" | "U";
  feeding_day: number;
  feeding_cicle: "Dias" | "Semanas" | "Meses";
  watering_day: number;
  watering_cicle: "Dias" | "Semanas" | "Meses";
  cleaning_day: number;
  cleaning_cicle: "Dias" | "Semanas" | "Meses";
  notes: string;
}

export default class TarantulaSchema {
  static schema: ObjectSchema = {
    name: "Tarantula",
    primaryKey: "id",
    properties: {
      id: { type: "int", indexed: true },
      name: "string",
      species: "string",
      gender: "string",
      feeding_day: "int",
      feeding_cicle: "string",
      watering_day: "int",
      watering_cicle: "string",
      cleaning_day: "int",
      cleaning_cicle: "string",
      notes: "string",
    },
  };
}
