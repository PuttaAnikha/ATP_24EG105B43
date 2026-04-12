31-03-26

-client side and server side application can interact with eachothe over HHTP protocol by making HTTP rqst and receiving HTTP response.
-to make HTTP rqst from client side application,one can use either fetch or axios module.
=>The following are the http rqst types
 GET-to read all resources
 POST- to create a new resource
 PUT-to update entire resource
 DELETE- to delete a resource
 PATCH-to update a resource partially
=> PUT POST and PATCH request types can have body property which can hold JSON data whereas GET and DELETE rqst do not have body property and they can send data through URL.

### when a cilent makes a 'POST' rqst
  ->API endpoint-to find the route
  ->Content-Type
  ->body
  =>check you are sending  the body same as body in restCilent tool

### state management
   -it is the combinaton of sharing state+sharing state sync across application.

### Context Api
   =>create context object( something like pipeline)
     import { createContext } from "react"
//create conetxt provider object
export const createContextObj=createContext();
    =>provide or add state to context object(add water to pipeline)
    =>set this contetxt provider to parent.
    =>cpnsume context from component


1-04-26
### Issues with context
-context with useStateHook is a best and simple state management mechanism for small aplications.But it creates unneccesary re-rendering issueswhen multiple state is part of a context
-to overcome this unneccsarry re-rendering issue create multiple context and make sure each context have a single state.
-when application size is huge then maintanace of multiple context will become an issue.for such large applications advanc state management tools like REDUX or ZUSTAND can be use.

### Advanced state management with Zustand.
  -install zustand-3rd party library for state management.
      npm i zustand.
  -create global store and keep state and functiosn that modify state.
