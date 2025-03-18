## Assets

<img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/logo.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/filled-logo.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/logo-inverted.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/filled-hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/half-filled-hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/spinning-hanger.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/circle-user-round.svg" width="170"/> <img src="https://github.com/magnusgbjerke/tcs-ui/blob/main/assets/shopping-cart.svg" width="170"/>

## Components

### Button

**Props**

| Property   | Type                                       | Default value | Description                                                                  |
| ---------- | ------------------------------------------ | ------------- | ---------------------------------------------------------------------------- |
| children   | React.ReactNode                            | -             | Pass elements or content between the opening and closing tags the component. |
| className? | string                                     | -             | A string for custom CSS classes to override or extend styles.                |
| disabled?  | boolean                                    | false         | A boolean to indicate whether the component is disabled.                     |
| size?      | "sm", "md" or "lg"                         | md            | Specifies the size of the button.                                            |
| onClick    | React.MouseEventHandler<HTMLButtonElement> | -             | Function triggered on click events.                                          |

### Hanger Rating

**Props**

| Property      | Type                    | Default value | Description                                                                           |
| ------------- | ----------------------- | ------------- | ------------------------------------------------------------------------------------- |
| averageRating | number                  | -             | Rating/score between 1 and 5(eg. 2.11, 3.66 or 4.78).                                 |
| disabled?     | boolean                 | false         | A boolean to indicate whether the component is disabled.                              |
| onClick       | (index: number) => void | -             | Function triggered on click events. Index is the index of hangers from left to right. |
| width?        | number                  | 100           | Width of component.                                                                   |

### Stock Indicator

**Props**

| Property | Type   | Default value | Description                                                                                                                                      |
| -------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| stock    | number | -             | How many items in stock. 0 in stock makes the indicator red. 5 or less in stock makes the indicator yellow. 5 or more makes the indicator green. |

### Card

**Props**

| Property | Type                                       | Default value | Description                                                                  |
| -------- | ------------------------------------------ | ------------- | ---------------------------------------------------------------------------- |
| children | React.ReactNode                            | -             | Pass elements or content between the opening and closing tags the component. |
| img      | string                                     | -             | Image that is going to be displayed.                                         |
| onClick? | React.MouseEventHandler<HTMLButtonElement> | -             | Function triggered on click events.                                          |
| pointer? | boolean                                    | false         | A boolean to indicate whether pointer is disabled.                           |

### Searchbar

**Props**

| Property    | Type                             | Default value | Description                                                                 |
| ----------- | -------------------------------- | ------------- | --------------------------------------------------------------------------- |
| placeholder | string                           | -             | -                                                                           |
| data        | any[]                            | -             | Pass an array of params that the user can search for.                       |
| onSearch    | (query: string) => void          | -             | Function triggered on search events. Query is the query the user is making. |
| onChange    | (query: string) => void          | -             | Function triggered when changes happen.                                     |
| onClick     | (query: any) => void             | -             | Function triggered when clicking on object in ul.                           |
| size?       | "xs", "sm", "md", "lg" or "full" | md            | Specifies the size of the searchbar.                                        |
