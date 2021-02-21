import AsyncStorage from "@react-native-async-storage/async-storage";

interface saveDTO {
  key: string;
  data: parsedData;
}

interface removeDTO {
  key: string;
  id: string;
}

interface parsedData {
  id: string;
}

export default class AsyncStorageProvider {
  public async save({ key, data }: saveDTO) {
    try {
      const storaged = await AsyncStorage.getItem(key);
      if (!storaged) return;
      const storagedData = JSON.parse(storaged);
      const filteredData = storagedData.filter(
        ({ id }: parsedData) => id !== data.id
      );
      const newData = [...filteredData, data];
      await AsyncStorage.setItem(key, JSON.stringify(newData));
    } catch (e) {
      // SAVING ERROR
    }
  }

  public async remove({ key, id }: removeDTO) {
    try {
      const storaged = await AsyncStorage.getItem(key);
      if (!storaged) return;
      const storagedData = JSON.parse(storaged);
      const newData = storagedData.filter((data: parsedData) => data.id !== id);
      await AsyncStorage.setItem(key, JSON.stringify(newData));
    } catch (e) {
      // SAVING ERROR
    }
  }
}
