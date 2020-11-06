var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
var assert = require('assert');
var path = require('path');

var Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
var fs = require('fs');

var privateKey = config.privateKey;
var integratorKey = config.integratorKey;
// var IntegratorKeyImplicit = config.integratorKeyImplicit;
// var ClientSecret = config.clientSecr

// for production environment update to "www.docusign.net/restapi"
var basePath = restApi.BasePath.DEMO;
var oAuthBasePath = oAuth.BasePath.DEMO;

var accountId = '';
var userId = config.userId;
var RedirectURI = 'https://www.docusign.com/api';
var privateKeyFilename = 'keys/docusign_private_key.txt';
var expiresIn = 3600;

if (privateKey) {
  var buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(privateKey, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(privateKey, 'base64'); // Ta-da
  }

  var text = buf.toString('ascii');
  fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('SDK Unit Tests:', function (done) {
  var apiClient = new docusign.ApiClient({
    basePath: basePath,
    oAuthBasePath: oAuthBasePath
  });
  var scopes = [
    oAuth.Scope.IMPERSONATION,
    oAuth.Scope.SIGNATURE,
    oAuth.Scope.COMPANY_WRITE,
    oAuth.Scope.COMPANY_READ,
    oAuth.Scope.ROOMS_WRITE,
    oAuth.Scope.ROOMS_READ
  ];

  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    var oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (res) {
        var baseUri;
        apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

        // console.log(apiClient.getUserInfo(res.body.access_token));
        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            accountId = userInfo.accounts[0].accountId;
            baseUri = userInfo.accounts[0].baseUri;
            // apiClient.setBasePath(accountDomain[0] + '/restapi');
            // console.log('LoginInformation: ' + JSON.stringify(userInfo));
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
      })
      .catch(function (err) {
        if (err) {
          return done(err);
        }
      });
  });
  it('oAuthBasePAth should update whenever BasePath does and match the environment', function (done) {
    var apiClient = new docusign.ApiClient({
      basePath: restApi.BasePath.DEMO
    });
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);
    assert.notEqual(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.STAGE);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.STAGE);

    apiClient.setBasePath(restApi.BasePath.PRODUCTION);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.DEMO);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);

    return done();
  });
  /**
   *
   * New OAuth Methods Tests Start
   *
   */
  it('should be able to request a JWT user token', function (done) {
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (response) {
        assert.ok(response.body.access_token);
        done();
      })
      .catch(function (err) {
        return done(err);
      });
  });

  it('should be able to request a JWT application token', function (done) {
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTApplicationToken(integratorKey, scopes, privateKeyFile, expiresIn)
      .then(function (response) {
        assert.ok(response.body.access_token);
        done();
      }).catch(function (err) {
        return done(err);
      });
  });
  /**
   *
   * New Oauth Methods Tests End
   *
   */

  it('getRooms', function (done) {
    var roomsApi = new docusign.RoomsApi(apiClient);
    roomsApi.getRooms(accountId, null)
      .then(function (rooms) {
        if (rooms) {
          console.log('Rooms: ' + JSON.stringify(rooms));
          assert.ok(rooms.rooms[0]);
          done();
        }
      })
      .catch(function (error) {
        if (error) {
          return done(error);
        }
      });
  });
});
