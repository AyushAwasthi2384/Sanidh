import React, { useState } from "react";

const ChatBot = () => {
    const questions = [
        "What is your name?",
        "How are you feeling today?",
        "Do you have any specific symptoms?"
    ];
    
    const [chat, setChat] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState("");

    const handleSendAnswer = () => {
        if (answer.trim() === "") return;
        
        const newChat = [
            ...chat,
            { question: questions[currentQuestionIndex], answer }
        ];
        setChat(newChat);
        setAnswer("");

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log("Final Chat:", newChat);
            // Here you can perform any action with the final chat array
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chat-window">
                {chat.map((item, index) => (
                    <div key={index} className="chat-message">
                        <div><strong>Bot:</strong> {item.question}</div>
                        <div><strong>User:</strong> {item.answer}</div>
                    </div>
                ))}
                {currentQuestionIndex < questions.length && (
                    <div className="chat-message">
                        <strong>Bot:</strong> {questions[currentQuestionIndex]}
                    </div>
                )}
            </div>

            {currentQuestionIndex < questions.length && (
                <div className="chat-input">
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Your answer..."
                    />
                    <button onClick={handleSendAnswer}>Send</button>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
