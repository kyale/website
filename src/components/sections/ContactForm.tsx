'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
    dict: any;
}

export const ContactForm = ({ dict }: ContactFormProps) => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const isFullDictionary = !!dict.contact?.form;
    const formDict = isFullDictionary ? dict.contact.form : {
        name_label: "Name",
        name_placeholder: "Your name",
        email_label: "Email",
        email_placeholder: "your@email.com",
        subject_label: "Subject",
        subject_placeholder: "What is this about?",
        message_label: "Message",
        message_placeholder: "How can I help you?",
        submit_button: "Send Message",
        success_message: "Message sent successfully!",
        error_message: "Failed to send message. Please try again.",
        sending: "Sending..."
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Construct mailto link
        const recipientEmail = dict.contact?.details?.email || "info@chalkyweb.com";
        const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

        window.location.href = mailtoUrl;

        // Show success message
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (status === 'success') {
        return (
            <div className="bg-idePanel p-12 rounded-2xl border border-cyberMint/30 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                <CheckCircle className="w-16 h-16 text-cyberMint mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">{formDict.success_message}</h3>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-8 py-3 bg-kotlinIndigo hover:bg-indigo-600 text-white rounded-xl font-bold transition-all"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-idePanel p-8 md:p-10 rounded-2xl border border-ideBorder space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">{formDict.name_label}</label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={formDict.name_placeholder}
                        className="w-full px-4 py-3 bg-deepSpace border border-ideBorder rounded-xl focus:outline-none focus:border-kotlinIndigo text-white placeholder:text-slateGroup transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">{formDict.email_label}</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={formDict.email_placeholder}
                        className="w-full px-4 py-3 bg-deepSpace border border-ideBorder rounded-xl focus:outline-none focus:border-kotlinIndigo text-white placeholder:text-slateGroup transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{formDict.subject_label}</label>
                <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={formDict.subject_placeholder}
                    className="w-full px-4 py-3 bg-deepSpace border border-ideBorder rounded-xl focus:outline-none focus:border-kotlinIndigo text-white placeholder:text-slateGroup transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{formDict.message_label}</label>
                <textarea
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={formDict.message_placeholder}
                    className="w-full px-4 py-3 bg-deepSpace border border-ideBorder rounded-xl focus:outline-none focus:border-kotlinIndigo text-white placeholder:text-slateGroup transition-colors resize-none"
                />
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-rose-400 text-sm animate-in slide-in-from-top-1">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formDict.error_message}</span>
                </div>
            )}

            <button
                disabled={status === 'sending'}
                type="submit"
                className="w-full py-4 bg-kotlinIndigo hover:bg-indigo-600 disabled:bg-slate-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-3 relative overflow-hidden group"
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{formDict.sending}</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span>{formDict.submit_button}</span>
                    </>
                )}
            </button>
        </form>
    );
};
