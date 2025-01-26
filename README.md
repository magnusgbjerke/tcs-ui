## Assets

<img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/logo.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/filled-logo.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/logo-inverted.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/filled-hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/half-filled-hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/src/assets/spinning-hanger.svg" width="170"/>

## Components

### Button

**Props**

| Property   | Type               | Default value | Description                                                                  |
| ---------- | ------------------ | ------------- | ---------------------------------------------------------------------------- |
| children   | React.ReactNode    | -             | Pass elements or content between the opening and closing tags the component. |
| className? | string             | -             | A string for custom CSS classes to override or extend styles.                |
| disabled?  | boolean            | false         | A boolean to indicate whether the component is disabled.                     |
| size?      | "sm", "md" or "lg" | md            | Specifies the size of the button.                                            |
| onClick    | () => void         | -             | Function triggered on click events.                                          |

### Hanger Rating

**Props**

| Property      | Type                    | Default value | Description                                                                           |
| ------------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------- |
| averageRating | float                   | -             | Rating/score between 1 and 5(eg. 2.11, 3.66 or 4.78).                                 |
| disabled?     | boolean                 | false         | A boolean to indicate whether the component is disabled.                              |
| onClick       | (index: number) => void | -             | Function triggered on click events. Index is the index of hangers from left to right. |

### Stock Indicator

**Props**

| Property | Type   | Default value | Description                                                                                                                                      |
| -------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| stock    | number | -             | How many items in stock. 0 in stock makes the indicator red. 5 or less in stock makes the indicator yellow. 5 or more makes the indicator green. |

### Card

**Props**

| Property | Type            | Default value | Description                                                                  |
| -------- | --------------- | ------------- | ---------------------------------------------------------------------------- |
| children | React.ReactNode | -             | Pass elements or content between the opening and closing tags the component. |
| img      | string          | -             | Image that is going to be displayed.                                         |
