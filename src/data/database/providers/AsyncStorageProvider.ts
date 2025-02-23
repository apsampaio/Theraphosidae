import AsyncStorage from "@react-native-async-storage/async-storage";

interface saveDTO {
  key: string;
  data: parsedData;
}

interface removeDTO {
  key: string;
  id: string;
}

interface listDTO {
  key: string;
}

interface initDTO {
  keys: string[];
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
      return newData;
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
      return newData;
    } catch (e) {
      // SAVING ERROR
    }
  }

  public async list({ key }: listDTO) {
    try {
      const storaged = await AsyncStorage.getItem(key);
      if (!storaged) return [];
      return JSON.parse(storaged);
    } catch (e) {
      // SAVING ERROR
    }
  }

  public async init({ keys }: initDTO) {
    keys.map(async (key) => {
      try {
        const exist = await AsyncStorage.getItem(key);
        if (!exist) {
          await AsyncStorage.setItem(key, JSON.stringify([]));
        }
      } catch (e) {
        // SAVING ERROR
      }
    });
  }
}
