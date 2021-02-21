import AsyncStorageProvider from "../providers/AsyncStorageProvider";

export interface TarantulaSchema {
  id: string;
  name: string;
  gender: string;
  species: string;
  notes: string;
  feeding_cicle: string;
  feeding_day: number;
  watering_cicle: string;
  watering_day: number;
  cleaning_cicle: string;
  cleaning_day: number;
}

export default class Tarantula {
  public async create(): Promise<TarantulaSchema> {
    const database = new AsyncStorageProvider();
    const id = new Date().valueOf().toString(16);
    const emptyData = {
      id,
      name: "",
      gender: "U",
      species: "",
      notes: "",
      feeding_cicle: "Semanas",
      feeding_day: 1,
      watering_cicle: "Semanas",
      watering_day: 1,
      cleaning_cicle: "Meses",
      cleaning_day: 1,
    };
    await database.save({
      key: "Tarantulas",
      data: emptyData,
    });

    return emptyData;
  }

  public async list(): Promise<TarantulaSchema[]> {
    const database = new AsyncStorageProvider();
    return await database.list({ key: "Tarantulas" });
  }
}
