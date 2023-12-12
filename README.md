## Events keypoints

- Handle events by passing function to element as prop.
- Event handlers must be passed, not called.
- Event handler functions can be separate or inline.
- Event handlers can access props of component.
- Event handlers can be passed as props to children.
- You can define your own event handler props.
- Events propagate upwards.
- Events may have unwanted default browser behavior.

## Forms keypoints

- Give a name to every <input>, for example <input name="firstName" defaultValue="Taylor" />. The name you specified will be used as a key in the form data, for example { firstName: "Taylor" }.
- By default, any <button> inside a <form> will submit it. This can be surprising! If you have your own custom Button React component, consider returning <button type="button"> instead of <button>. Then, to be explicit, use <button type="submit"> for buttons that are supposed to submit the form.
- If you pass value without onChange, it will be impossible to type into the input. When you control an input by passing some value to it, you force it to always have the value you passed. So if you pass a state variable as a value but forget to update that state variable synchronously during the onChange event handler, React will revert the input after every keystroke back to the value that you specified.
- You need to read e.target.checked rather than e.target.value for checkboxes.
- Unlike in HTML, passing a selected attribute to <option> is not supported. Instead, use <select defaultValue> for uncontrolled select boxes and <select value> for controlled select boxes.
