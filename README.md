
# react-native-cz-image-placeholder

## Getting started

`$ npm install react-native-cz-image-placeholder --save`

### Mostly automatic installation

`$ react-native link react-native-cz-image-placeholder`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-cz-image-placeholder` and add `RNCzImagePlaceholder.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCzImagePlaceholder.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.chenzhe.imageplaceholder.RNCzImagePlaceholderPackage;` to the imports at the top of the file
  - Add `new RNCzImagePlaceholderPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-cz-image-placeholder'
  	project(':react-native-cz-image-placeholder').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-cz-image-placeholder/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-cz-image-placeholder')
  	```


## Usage
```javascript
import RNCzImagePlaceholder from 'react-native-cz-image-placeholder';

// TODO: What to do with the module?
RNCzImagePlaceholder;
```
  