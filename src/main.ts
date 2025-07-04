import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule, FormsModule), // ✅ for ngModel & HttpClient
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
