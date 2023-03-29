# Services

* Services are to manage all api requests. You can see them as a bridge/an adapter between the server API and the view layer (scenes and components) of your application.
* It can take care of network calls your app will make, get and post content, and transform payloads as needed before being sent or saved in the store of your app (such as Redux).
* The screens and components will only dispatch actions, read the store and update themselves based on the new changes.
* Actions will use services.
