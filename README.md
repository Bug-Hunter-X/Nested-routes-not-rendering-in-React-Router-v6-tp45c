# React Router v6 Nested Route Bug

This repository demonstrates a common issue encountered when working with nested routes in React Router v6. The problem involves nested routes failing to render, despite the parent route rendering correctly.  The solution provided addresses this issue by ensuring the nested routes are properly defined and accessible within the route hierarchy.

## Bug
The original `App.js` demonstrates the problem: nested routes are defined, but do not render.  This is because a simple component structure is not enough for nested routes to work in React Router v6. 

## Solution
The corrected code in `AppSolution.js` demonstrates the solution.  This version uses the `<Outlet>` component correctly to render nested routes within a parent route. This component acts as a placeholder where the nested component should be rendered.