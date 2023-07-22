# 머무름

기도하며 머무는 앱

## Install Process

[Use TypeScript](https://docs.expo.dev/guides/typescript/)

## Webview

[React Native WebView Guide](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#react-native-webview-guide)

## EAS Build

### App Store에 배포

https://docs.expo.dev/build/setup/#build-for-app-stores

### 테스트 빌드

#### Android

eas.json에 있는 build.preview 옵션에 따라 expo에 build

`eas build -p android --profile preview` 또는 `yarn build:preview`

https://docs.expo.dev/build-reference/apk/

#### IOS

https://docs.expo.dev/build-reference/simulators/

## Etc References

- [Safe Area Context](https://docs.expo.dev/versions/latest/sdk/safe-area-context/)

## Environment

### 에러 해결 방법

- 터미널을 껐다 켜기
- `yarn start`에 `--clear` 옵션 넣기
- `babel.config.js`에 `api.cache(false)`로 바꾸기

### History

- 다음 명령어로 start를 할 경우 production build로 인식해서 인지 hermes 등의 에러가 발생한다. `NODE_ENV=production npx expo start --clear` development도 마찬가지다. 이 이유로 .env.prod 등을 사용했다.
