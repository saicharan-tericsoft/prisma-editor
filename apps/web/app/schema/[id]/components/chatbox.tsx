// components/ChatBox.tsx
"use client";
import { useState } from "react";
import { Button } from "~/components/main-page/components/button";
import { Textarea } from "~/components/ui/textarea";
interface ChatBoxProps {
    onOutputUpdate: (output: string) => void;
}
const ChatBox: React.FC<ChatBoxProps> = ({ onOutputUpdate }) => {
    const [message, setMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const getGradientOutput =  () => {
        try {
            // const response = await fetch("/api/get-gradient-output", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ message }),
            // });
            //
            // if (!response.ok) {
            //     const errorData: { error: string } = await response.json();
            //     throw new Error(errorData.error);
            // }
            //
            // const result: { prediction: string } = await response.json();
            onOutputUpdate(message);  // Send the output to the parent component
        } catch (error: unknown) {
            // if (error instanceof Error) {
            //     setError(error.message);
            // } else {
            //     setError("An unknown error occurred.");
            // }
        }
    };

    return (
        <div className="chat-box-container">
            <Textarea
                name="message"
                value={message}
                onChange={handleMessageChange}
            />
            <Button variant="primary" className="lg:text-lg send-button" onClick={getGradientOutput}>
                Send
            </Button>
        </div>
    );
};

export default ChatBox;
