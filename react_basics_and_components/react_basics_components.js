/*
• React is all about Components.
• This is because all UIs are made of components.
• Actually, watching further, it sounds like React is all about Components and component composition.
  • This allows for reusability and compartmentalization.
• React combines HTML, CSS and JS.
  • CSS is the least important part.
• React further allows you to define the target state, depending on different conditions, and this allows you to define what should show on the page, and what shouldn't.
  • All of this without explicitly telling the DOM what should show.
• In React, you'll rarely work in the public/ folder, since it's usually the case that only one HTML file is returned by the server.
• App is a Component in App.js.

• Important note to consider - ultimately, in React, you build a component tree.

<App />
<Header />  <Tasks />
            <Task sub-component/>

• <App /> will be the top component almost always.
• A component in React is just a JS function.
  • It's special in that it returns JSX code that's transformed, but ..
• Place CSS/styling files right next to their calling JS files and import them.
 */