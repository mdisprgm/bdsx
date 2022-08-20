import { events } from "bdsx/event";

events.serverOpen.on(() => {
    console.log("[First] launching");
});

events.serverClose.on(() => {
    console.log("[First] closed");
});

console.log("[First] Jobs started".blue);
require("./src");
console.log("[First] Jobs have done".blue);
