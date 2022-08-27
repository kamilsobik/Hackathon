import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://9ed6-185-78-75-249.ngrok.io/';
  namespace = 'api/1';
}

//     return {
//       'API_KEY': 'owner-secret',
//       'ANOTHER_HEADER': 'NyGI7vKYc2'
//     };
//   }
