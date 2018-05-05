# Review Questions

## What is Node.js?

it is away to run javascript outside the browser

## What is Express?

it is npm package sits on the top of node js and helps to write web applications on web api`s. it is a framework packaged as node js module helps to builds apis and extra functionality

## Mention two parts of Express that you learned about this week.

routers and middleware

## What is Middleware?

functions , extra code or ways to extend functionality of express js example middleware , error handling and third party middleware. requests have to go through middleware queue before gets to the routes

## What is a Resource?

something that we could track in the system : users, products, orders. other words, things that we track via api`s

## What can the API return to help clients know if a request was successful?

http status code return the correct answers to requests

## How can we partition our application into sub-applications?

using express routers we could partition the app to routes

## What is CORS and why do we need it?

cross-origin-resource-sharing, we need it to secure api by knowing the source of the requests. if requests are not coming from our servers or oud domains, we deny it . we could provide configuration to accept some requests coming from the sources we accept. its way to set security in the server .
we need it because modern apps have api`s separately from the clients, we need to let our api`s to service requests coming from other domains or hosts
