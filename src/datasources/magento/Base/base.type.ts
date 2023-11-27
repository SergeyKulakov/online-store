import { BaseController } from './base.controller';

export type Constructor<T = BaseController> = new (...args: any[]) => T;
