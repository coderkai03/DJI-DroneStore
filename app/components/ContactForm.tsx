export default function ContactForm() {
  return (
    <form className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors"
      >
        Send Message
      </button>
    </form>
  )
} 