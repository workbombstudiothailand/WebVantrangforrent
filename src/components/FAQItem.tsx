"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    faq: { question: string; answer: string };
    index: number;
    isOpen: boolean;
    onToggle: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle }) => {
    return (
        <div className="border-b">
            <button
                className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none"
                onClick={() => onToggle(index)}
            >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown className={`w-6 h-6 text-sky-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="pb-4 px-2 text-gray-600">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};

export default FAQItem;