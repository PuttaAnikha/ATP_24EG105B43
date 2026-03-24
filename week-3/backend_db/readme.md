1.generate package.json
  npm init -y
2.create express
3.install mongoose and connect to mongoDB server
  Rest api--mongoDB native driver-->db Server
  rest api--mongoose odm(object document mapping) tool-->db server
4.Build USER REST API
-resource USER
CRED OPERATIONS
  -create user
  -read all users
  -read user by id
  -update user by id
  -delete user by id
5.create schema and model of the resource(USER)-all database operations are done on model which needs schema.
6.create userAPI and define routes.



  -protected route: routes accessible by only authenticated users.
-public routes: accessible by anyone
#user authentication(login)
-submit credentials and get a token

-xss
-csrf


in protected routes
re-->middleware-->protected routes
