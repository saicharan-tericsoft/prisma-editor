// pages/api/get-gradient-output.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@gradio/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.status(405).end(); // Method Not Allowed
        return;
    }

    const { message } = req.body;

    try {
        const client = await Client.connect("http://15.207.229.182:3043/");
        const result = await client.predict("/predict", {
            file_name: "",
            request: message,
        });
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching prediction:", error);
        res.status(500).json({ error: "Failed to fetch prediction" });
    }
}
