import Client from "./client";

const client = new Client();
["hello", "hello, world", ""].map((text) => {
    client
        .send(text)
        .then((msg) => { console.log(msg) })
        .catch(error => console.error(error));
});
