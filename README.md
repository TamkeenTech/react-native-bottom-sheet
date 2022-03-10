# @TamkeenTech/react-native-bottom-sheet

A simple react native package for creating and using different kind of modals

## Example

![Screen Record of a default sheet](https://github.com/TamkeenTech/react-native-bottom-sheet/blob/master/example/screenshots/default_sheet.gif?raw=true)

## Installation

1. Install **react-native-reanimatad 2**, for installation instructions please follow the below link:

   [expo](https://docs.expo.dev/versions/latest/sdk/reanimated/) or [react-native](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/).

2. Install **react-native-gesture-handler**, for installation instructions please follow the below link:

   [expo](https://docs.expo.dev/versions/latest/sdk/gesture-handler/) or [react-native](https://docs.swmansion.com/react-native-gesture-handler/docs/installation).

3. Finally, run the command:

```sh
   npm install react-native-bottom-sheet
```

## Usage and Example

### Basic Usage

```jsx
import React from 'react';
import { Sheet } from 'react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const DefaultSheet = () => {
  return (
    <Sheet contentContainerStyle={{ paddingHorizontal: 15 }}>
      {/* Child 1 */}
      <View>
        <Label />
        <Paragraph />
      </View>
      {/* Child 2 */}
      <View>
        <Label />
        <Paragraph num={1} />
        <Block />
      </View>
      {/* Child 3 */}
      <View>
        <Label />
        <Paragraph />
        <Block />
      </View>
    </Sheet>
  );
};
```

## API

| Props                     | Type     | Description                                                 | Default                                           |
| ------------------------- | -------- | ----------------------------------------------------------- | ------------------------------------------------- |
| offset                    | number   | A padding area to be set at the bottom of the sheet         | 0                                                 |
| childOffset               | number   | A bottom offset area to be set for each direct child        | 0                                                 |
| onUpdate                  | function | A callback function excuted when the user removes his touch |                                                   |
| SheetHeaderComponent      | function | A custom header component for the sheet                     | Default header component shipped with the library |
| SheetHeaderComponentStyle | object   |                                                             |                                                   |
| style                     | object   |                                                             |                                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT ©

## Author

[ezziddin](https://github.com/ezziddin)
