
export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Contact</h2>
        <div className="glass rounded-xl border-white/10 border p-8 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-4">Feel free to reach out for collaborations, inquiries, or just a chat!</p>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>

    </section>
  )
}
