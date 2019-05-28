# Cordova client cert test app with myp12 support on iOS

**AUTHOR:** [@brodybits (Christopher J. Brody aka Chris Brody)](https://github.com/brodybits)

**LICENSE:** Apache 2.0

**NOTE:** This project includes JQuery (2.2.4) and Bootstrap (3.3.6) under the MIT license.

**IMPORTANT:** Whitelist and intent items are omitted from this test app.

**NOTICE:** This test does not work on macOS ("osx") since it is not supported by `cordova-plugin-dialogs`.

## About

This app attempts to use client certificates to access <https://ccatesting.com/authenticate> which uses client certificate authentication. The response tells whether the server could read the client certificate and if the client certificate authentication was successful.

This app uses plugin installed from <https://github.com/cordova-ccafix/cordova-plugin-client-certificate-support> which supports file association for p12 client certificates with `myp12` extension on iOS.

This means that if the user tell an app such as Mail to open a `myp12` client certificate file with *this* app, the plugin in *this* app will register the client certificate file for subsequent use with the test server URL at <https://ccatesting.com/authenticate>. The user should see a confirmation that the server sees the certificate from the `myp12` file.

The server at <https://ccatesting.com/> was setup according to guidance from:

- <https://medium.com/@sevcsik/authentication-using-https-client-certificates-3c9d270e8326>
- <https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/>
- <https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca>
- <https://github.com/johannes-staehlin/cordova-client-cert-authentication/issues/7>

This app contains a couple client certificates in `www` directory, which is FOR TESTING PURPOSES ONLY (THIS SHOULD NEVER BE DONE IN PRODUCTION):

- `alice.p12` - generated based on the `ccatesting.com` server keys
- `bob.p12` - "self-generated" certificate

How to test `myp12` file association on iOS:

- copy `alice.p12` from `www` into another file with the following name: `alice.myp12`
- send `alice.myp12` to test iOS device, using email for example
- try opening `alice.myp12` from a program such as email, and tell the device to open the file with this test app
- this app will generate a log message that the `myp12` file was received and then register the certificate (with no password)
- try XHR request test; the response should indicate that the Alice certificate was used

## Dependencies

- Bootstrap (3.3.6) - included (MIT license)
- JQuery (2.2.4) - included (MIT license)
- `cordova-plugin-dialogs` - specified in `config.xml`

NOTE: `cordova-plugin-dialogs` was added using the `--save` flag to ensure that this plugin would be automatically installed. It is recommended to use the `--save` flags to add any other plugins rather than adding such plugins to git.

## To add another plugin

```shell
cordova plugin add my-plugin-id --save
```

## How to run

**Step 1:** Add the desired platform(s), for example:

```shell
cordova platform add android
```

**Step 2 (optional):** Do `cordova prepare` (may not be necessary but good to be on the safe side):

```shell
cordova prepare
```

**Step 3:** Run it on your mobile emulator or device, for example:

```shell
cordova run android
```

## Functionality

- Native alert dialog test
- register built-in `alice.p12` client certificate
- register built-in `bob.p12` client certificate
- try XHR request to <https://ccatesting.com/authenticate>

If the user opens a p12 client certificate with `myp12` extension with this app, the plugin installed from <https://github.com/cordova-ccafix/cordova-plugin-client-certificate-support> will register the client certificate. Response from  <https://ccatesting.com/authenticate> will show that the p12 client certificate with `myp12` extension was used.
