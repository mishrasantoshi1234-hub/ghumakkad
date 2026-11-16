/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * GHUMAKKAD - Interactive AI Tourism Guide Chatbot Component
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types/travel';
import { Send, Sparkles, RefreshCw, Bot, User, CheckCircle, Info, Copy, Check, MessageSquare, Compass, ShieldAlert } from 'lucide-react';

interface AiChatbotProps {
  initialPrompt?: string;
  onClearInitialPrompt?: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ initialPrompt = '', onClearInitialPrompt }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text: `Namaste! 🙏 I am your **Ghumakkad AI Guide**, inspired by the timeless Indian ethos *"Atithi Devo Bhava"* (The Guest is God).

I can help you:
• 📍 **Recommend suitable destinations** based on your interests (adventure, nature, history, beaches, spirituality, shopping, or food)
• 💰 **Plan within your budget** (from backpacker trips under ₹10,000 to royal heritage luxury)
• 🗓️ **Design tailored itineraries** for any duration
• 🍛 **Suggest authentic regional cuisines** & local specialties
• 🚆 **Guide your transportation** (IRCTC train booking, metro routes, local cabs)
• 🛕 **Explain cultural etiquette & safety advice**

How can I assist your Indian journey today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isVerifiedFact: true,
      suggestedFollowUps: [
        'Which places should I visit in India?',
        'Plan a 5-day trip to Rajasthan.',
        'What are the best places to visit in Odisha?',
        'Suggest destinations under ₹10,000.',
        'What famous food should I try in Kerala?'
      ]
    }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Which places should I visit in India?',
    'Plan a 5-day trip to Rajasthan.',
    'What are the best places to visit in Odisha?',
    'Suggest destinations under ₹10,000.',
    'What famous food should I try in Kerala?',
    'How do I book Indian Railway (IRCTC) trains?',
    'What is the best time to visit Kashmir?'
  ];

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle external initial prompt (e.g. from Destination modal)
  useEffect(() => {
    if (initialPrompt) {
      sendMessage(initialPrompt);
      if (onClearInitialPrompt) onClearInitialPrompt();
    }
  }, [initialPrompt]);

  const sendMessage = async (userText: string) => {
    const textToSend = userText.trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call full-stack server endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-4).map(m => ({ sender: m.sender, text: m.text }))
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || 'Namaste! I am here to assist your Indian travel plans.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerifiedFact: data.isAiGenerated === false || data.isVerified === true,
        suggestedFollowUps: data.suggestedFollowUps || [
          'What is the best season to visit?',
          'What should I pack for this trip?',
          'Tell me about safety tips here'
        ]
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.warn('Chat request failed, providing local assistance:', err);
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: `Namaste! 🙏 I couldn't connect to the AI travel service just now.

Please try again in a moment. If this keeps happening, the website administrator needs to check the Netlify Functions deployment and the GEMINI_API_KEY environment variable.

You can still explore the destination, food, culture and travel information already included on this website.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isVerifiedFact: true,
        suggestedFollowUps: [
          'Which places should I visit in India?',
          'Plan a 5-day trip to Rajasthan.',
          'What famous food should I try in Kerala?'
        ]
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-msg',
        sender: 'assistant',
        text: `Namaste! 🙏 How can I assist your Indian travel discovery today? Feel free to ask about destinations, budgets, heritage, food, or rail travel.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedFollowUps: [
          'Which places should I visit in India?',
          'Plan a 5-day trip to Rajasthan.',
          'What are the best places to visit in Odisha?',
          'Suggest destinations under ₹10,000.',
          'What famous food should I try in Kerala?'
        ]
      }
    ]);
  };

  return (
    <section id="ai-assistant" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-amber-50/30 to-[#FFFDF9] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-widest border border-orange-200 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-600 animate-spin-slow" />
            <span>AI Smart Tourism Guide</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Chat with Ghumakkad AI
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
            Your 24/7 personal Indian travel companion. Get custom itineraries, cultural context, food recommendations, and budget advice.
          </p>
        </div>

        {/* Chatbot Main Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-200/80 overflow-hidden flex flex-col h-[650px] sm:h-[700px]">
          
          {/* Chat Window Header */}
          <div className="px-5 py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                <Bot className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-base tracking-wide text-white">
                    Ghumakkad AI Guide
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-300/40 text-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-amber-100 font-medium">
                  Atithi Devo Bhava • Indian Tourism & Heritage Specialist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleClearChat}
                title="Restart conversation"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-stone-50/60">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 max-w-[92%] sm:max-w-[85%] ${
                    isAssistant ? 'mr-auto' : 'ml-auto flex-row-reverse'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white text-xs shadow-sm ${
                      isAssistant
                        ? 'bg-gradient-to-br from-orange-600 to-amber-700'
                        : 'bg-emerald-800'
                    }`}
                  >
                    {isAssistant ? <Bot className="w-4 h-4 text-amber-100" /> : <User className="w-4 h-4 text-emerald-100" />}
                  </div>

                  {/* Message Bubble */}
                  <div className="space-y-1.5">
                    <div
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm relative group ${
                        isAssistant
                          ? 'bg-white text-stone-800 border border-amber-200/70 rounded-tl-none'
                          : 'bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-tr-none'
                      }`}
                    >
                      {/* Copy button */}
                      <button
                        onClick={() => handleCopyText(msg.id, msg.text)}
                        className={`absolute top-2 right-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${
                          isAssistant
                            ? 'text-stone-400 hover:text-stone-700 bg-stone-100'
                            : 'text-amber-100 hover:text-white bg-black/20'
                        }`}
                        title="Copy message"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>

                      {/* Message Content formatted with line breaks and markdown styling */}
                      <div className="whitespace-pre-line space-y-1">
                        {msg.text.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>

                      {/* Fact Verification Badge */}
                      {isAssistant && msg.isVerifiedFact && (
                        <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center gap-1.5 text-[10px] text-emerald-700 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified Indian Tourism Guidance</span>
                        </div>
                      )}
                    </div>

                    {/* Timestamp & Sender indicator */}
                    <div
                      className={`text-[10px] text-stone-400 px-1 flex items-center gap-2 ${
                        isAssistant ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <span>{msg.timestamp}</span>
                      {isAssistant && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100/70 text-amber-800">
                          AI Tourism Guide
                        </span>
                      )}
                    </div>

                    {/* Follow-up suggestion pills */}
                    {isAssistant && msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5 pt-1">
                        {msg.suggestedFollowUps.map((question, qIdx) => (
                          <button
                            key={qIdx}
                            onClick={() => sendMessage(question)}
                            className="text-left text-[11px] font-medium px-2.5 py-1 rounded-full bg-white hover:bg-orange-50 text-orange-900 border border-orange-200/80 shadow-xs transition-colors cursor-pointer"
                          >
                            💡 {question}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 max-w-[80%] mr-auto items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-amber-700 flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4 text-amber-100" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-white border border-amber-200 text-stone-600 text-xs sm:text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600 animate-spin-slow" />
                  <span>Ghumakkad AI is crafting your travel advice...</span>
                  <div className="flex space-x-1">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Prompt Bar */}
          <div className="px-4 py-2 bg-stone-100/80 border-t border-stone-200 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <MessageSquare className="w-3 h-3 text-orange-600" /> Suggested:
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(q)}
                disabled={isLoading}
                className="px-2.5 py-1 text-xs rounded-full bg-white text-stone-700 hover:text-orange-700 hover:bg-orange-50 border border-stone-200 shadow-2xs whitespace-nowrap transition-all cursor-pointer disabled:opacity-50 shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputValue);
            }}
            className="p-3 sm:p-4 bg-white border-t border-stone-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything: 'Where to go in winter?', 'Varanasi 3-day plan', 'What to eat in Goa?'..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:bg-white"
            />
            
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md transition-all cursor-pointer shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </form>

        </div>

        {/* Disclaimer Note distinguishing verified info from AI */}
        <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-stone-600 text-[11px] leading-relaxed flex items-start gap-2.5">
          <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <p>
            <strong>Tourism Transparency:</strong> Official helpline (1363 / 112) and official Indian Railways ticketing channels (IRCTC) are verified facts. Real-time train berth status, monument opening holidays, and dynamic airfares should be cross-verified on official Ministry of Tourism or railway booking portals.
          </p>
        </div>

      </div>
    </section>
  );
};
