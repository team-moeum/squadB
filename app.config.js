import "dotenv/config";

export default {
  expo: {
    name: "stocky",
    slug: "stocky",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    runtimeVersion: {
      policy: "sdkVersion"
    },
    updates: {
      url: "https://u.expo.dev/b676e53b-10db-4a53-b056-44d67c1fbf07"
    },
    ios: {
      bundleIdentifier: "com.moeum.stocky",
      buildNumber: "1",
      supportsTablet: true,
      entitlements: {
        "com.apple.developer.networking.wifi-info": true
      }
    },
    android: {
      package: "com.moeum.stocky",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    plugins: [
      "expo-asset",
      "expo-font",
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ],
      "expo-build-properties"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "b676e53b-10db-4a53-b056-44d67c1fbf07"
      }
    },
    owner: "moeum"
  }
};
