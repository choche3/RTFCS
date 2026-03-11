"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"


type Message = {
    text: string
    sender: "user" | "bot"
}

export default function Chatbot(){
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState<Message[]>([
        {
            text: "Hello 👋, Welcome to Real time Fabricators. How can we help you today?",
            sender: "bot"
        }
    ])

    const[input, setInput] = useState("")

    //adding predefined responses
    const intents = [
        {
            keywords: ["where", "located", "address", "location", "are you found"],
            response: "We mainly operate in Lusaka, with another branch in Kitwe. Contact us to find out more",
        },
        {
            keywords: ["price", "how much", "cost", "quote", "estimate"],
            response: "Prices vary and depend on the project you have in mind."
        },
        {
            keywords: ["reach you", "ask", "contact", "call"],
            response:"You can contact us using the contact form, or send a direct whatsApp message provided on the contact page. or call +260972958096"
        },
        {
            keywords: ["operating hours", "hours", "time", "open", "close", "working", "what time"],
            response:"Our working hours are from Monday to Saturday from 06hrs to 18hrs. Sundays we are off."
        },
        {
            keywords: ["working days", "off days"],
            response: "We work from Monday to Saturday."
        },
        {
            keywords: ["services", "what do you do", "what type", "I want to find out"],
            response: "We provide and do many things dealing with metal fabrication and installation. We can do custom gets, window frames and many more, please do reach out, we build something!"
        },
        {
            keywords: ["hey", "good afternoon", "good morning", "good evening", "hi", "hello"],
            response: "Greetings!"
        },
        {
            keywords: ["how are you", "how you doing"],
            response: "I'm doing well, how are you?"
        },
        {
            keywords: ["I'm good", "good", "i'm great"],
            response: "Great!"
        }

       ]

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage: Message = {
            text: input,
            sender: "user"
        }

        setMessage(prev => [...prev, userMessage])

        const lowerInput = input.toLocaleLowerCase()

        let reply =
        "I'm sorry, i didn't quite understand your message. i am not an advanced AI chatbot. Please try asking about service we offer our location, working hours, quote or contact..."

        for (const intent of intents) {
            if (intent.keywords.some(word => lowerInput.includes(word))){
                reply = intent.response
                break
            }
        }

        const botMessage: Message = {
            text: reply,
            sender: "bot"
        }

        setTimeout(()=>{
            setMessage(prev => [...prev, botMessage])
        }, 500)
        setInput("")
    }

    return(
        <>
            {/**floating Button */}

            <button
               onClick={() => setOpen(!open)}
               className="fixed bottom-6 right-6 bg-yellow-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition z-50"
            >
                {open ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/**Chat window */}
            {open && (
                <div className="fixed bottom-24 right-6 w-80 max-w-[90vw] bg-white text-black rounded-xl shadow-xl flex flex-col z-50">
                    {/**Header  */}
                    <div className="bg-yellow-500 text-white p-3 rounded-t-xl font-semibold">
                        Chat with us
                    </div>
                    {/**messages */}
                    <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-80">
                        {message.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${
                                    msg.sender === "user" ? "justify-end" : "justify-start"
                                }`}
                            >

                                <div 
                                    className={`px-3 py-2 rounded-lg text-sm max-w-[70%] ${
                                        msg.sender === "user"
                                        ? "bg-yellow-600 text-white"
                                        : "bg-gray-200 text-black"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/**inpput */}
                    <div className="flex-border-t flex flex-col">
                        <div className="flex">
                            <input  
                            type="text"
                            placeholder="ask something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 p-2 text-sm outline-none"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSend()
                            }}
                    />
                    <button
                        onClick={handleSend}
                        className="bg-yellow-600 text px-4 text-sm"
                    >
                        Send
                    </button>
                    </div>
                    <p className="text-xs text-center text-gray-500 py-1">
                        Not an advanced chatbot. Contact us for detailed inquiries.
                    </p>
                    </div>
                    
                </div>
                
            )}
        </>
    )
}