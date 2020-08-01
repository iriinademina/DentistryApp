import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Amplify from 'aws-amplify';
import { environment } from './environments/aws.environment'

Amplify.configure({
  Auth: {
    region: environment.auth.region,
    userPoolId: environment.auth.userPoolId,
    userPoolWebClientId: environment.auth.userPoolWebClientId,
    mandatorySignIn: environment.auth.mandatorySignIn
  }
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
