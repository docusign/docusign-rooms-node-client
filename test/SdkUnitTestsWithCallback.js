var docusign = require('../src/index');
var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config = require('../test-config');
var assert = require('assert');
var path = require('path');

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

describe('SDK Unit Tests With Callbacks:', function (done) {
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
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn, function (err, res) {
      var baseUri;
      if (err) {
        return done(err);
      }
      apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

      apiClient.getUserInfo(res.body.access_token, function (err, userInfo) {
        if (err) {
          return done(err);
        }
        accountId = userInfo.accounts[0].accountId;
        baseUri = userInfo.accounts[0].baseUri;
        // apiClient.setBasePath(accountDomain[0] + '/restapi');
        console.log('LoginInformation: ' + JSON.stringify(userInfo));
        return done();
      });
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
    try {
      apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn, function (err, response) {
        if (err) {
          return done(err);
        }
        assert.ok(response.body.access_token);
        done();
      });
    } catch (err) {
      return done(err);
    }
  });

  it('should be able to request a JWT application token', function (done) {
    var fs = require('fs');
    var privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTApplicationToken(integratorKey, scopes, privateKeyFile, expiresIn, function (err, response) {
      if (err) {
        return done(err);
      }
      assert.ok(response.body.access_token);
      done();
    });
  });
  /**
   *
   * New Oauth Methods Tests End
   *
   */

  it('getRooms', function (done) {
    var roomsApi = new docusign.RoomsApi(apiClient);
    roomsApi.getRooms(accountId, null, function (error, rooms, response) {
      if (error) {
        return done(error);
      }

      if (rooms) {
        console.log('Rooms: ' + JSON.stringify(rooms));
        assert.ok(rooms.rooms[0]);
        done();
      }
    });
  });
});
