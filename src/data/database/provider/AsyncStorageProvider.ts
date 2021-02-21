import AsyncStorage from "@react-native-async-storage/async-storage";

interface save {
  key: string;
  data: object[];
}

export default class AsyncStorageProvider {
  public async save({ key, data }: save) {
    try {
      const storaged = await AsyncStorage.getItem(key);
      if (!storaged) return;
      const storagedData = JSON.parse(storaged);
      const newData = [...storagedData, ...data];
      await AsyncStorage.setItem(key, JSON.stringify(newData));
    } catch (e) {
      // SAVING ERROR
    }
  }
}
