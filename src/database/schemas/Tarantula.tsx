import { ObjectSchema } from "realm";

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
