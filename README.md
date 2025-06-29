# Solid Sierpinski Triangle Demo as a Web Fragment

Popular React Fiber stress test / benchmark demo, implemented by [Ryan Carniato with Solid](https://github.com/ryansolid/solid-sierpinski-triangle-demo) and repackaged as a fragment.

Run it [here](https://solid-sierpinski-triangle.fragments.demos.web-fragments.dev/) outside of a fragment, or embed it inside a web fragment gateway.

## Notes from Ryan Carniato

This demo is often misunderstood. Even I didn't really get it 100% at first. It's not about the FPS since on most computers these days can run at 60fps. It's about how they degrade under low CPU resources. I previously suggested throttling the CPU in chrome dev tools, and that's still a good exercise but this isn't just about external aspects. React purposefully sticks a slowdown in the component to simulate an expensive computation in every single node. I've done the same with Solid now.
## Comparison

[React 15](https://claudiopro.github.io/react-fiber-vs-stack-demo/stack.html)

[React Fiber](https://claudiopro.github.io/react-fiber-vs-stack-demo/fiber.html)

[Stencil](https://stencil-fiber-demo.firebaseapp.com/perf.html)

## Examples without Slowdown

[Glimmer](https://mupkoo.github.io/react-fiber-demo-with-glimmerjs/)

[Aurelia](http://aurelia-thousand-nodes.bigopon.surge.sh/)

[Imba](https://imba-perf-demo.firebaseapp.com/)

[Radi](https://radi.js.org/perf-test.html)
