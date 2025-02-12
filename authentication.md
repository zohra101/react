# Authentication

### Sign In Modal
1. Create SigninModal with a unique id
2. Convert the modal from `<div>` to `<form>` with `onSubmit={handleSubmit}`
3. Convert the button type to `"submit"`
4. Create `SignInContent` for the form inputs
5. Let `handleSubmit` extract the input values, `close` the modal, and `reset` the form

### Authentication Feedback - Error
- Add feedback for when the email and password don't match
1. In `SignInModal`, create a state variable to store an error message
2. As a `prop`, pass the error message to `Sign InContent`
3. Let `SignInContent `render the error message

NOTE: Let the parent do the "thinking" while the child "exhibits" the desired behavior

### Authentication Feedback - Conditional
- Add a condition that determines the proper feedback
  
1. In `handleSubmit`, add a Boolean variable called `isAuthenticated`
2. If `isAuthenticated` is `true`, reset and close the form
3. If `isAuthenticated` is `false`, set the error message

```jsx
const isAuthenticated = true;
    if (isAuthenticated) {
        const closeButton = document.getElementById("signInCloseButton");
        closeButton.click();
        inputs.reset();
    } else setErrorMessage("The email and password do not match.");
```
    
### Authentication Simulation - Logins
- To simulate authentication, create a list of logins
1. Create a module called `logins.js`
2. Let it export an array
3. Add objects, each with an email and password

```jsx 
 export const logins = [
    [{ email: "abc@logins.com", password: "aaa" }],
    [{ email: "123@logins.com", password: "bbb" }],
    [{ email: "abc123@logins.com", password: "ccc" }],
];   
```

### Authentication Simulation - Verification
- Verify that the email and password in the form are in the list of logins
  
1. Create the module `authenticationSimulation.js`
2. Let the function accept an email and password
3. Let it loop through the logins for a matching email and password
4. If there is a match, let the module return true, otherwise, return false.
```jsx
export function authenticationSimulation(email = "", password = "") {
    for (let position = 0; position < logins.length; position++) {
        const login = logins[position];
        const currentEmail = login.email;
        currentPassword = login.password;
        if (email === currentEmail && password === currentPassword) return true;
    }
    return false;
}
```
### Authentication Simulation - setup
- Verify that the email and password in the form are in the list of logins.

1.  Create the module `authenticationSimulation.js`
2.  Let the function accept an email and password.
3.  In `SignInModal` let `handleSubmit` call `authenticationSimulation`.

### Authentication Simulation - Verification
- Verify that the email and password in the form are in the list of logins

1. Let `authenticationSimulation` loop through the logins
2. Extract the email and password from each login
3. If the email and password from the parameters match the login, return `true`
4. If no match was found, return `false` after the loop

### Authentication Simulation - Feedback
- Apply the proper feedback if the credentials are correct or not

1. Let `handleSubmit` use the return value from `authenticatonSimulation`
2. If the credentials are correct, close and reset the sign in modal
3. If the credentials are not correct, display an error

### Sign-Out Modal
1. Create `SignOutModal` with a unique `id`
2. Render `SignOutModal` from a parent component (like Navbar)
3. Convert the modal from `<div>` to `<form>` with `onSubmit=(handleSubmit)`
4. Edit the content and convert the confirmation button `type="submit"`
5. Let `handleSubmit` close the modal
   
### Unmount and mount the correct buttons - Refactor
- When a user signs in, the sign in buttons should be replaced by the sign out button.
- Create a component to manage this process.

1.  Create a component `SignInArea`.
2.  Move `SignInModal` and `SignOutModal` to `SignInArea`.
3.  Render `SignInArea` from the parent component.

### Unmount and mount the correct buttons - Setup

1. In `SignInArea`, add a state variable `button` and store empty tags in it.
2. Track the mount phase with `componentDidMount`.
3. In `componentDidMount`. let `button` store `SignInModal` or `SignOutModal`.
4. Render `button` instead of `SignInModal` and `SignOutModal`.

### Unmount and mount the correct buttons - Conditional

1. Create a Boolean state variable `isSignedIn`.
2. Add a condition to `componentDidMount`.
3. If `isSignedIn` is `true`, let `button` render `SignOutModal`.
4. If `isSignedIn` is `false`, let `button` render `SignInModal`.

### Communicate the sign-in with the parent component
`<SignInModal onSignIn={setIsSignedIn}/>`

- Callbacks let the child communicate with the parent component.
- `SignInModal` should indicate to the parent component when there is a sign-in.

1. In the parent component, let `SignInModal` have `onSignIn={handleSignOut}`
2. Let `handleSignIn` properly set `isSignedIn` to `true`.
3. In `SignInModal`, add a prop `onSignIn` which stores a callback function.
4. Use `onSignIn` in `handleSubmit` when there is a sign-in.

### Update the parent
`useEffect(componentDidUpdate, [isSignedIn]);`

- Parent components need `componentDidUpdate` to render changes.

1. In `SignInArea`, track `isSignedIn` with `componentDidUpdate`.
2. Add the state variable `didMount` and use it with the mount and update phases.
3. Use `console.log` to verify the phases are properly tracked.
4. Copy the condition for `isSignedIn` to `componentDidUpdate`.

### Communicate the sign-out with the parent component
- `SignOutModal` should indicate to the parent component when there is a sign-out
- 
    1. In the parent component, let `SignOutModal` have `onSignOut={handleSignOut}`
    2. Let  `handleSignOut` properly set `isSignedIn` to false
    3. In `SignOutModal`, add a prop `onSignout `which stores a callback function
    4. Use `onSignOut` in `handleSubmit` when there is a sign-out