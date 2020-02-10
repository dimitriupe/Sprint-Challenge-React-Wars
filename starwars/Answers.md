# Answers

1) What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
React is a JavaScript library for building user interfaces. The main problem solved by react is the development of large applications that have frequent data changes. The data in such applications is not static but dynamic and so it changes over time.
React allows developers to build complex user interfaces which have components that will change frequently over time, without having to write a lot of very tricky JavaScript code. Imagine Facebook and Instagram where there are constant comments, posting, images, ads, videos changing all the time.
React supports these apps without even having to reload the page. It does this by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there are any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, 
and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.

2) What does it mean to think in react?
It means to think about apps as you build them. You start with a mock and then follow 5 steps:
a) Break The UI Into A Component Hierarchy.
b) Build A Static Version in React.
c) Identify The Minimal (but complete) Representation Of UI State.
d) Identify Where Your State Should Live.
e) Add Inverse Data Flow.

3) Describe state.
React components have a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

4) Describe props.
Props are arguments passed into React components. Props are passed to components via HTML attributes.

5) What are side effects, and how do you sync effects in a React component to state or prop changes?
A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.
To sync effects in a React component to state or prop changes we can declare functions needed by an effect inside of it. Then it’s easy to see what values from the component scope that effect depends on.