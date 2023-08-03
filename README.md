# 머무름

기도하며 머무는 앱

## Install Process

[Use TypeScript](https://docs.expo.dev/guides/typescript/)

## Webview

[React Native WebView Guide](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#react-native-webview-guide)

## Development

### [NextJS](https://github.com/socratone/stay-with)

- env의 `NEXT_PUBLIC_BASE_URL` 을 IP 주소로 바꾼다.\
  `http://192.168.???.???:3000`
- `-H` 에 IP 주소를 넣어서 실행한다.\
  `next dev -H 192.168.???.???`

### React Native

- .env.dev 환경변수를 사용해서 실행한다.\
  `yarn start:dev`

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

### .env.dev

```
BASE_URL="http://192.168.???.???:3000"
```

### .env.prod

```
BASE_URL="https://staywith.kr"
```

### 에러가 발생할 때 해결 방법

- 터미널을 껐다 켜기
- `yarn start`에 `--clear` 옵션 넣기
- `babel.config.js`에 `api.cache(false)`로 바꾸기

### History

다음 명령어로 start를 할 경우 production build로 인식해서 인지 hermes 등의 에러가 발생한다.\
 `NODE_ENV=production npx expo start --clear`\
 development도 마찬가지다.\
 이 이유로 .env.production이 아닌 .env.prod 등을 사용했다.
