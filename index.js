//HTTP SERVER

// const server = Bun.serve({
//   port: 3000,
//   fetch(request) {
//     return new Response("Welcome to Bun!");
//   },
// });

// console.log(`Listening on localhost:${server.port}`);

// // ## EJEMPLO CON WEBSOCKET
// const server = Bun.serve<{ authToken: string }>({
//   fetch(req, server) {
//     // use a library to parse cookies
//     const cookies = parseCookies(req.headers.get("Cookie"));
//     server.upgrade(req, {
//       data: { authToken: cookies['X-Token'] },
//     });
//   },
//   websocket: {
//     // handler called when a message is received
//     async message(ws, message) {
//       console.log(`Received: ${message}`);
//       const user = getUserFromToken(ws.data.authToken);
//       await db.Message.insert({
//         message: String(message),
//         userId: user.id,
//       });
//     },
//   },
// });

// console.log(`Listening on localhost:${server.port}`);

// ## EJEMPLO CON READ AND WRITE FILES 
// const file = Bun.file(import.meta.dir + '/package.json'); // BunFile

// const pkg = await file.json(); // BunFile extends Blob
// pkg.name = 'my-package';
// pkg.version = '1.0.0';

// await Bun.write(file, JSON.stringify(pkg, null, 2));

// ## HASHING A PASSWORD? 
// const password = "super-secure-pa$$word";

// const hash = await Bun.password.hash(password);
// // => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh...

// const isMatch = await Bun.password.verify(password, hash);
// // => true

// ## FILE SYSTEM ROUTING 
// const router = new Bun.FileSystemRouter({
//   style: "nextjs",
//   dir: "/path/to/pages"
// });

// const match = router.match("/blog/my-cool-post");
// match.filePath; // "/path/to/pages/blog/[slug].tsx",
// match.kind; // "dynamic"
// match.params; // { slug: "my-cool-post" }