import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'XX',
    userPoolId: 'XXX',
    userPoolWebClientId: 'XXX',
    mandatorySignIn: true,
  }
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
