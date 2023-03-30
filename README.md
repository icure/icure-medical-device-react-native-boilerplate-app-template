# iCure MedTech React Native Template

## What includes this template ? 
- All dependencies needed to use the [iCure MedTech Typescript SDK](https://github.com/icure/icure-medical-device-js-sdk) in a React Native App
- First implementation of the authentication flow (Registration / Login)
- React Native Typescript initialization for Android and iOS
- Redux 
- MMKV
- TODO: Complete

## Requirements 
The following tools need to be installed on your machine: 
- Yarn
- Ruby
- XCode
- Android Studio 

:::note
XCode and Android Studio are needed in order to run your app on iPhone & Android emulators
:::

## Create your React Native App
To create your React Native App using the iCure MedTech template, execute the following command: 
```
npx create-react-native-app --template https://github.com/icure/icure-medical-device-react-native-boilerplate-app-template
```

It will ask you to provide a name for your app and will afterwards install all the dependencies using `yarn`. 
At the end of the process, you should have something similar to this: 

```
npx create-react-native-app --template https://github.com/icure/icure-medical-device-react-native-boilerplate-app-template
✔ What is your app named? … my-icure-app
✔ Downloaded and extracted project files.

Using Yarn to install packages. You can pass --use-npm to use npm instead.

✔ Installed JavaScript dependencies.

✅ Your project is ready!

To run your project, navigate to the directory and run one of the following yarn commands.

- cd my-icure-app
- yarn android
- yarn ios
- yarn web
```


## Start iOS
Go to your new app directory `cd my-icure-app` and start the app on a iOS emulator by running the command `yarn ios`. 

First time, you will be asked to provide the Bundle Identifier of your app. Afterwards, Expo will installs the Pods to execute your iOS App. 


Once it finishes, you should be able to see the Login Page with the logo of iCure. But before completing an authentication, you will have to : 
Complete the values of `config/constants.ts` file (Provide tutorial doc for that)


And that's it !


## Android 
*Note*: Before starting Android, make sure you started a Android device or follow expo tutorial to automatically start an Android Device: https://docs.expo.dev/workflow/android-studio-emulator/

Start android `yarn android`
- Provide the package name