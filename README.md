<p align="center">
    <a href="https://docs.icure.com">
        <img alt="icure-your-data-platform-for-medtech-and-ehr" src="https://icure.com/assets/icons/logo.svg">
    </a>
    <h1 align="center">iCure MedTech React Native Template</h1>
</p>

Start working on your e-health React Native app with iCure in a few minutes, by using our dedicated React Native template: 
```
npx create-react-native-app --template https://github.com/icure/icure-medical-device-react-native-boilerplate-app-template
```

Once your app is created, complete the following values of the file `config/constants.ts`: 
- **MSG_GW_SPEC_ID**,
- **EMAIL_AUTHENTICATION_PROCESS_ID** and/or **SMS_AUTHENTICATION_PROCESS_ID**,
- **FRIENDLY_CAPTCHA_SITE_KEY**,
- **PARENT_HEALTHCARE_PROFESSIONAL_ID** (Optional)

Check out our [Quick Start](https://docs.icure.com/sdks/quick-start/) in order to know what are those information and how to get them from our [Cockpit Portal](https://cockpit.icure.cloud/).

*WARNING: Without these information, you won't be able to complete an authentication*

Not familiar with `npx create-react-native-app` ? Have a look to their [repository](https://github.com/expo/create-react-native-app).

Looking for React template instead ? Head [here](https://github.com/icure/icure-medical-device-react-js-boilerplate-app-template).


## Requirements 
Make sure the following tools are installed on your machine: 
- **Yarn Package manager**
- **Ruby**, same version than referenced in the `.ruby-version` file at the root of the template. 
- **XCode**
- **Android Studio**

*Note: XCode and Android Studio are needed in order to run your app on iPhone & Android emulators*


## Which technologies are used ?
This React Native Template is based on the same technologies as our [Petra example app](https://github.com/icure/icure-medical-device-react-native-app-tutorial). Meaning this template includes the use of: 
- [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html), as a language
- [Redux](https://redux.js.org/introduction/getting-started), as a state container
- [MMKV](https://github.com/Tencent/MMKV), as a key-value storage
- [FriendlyCaptcha](https://friendlycaptcha.com/), as a CAPTCHA solution

We chosed this set of technologies, because we consider them as the most efficient ones to work with. 
Nonetheless, you can of course work with the technologies of your choices and still integrate the iCure MedTech Typescript SDK in your React Native app.

## What includes this template ? 
All the needed dependencies to work with iCure in a React Native app, including:
- the [iCure MedTech Typescript SDK](https://github.com/icure/icure-medical-device-js-sdk) 
- the [iCure React Native Cryptography](https://github.com/icure/icure-react-native-cryptography) libraries

This template also includes the implementation of the [iCure authentication flow](https://docs.icure.com/sdks/how-to/how-to-authenticate-a-user/how-to-authenticate-a-user) (Both registration and login).  

## What's next next ? 
Check out our [MedTech Documentation](https://docs.icure.com/sdks/quick-start/react-native-quick-start) and more particularly our [How To's](https://docs.icure.com/sdks/how-to/index), in order to start implementing new functionalities inside your React Native App ! 