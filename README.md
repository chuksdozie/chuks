## Demo Preview

![Demo](https://ik.imagekit.io/akf2tcskl/chuks_app_2_IwTKCEoUz.gif)

This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Setting up your ENV

First, duplicate the _.envExample_ file and rename it to _.env_

Next, Set up your environment on [Auth0](https://auth0.com/)

Paste your keys in the _.env_ file, especially the ones for Auth0

To start Metro, run the following command from the _root_ of your React Native project:

```bash
AUTH0_CLIENT_ID= YOUR_AUTH0_CLIENT_ID
AUTH0_DOMAIN= YOUR_AUTH0_DOMAIN
```

## Step 2: Install your Packages and Dependencies

```bash
# using npm
npm install

# OR using Yarn
yarn
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Native Android Module Description

I developed two native Android modules to enhance React Native applications:

### Battery Module:

Retrieves the current battery level and charging status.
Exposed this data to JavaScript, allowing seamless integration with the React Native interface.
[see implementation here](https://github.com/chuksdozie/chuks/pull/2)

### Device Info Module:

Fetches device-specific details like model, brand, and manufacturer.
Made this information accessible via JavaScript, enabling dynamic display on the home screen.
Both modules ensure proper handling of permissions and utilize Android APIs effectively to bridge the native and JavaScript environments. [see implementation here](https://github.com/chuksdozie/chuks/pull/1)

## Android Build Configuration with react-native-config

To streamline the configuration of environment-specific settings (such as API keys, feature flags, or external SDK parameters), we utilized react-native-config. Below is a breakdown of the changes made to the Android Gradle build files:

#### Steps Taken:

- Installed react-native-config: The library was added to the project to manage environment variables effectively:

```bash
npm install react-native-config
```

- Integrated dotenv.gradle: In _android/app/build.gradle_, the following line was added to include the dotenv.gradle script. This script allows loading variables from .env files into the Android build process:

```bash
apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"
```

#### Benefits of Using react-native-config:

- Centralized Configuration: Maintains all environment-specific variables in .env files.
- Secure and Clean Build: Prevents hardcoding sensitive information directly in the codebase.
- Flexibility: Easily adapts to different environments (e.g., development, staging, production).

## React Native vs. React Web: What's the Difference?

When building apps, React Native and React Web share some DNA—they both use React principles like components and state management. However, they’re tailored for very different environments: the web and mobile devices.

---

#### 1. **How They Work**

- **React Web**:

  - Runs in a browser and relies on HTML, CSS, and the DOM. It uses the **virtual DOM** to make updates efficient.
  - Think of it like painting on a canvas (the browser window)—everything is built using web standards.

- **React Native**:
  - Ditches the DOM and HTML entirely. Instead, it uses native UI components, like `View` (Android) and `UIView` (iOS), so your app looks and feels native.
  - A **bridge** connects JavaScript code to native code, making it possible to use platform-specific APIs.

---

#### 2. **The Bridge: Connecting Two Worlds**

React Native’s bridge is key to how it works:

- Your JavaScript code talks to native modules (like the camera or GPS) through the bridge.
- The communication is asynchronous, meaning the app stays responsive, but too much back-and-forth can slow things down.
- Newer tools like **Hermes** (a JavaScript engine) and libraries like **Reanimated** help optimize performance by reducing reliance on the bridge.

---

#### 3. **Android-Specific Challenges**

Building for Android in React Native brings unique considerations:

- **Gradle Setup**: Your `build.gradle` files handle dependencies and configurations. You may need to adjust them for custom native modules or environmental variables.
- **Permissions**: Android apps often need explicit permissions (e.g., accessing storage or location).
- **Debugging**: Tools like `adb logcat` and the React Native Debugger are your best friends for troubleshooting.

---

#### 4. **How Development Feels**

Here’s a quick comparison:

| Feature             | React Web               | React Native                  |
| ------------------- | ----------------------- | ----------------------------- |
| **UI Components**   | HTML, CSS               | Native UI (View, Text, etc.)  |
| **Styling**         | CSS                     | Inline styles or libraries    |
| **Build Process**   | Webpack, Vite           | Gradle (Android), Xcode (iOS) |
| **Performance**     | Virtual DOM             | Native rendering              |
| **Platform Access** | Limited to browser APIs | Full access to device APIs    |

---

#### 5. **Key Takeaways**

React Native bridges the gap between JavaScript and native mobile development. While React Web is focused on browsers, React Native integrates with mobile platforms, making it a powerful tool for creating apps that feel native without needing to write Java or Swift.

If you’re coming from a web development background, React Native will feel familiar but introduce you to new challenges—like managing the bridge and dealing with platform-specific quirks.
