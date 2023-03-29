# Redux

* It holds all the redux resources at one place.
* This includes action creators, reducers and store of our app.
* `CONSTANTS.ts` has all the action types.
* `/hooks.ts`
* `/reducer.ts` reduces all the actions to store. Same applies for reducers. For a wider scope of app, this can become an app level root-reducer which merges various feature-level reducers using redux’s combineReducers function.
* `/store.ts` is the central store of the application. This incorporates all the mapping between reducer, store and middle-wares if any.
