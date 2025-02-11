
import React, { useState } from 'react';
import { useCreateContactMutation } from '../features/contact/ContactApi';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [ createContact, {error, isLoading} ] = useCreateContactMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to your server (e.g., using fetch or axios)
    try {
      const response = await createContact({name, email, subject, message});
      console.log("contact form respose ", response);
      if (response.data?.statusCode === 200) {
        // Handle successful submission (e.g., show a success message)
        alert('Message sent successfully!');
      } else {
        // Handle error (e.g., show an error message)
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending the message. Please try again later.');
    }
  };

  return (
    <div className='flex justify-center'>
        <div className="bg-blue-900 p-8 rounded-lg w-[60vw]">
          <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="subject" className="block text-white mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
    </div>
  );
}

export default ContactForm;