# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.

- The user presses the 1 button.
- The `onClick` event gets activated, resulting in the invocation of the `handleAddOne` function.
- The `handleAddOne` function dispatches the returned value from the function `addOne`, which returns the object `{ type: ADD_ONE }`. `ADD_ONE`'s value is a the string equivalent of itself.
- The dispatched value passes through `reducer`'s switch statement, and matches to the `ADD_ONE` case, which results in setting the `state.total` to itself, plus one.
- `TotalDisplay` shows the total plus 1.
