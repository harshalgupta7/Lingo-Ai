"use client"
import React, { useEffect, useState } from 'react'

const List = () => {
    const messages = [
        <>
            I'm <span className="font-bold text-lg">Lingo AI</span>, an advanced AI-powered tool designed to enhance your cognitive skills through <span className="font-bold text-lg">language formation</span>.
        </>,
        <>
            मैं <span className="font-bold text-lg">Lingo AI</span> हूं, एक उन्नत AI-संचालित टूल जो आपकी संज्ञानात्मक क्षमताओं को <span className="font-bold text-lg">भाषा निर्माण</span>
        </>,
        <>
            Je suis <span className="font-bold text-lg">Lingo AI</span>, un outil avancé alimenté par l'IA conçu pour améliorer vos capacités cognitives grâce à la <span className="font-bold text-lg">formation linguistique</span>.
        </>
    ];

    const [text, setText] = useState(messages[0]);

    useEffect(() => {
        setTimeout(()=>{
            setText(messages[1]);
        }, [10000]);
    }, []);

    return (
        <>
            <ul className="list-disc list-inside space-y-2">
                <li className='animate-pulse'>
                    {text}
                </li>

            </ul>
        </>
    )
}

export default List