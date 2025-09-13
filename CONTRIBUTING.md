# Contributing

## Steps to run the project locally

```
yarn
yarn dev
```

## Steps used to create the project

### Basic Setup

[Main tutorial](https://www.youtube.com/watch?v=EW7m2WIvFgQ&list=PLMdYygf53DP7FJzPslLnmqp0QylyFfA8a)

```
yarn init
yarn add next react react-dom
```

[Configure DNS](https://www.youtube.com/watch?v=IyRUn0GocEc&list=PLMdYygf53DP7FJzPslLnmqp0QylyFfA8a).

[Material UI Installation](https://mui.com/material-ui/getting-started/installation/#default-installation):

```
yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
```

[Configure typescript](https://nextjs.org/docs/pages/building-your-application/configuring/typescript).

[Configure fonts and icons](https://mui.com/material-ui/getting-started/installation/#roboto-font).

[Configure css normalization](https://mui.com/material-ui/react-css-baseline/).

[Add basic menu](https://mui.com/material-ui/react-app-bar/).

### Log in with Google

[Full integration how-to](https://www.telerik.com/blogs/how-to-implement-google-authentication-nextjs-app-using-nextauth).

```
yarn add next-auth
```

[Configure next auth route handlers, app session provider, and login button](https://next-auth.js.org/configuration/initialization).

[Review next auth client usage configuration](https://next-auth.js.org/getting-started/client).

[Configure next auth env vars](https://next-auth.js.org/configuration/options).

[Configure next auth google provider and its env vars](https://next-auth.js.org/providers/google).

Review env vars configuration both locally and at vercel.

[Configure Log in with Google](https://developers.google.com/identity/sign-in/web/sign-in?hl=pt-br).

Review google console secrets and callback uri configuration.

[Configure autentication-protected routes and add profile page](https://next-auth.js.org/getting-started/client#custom-client-session-handling).

### Firebase admin integration

[Configure firebase console project](https://firebase.google.com/docs/admin/setup?hl=pt-br#set-up-project-and-service-account).

[Configure firebase admin sdk](https://firebase.google.com/docs/admin/setup?hl=pt-br#add-sdk).

```
yarn add firebase-admin
```

[Consult firebase admin sdk source code and documentation](https://github.com/firebase/firebase-admin-node).

Initialize firebase app with admin SDK service account. Secrets must be used as environment variables.

`https://console.firebase.google.com/project/<PROJECT_ID>/settings/serviceaccounts/adminsdk?hl=pt-br`

[Create firestore data model: collections, documents, data](https://firebase.google.com/docs/firestore/data-model?hl=pt-br).

[Restrict firestore access rules to deny all](https://firebase.google.com/docs/firestore/security/rules-query?hl=pt-br#secure_and_query_documents_based_on_authuid).

[Build the first CRUD: the profile nickname](https://retool.com/blog/crud-with-cloud-firestore-using-the-nodejs-sdk/).
