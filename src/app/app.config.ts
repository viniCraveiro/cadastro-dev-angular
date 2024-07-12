import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { cadastrarDevsEffects } from './pages/cadastrar-dev/state/cadastrar-dev.effects';
import { reducers } from './reducers/app.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore(reducers),
    provideEffects(cadastrarDevsEffects),
    provideToastr({
      timeOut: 1000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    provideAnimations(),
  ]
};
