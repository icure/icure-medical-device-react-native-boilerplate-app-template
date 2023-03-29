# Navigation

* As the name suggests, all the routing logic resides here.
* This app contains only one stack of navigation. Although, most of the apps will have minimum 2 navigators; viz before and after authentication.
* Ideally, all different navigators should be re-factored in separate files and then used in `Navigator.ts`
* `ROUTES.ts` consists of all the constants for various available routes within our app.
* /components directory will hold all the navigation specific components like headers, title bars, action buttons, like so.
