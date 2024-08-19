'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  email: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitError(null);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError('An unknown error occurred');
      }
      setSubmitSuccess(false);
    }
  };

  return (
    <section id="contact" className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h2>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg  p-8 rounded-lg shadow-lg"
          >
            {submitSuccess && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}
            {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                placeholder="Your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-3 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                rows={4}
                placeholder="Your message here"
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
