# Cordova client cert test app

**AUTHOR:** [@brodybits (Christopher J. Brody aka Chris Brody)](https://github.com/brodybits)

**LICENSE:** Apache 2.0

**NOTE:** This project includes JQuery (2.2.4) and Bootstrap (3.3.6) under the MIT license.

**IMPORTANT:** Whitelist and intent items are omitted from this test app.

**NOTICE:** This test does not work on macOS ("osx") since it is not supported by `cordova-plugin-dialogs`.

## About

This app attempts to use client certificates to access a <https://ccatesting.com/authenticate> which uses client certificate authentication. The response tells whether the server could read the client certificate and if the client certificate authentication was successful.

This app uses <https://github.com/mwaylabs/cordova-plugin-client-certificate> which provides updated support for client certificates on iOS.

The server at <https://ccatesting.com/> was setup according to guidance from:

- <https://medium.com/@sevcsik/authentication-using-https-client-certificates-3c9d270e8326>
- <https://code.lengstorf.com/deploy-nodejs-ssl-digitalocean/>
- <https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca>
- <https://github.com/johannes-staehlin/cordova-client-cert-authentication/issues/7>

This app contains a couple client certificates in `www` directory, which is FOR TESTING PURPOSES ONLY (SHOULD NEVER BE DONE IN PRODUCTION):

- `alice.p12` - generated based on the `ccatesting.com` server keys
- `bob.p12` - "self-generated" certificate

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
