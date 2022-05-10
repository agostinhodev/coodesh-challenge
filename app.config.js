export default {
    entryPoint: 'src/index.tsx',
    name: 'Pharma Inc',
    slug: 'coodesh-challenge-pharma-inc',
    version: '1.0.0',
    icon: 'src/assets/images/icon.png',
    splash: {
        image: 'src/assets/images/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#003461',
    },
    primaryColor: '#003461',
    updates: {
        fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
        supportsTablet: true,
        icon: 'src/assets/images/icon.png',
        supportsTablet: true,
        bundleIdentifier: 'com.coodesh.pharmainc',
        buildNumber: '1.0.0',
    },
    android: {
        adaptiveIcon: {
            foregroundImage: 'src/assets/images/adaptive-icon.png',
            backgroundColor: '#FFFFFF',
        },
        useNextNotificationsApi: true,
        package: 'com.coodesh.pharmainc',
        versionCode: 1,
        permissions: [],
    },
    web: {
        favicon: 'src/assets/images/favicon.png',
    },
    extra: {
        colors: {
            one: '#003461',
            two: '#0083CA',
            three: '#00AFAD',
            four: '#F26522',
            five: '#FCAF17',
            six: '#FFFFFF',
        },
    },
};
