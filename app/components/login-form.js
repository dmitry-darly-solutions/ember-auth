import {inject as service} from '@ember/service';
import Component from '@ember/component';
import config from '../config/environment';

export default Component.extend({
  session: service('session'),

  actions: {
    authenticateWithGoogleImplicitGrant() {
      let clientId = config.googleClientID;
      let redirectURI = `${window.location.origin}/callback`;
      let responseType = `token`;
      let scope = `email`;
      window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?`
        + `client_id=${clientId}`
        + `&redirect_uri=${redirectURI}`
        + `&response_type=${responseType}`
        + `&scope=${scope}`
      );
    }
  }
});
