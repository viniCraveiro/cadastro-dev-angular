import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { reducers } from './reducers/app.reducer';
import { findAllDevsEffect } from './pages/cadastrar-dev/state/cadastrar-dev.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(reducers),
    provideEffects({ findAllDevsEffect })
  ]
};
