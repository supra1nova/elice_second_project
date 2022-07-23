import { createClient } from "redis";

export const client=createClient()

async function run(){
    await client.connect()
}

run()
