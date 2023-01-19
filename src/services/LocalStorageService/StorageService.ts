import AsyncStorage from '@react-native-async-storage/async-storage';

import {DATALOCATIONS} from './DataLocations.enum';

export class StorageService {
  // Writes to storage
  static async doSave(location: DATALOCATIONS | string, data: any) {
    if (!location)
      throw new Error('save@StorageService: Location is undefined');

    if (!data) throw new Error('save@StorageService: Data is undefined');

    const parsedData = JSON.stringify(data);

    // Save to storage
    await AsyncStorage.setItem(location, parsedData);
  }

  // Reads stored data
  static async doLoad(
    location: DATALOCATIONS | string,
  ): Promise<any | undefined> {
    if (!location)
      throw new Error('load@StorageService: Location is undefined');

    // Get from storage
    const readedData = await AsyncStorage.getItem(location);

    let data;
    if (readedData) data = JSON.parse(readedData);

    return data;
  }

  // Deletes stored data
  static async doDelete(location: DATALOCATIONS | string) {
    if (!location)
      throw new Error('delete@StorageService: Location is undefined');

    await AsyncStorage.removeItem(location);
  }
}
