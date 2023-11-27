import AsyncStorage from '@react-native-community/async-storage';
import { noop } from 'lodash-es';
import { Cache } from 'react-native-cache';

export default class RNCache {
  public static getInstance(): RNCache {
    if (!RNCache.instance) {
      RNCache.instance = new RNCache();
    }

    return RNCache.instance;
  }

  private static instance: RNCache;
  private cache: Cache;

  private constructor() {
    this.cache = new Cache({
      namespace: 'ecommerce-template',
      policy: {
        maxEntries: 1,
        stdTTL: 0
      },
      backend: AsyncStorage
    });
  }

  public set = async (key: string, value: string = ''): Promise<void> => {
    this.cache.set(key, value).catch(noop);
  }

  public get = async (key: string): Promise<string | undefined> => {
    return this.cache.get(key).catch(undefined);
  }

  public remove = async (key: string): Promise<void> => {
    this.cache.remove(key).catch(noop);
  }

  public peek = async (key: string): Promise<string | undefined> => {
    return this.cache.peek(key).catch(undefined);
  }

  public getAll = async (): Promise<Record<string, any>> => {
    return this.cache.getAll().catch(undefined);
  }

  public clearAll = async (): Promise<any> => {
    return this.cache.clearAll().catch(noop);
  }
}
