# TSOA Example project

This is sample TSOA starting project demonstrating its basic features. TSOA 
requires its consumer to implement IoC interface. This, however, doesn't imply
your entire application needs to be IoC driven! This project also show option
how to localize usage of IoC to minimum.  

The project defines single API controller `ResourceController.ts` taking 
advantage of amazing TSOA capabilities. 
TSOA generates code which wraps around our `ResourceController.ts` and is also
responsible for instantiation of the controller. But Controllers can often
have complex constructors, depending on various internal services objects
of our applications. 

We need to provide TSOA with simple way of instantiating
these controllers. That's why TSOA relies on IoC container to hide away
"how" the instantiation happens, and instead provide simple interface, such as:
"give me instance of type ResourceController".

# Run it
Install dependencies
```
yarn
```
Run in development mode - This will automatically rebuild tsoa generated code, and restart application
server anytime our source code OR tsoa-generated code is updated.
```
yarn dev
```
Test
```
curl -v -XGET http://localhost:3000/resources/  -H 'Content-Type: application/json'
```
which should return 200 OK response, and the server will log:
```
[0] Built FooService a2c43ee146e214d0ae3d3c4751573a56
[0] Foo instance a2c43ee146e214d0ae3d3c4751573a56 getting the Foo
[0] Bar instance 42bc3cb5ec579e5d3172812aade18456 getting the Bar
[0] Baz instance 9bc0978a3fb1232d577a41546ba562f2 getting the Baz
```

# Adopting TSOA in existing projects
It can seem that adopting TSOA for existing project is invasive, because now
you need to introduce IoC framework to build your controllers! 

Yes, TSOA largerly drive how your Controller layer looks like: 
- You need to provide IoC container which can build instance for any API Controller class
- Your controller classes need to extend class `Controller` from `tsoa`  
- You use `tsoa` annotations - which are powerful and are the reason why you
  are considering to adopt `tsoa` in a first place.

But TSOA doesn't need to impact rest of your application. Everything else 
can stay as is, you just need to register dependencies of all Controllers 
in the IoC container. In the project code, the `ResourceController.ts` 
controller has 3 dependencies: `FooService`, `BarService`, `BazService`.

The `FooService`, `BarService` are doubling down on the IoC framework, using
annotations of `tsyringe`.
However `BazService` is untouched and itself is unaware of IoC or TSOA existence.
We just manually register `BazService` in IoC container upon application startup
in `server.ts`



