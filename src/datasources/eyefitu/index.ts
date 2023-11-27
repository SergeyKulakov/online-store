import { env } from '@brandingbrand/fsapp';
import { EyefituController } from './eyefitu.controller';

export const eyefituController = new EyefituController({
  baseURL: env.eyefitu.baseURL,
  headers: {
    'X-EFU-Token': env.eyefitu.apiKey
  }
});
