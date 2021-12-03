fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew install fastlane`

# Available Actions
## iOS
### ios ios_staging
```
fastlane ios ios_staging
```
iOS deploy to TestFlight

----

## Android
### android android_staging
```
fastlane android android_staging
```
Android assemble release version
### android android_release_bundle
```
fastlane android android_release_bundle
```
Android bundle release version

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
