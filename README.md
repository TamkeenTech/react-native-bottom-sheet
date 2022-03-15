# @TamkeenTech/react-native-bottom-sheet

A simple react native package for creating and using different kind of modals

## Demo

![Screen Record of the default sheet](https://github.com/TamkeenTech/react-native-bottom-sheet/blob/master/example/screenshots/sheet.gif?raw=true) ![Screen Record of a sticky sheet](https://github.com/TamkeenTech/react-native-bottom-sheet/blob/master/example/screenshots/sticky_sheet.gif?raw=true)

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

#### 1- Sheet

```jsx
import React from 'react';
import { Sheet } from '@tamkeentech/react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const DemoSheet = ({ show, onClose }) => {
  return (
    <Sheet
      contentContainerStyle={{ paddingHorizontal: 15 }}
      show={show}
      onClose={onClose}
    >
      <Label />
      <Paragraph />
      <Block />
    </Sheet>
  );
};
```

#### 2- Sticky Sheet

```jsx
import React from 'react';
import { StickySheet } from 'react-native-bottom-sheet';
import { Block, Label, Paragraph } from '../placeholder';

export const DemoSheet = () => {
  return (
    <StickySheet contentContainerStyle={{ paddingHorizontal: 15 }}>
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
    </StickySheet>
  );
};
```

## API

| Props                     | Sheet Type   | Type     | Description                                                  | Default                                           |
| ------------------------- | ------------ | -------- | ------------------------------------------------------------ | ------------------------------------------------- |
| offset                    | All          | number   | An extra translate area to be set at the bottom of the sheet | 0                                                 |
| childOffset               | Sticky Sheet | number   | A bottom offset area to be set for each direct child         | 0                                                 |
| onSnap                    | Sticky Sheet | function | A callback function excuted when the user removes his touch  |                                                   |
| delay                     | Sticky Sheet | number   | A delay added ONLY to the mounting animation                 | 0                                                 |
| SheetHeaderComponent      | All          | function | A custom header component for a sheet                        | Default header component shipped with the library |
| SheetHeaderComponentStyle | All          | object   |                                                              |                                                   |
| contentContainerStyle     | All          | object   |                                                              |                                                   |
| style                     | All          | object   |                                                              |                                                   |
| show                      | Sheet        | boolean  | Boolean to open/close the sheet                              | false                                             |
| dim                       | Sheet        | number   | Set the dim level for the sheet background                   | 0.8                                               |
| onClose                   | Sheet        | function | A callback function to be run upon closing the sheet         |                                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT ©

## Author

[ezziddin](https://github.com/ezziddin)
