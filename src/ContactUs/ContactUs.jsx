import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const servideId = "service_m2jvesv";
        const templateId = "template_lvvmsi8";
        const apiKey = "3yttRGro0jIpC6wH6";

        emailjs.sendForm(servideId, templateId, refForm.current, apiKey)
            .then(result => console.log(result.text))
            .catch(error => console.log(error));
    }

    return (
        <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg shadow-purple-500">
            <form ref={refForm} onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                    <p className="text-gray-600">Please fill this form</p>
                </div>
                
                <fieldset className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Ej: Sofia Hoyos"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2  focus:border-purple-500"
                    />
                </fieldset>

                <fieldset className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="email">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Ej: sofi.hoyos.2509@gmail.com"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2  focus:border-purple-500"
                    />
                </fieldset>

                <fieldset className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        maxLength="500"
                        name="message"
                        placeholder="Type your message"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-2 focus:border-purple-500"
                    ></textarea>
                </fieldset>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-700 text-white font-medium rounded-md transition "
                >
                    Send
                </button>
            </form>
        </div>
    );
};