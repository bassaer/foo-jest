import Client from "./client";

const client = new Client();
try {
    console.log(client.send("hello"));
    console.log(client.send("hello, world"));
} catch (error) {
    console.error(error.message);
}
