import { isArray } from 'lodash-es';

export interface Unsubscribe {
  unsubscribe(): void;
}

export enum Events {}

type Callback = (data?: any) => void;

const event = () => {
  const subscribers: Record<string, Callback[]> = {};

  const publish = (eventName: string, data?: any) => {
    if (!isArray(subscribers[eventName])) {
      return;
    }

    subscribers[eventName].forEach((callback: Callback) => {
      callback(data);
    });
  };

  const subscribe = (eventName: string, callback: Callback): Unsubscribe => {
    if (!isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);

    const index = subscribers[eventName].length - 1;

    return {
      unsubscribe(): void {
        subscribers[eventName].splice(index, 1);
      }
    };
  };

  return {
    publish,
    subscribe
  };
};

export default event();
