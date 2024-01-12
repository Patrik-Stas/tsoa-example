# TSOA boilerplate

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

### Run
Install dependencies
```
yarn
```
Run in development mode
```
yarn dev
```
This will automatically rebuild tsoa generated code, and restart application
server anytime our source code OR tsoa-generated code is updated.

### Adopting TSOA in existing projects
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



