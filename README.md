This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app#examples).

## Getting Started

> First, clone the git repository and run the development server:

````bash
npm install
npm run dev
````

> .ENV
````bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_MOCKAPI_PATH=
````

> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

***

### Details
> A project to test basic hooks, routing, apis and auth user management tool (Auth, Middleware, UIs)

-   Basic Test
    -   page routing / dynamic routing
    -   basic Hooks to check one counter program
    -   Auth routing - GET/POST - Users/User
    -   middleware
    -   client / server components
-   Rednering (using dummy data)
    -   Client side data fetching and rendering. [[Dummy Source](https://jsonplaceholder.typicode.com)]
    -   Server side data fetching, rendering, loading message, error logging for Client. [[Dummy Source](https://jsonplaceholder.typicode.com)]
-   APIs, User Management Provider and Styling 
    -   Data read/create through API [[mockapi.io (free available)](https://mockapi.io/)]
    -   User Management Platform for UIs/SignUp/SignIn/Authentication/Profile/SignOut [[Clerk (free available)](https://clerk.com/)]
-   Tested Packages
    -   [@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss)
    -   [@clerk/nextjs](https://clerk.com/docs/quickstarts/nextjs)

***