export default class Tarantula {
  public async createTarantula() {
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
  }
}
