// src/configure-app.ts
import { INestApplication, VersioningType } from '@nestjs/common';

export function configureApp(app: INestApplication): void {
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // plus tard: pipes globaux, validation, etc.
}