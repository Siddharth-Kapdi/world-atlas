const Contact = () => {
  return (
    <section className="bg-black text-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
        <div className="w-full">
          <h2 className="text-center mb-5 text-2xl font-semibold">Contact us</h2>
          <form action="" className="w-full flex flex-col justify-center items-center gap-5">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-white px-2 py-1 rounded-md"
              placeholder="Enter your name"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="w-full border border-white px-2 py-1 rounded-md"
              placeholder="Enter your name"
              required
              autoComplete="false"
            />
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              className="w-full border border-white px-2 py-1 rounded-md"
              placeholder="Enter your email"
              required
              autoComplete="false"
            ></textarea>
            <div>
              <button
                className="w-50 border border-white px-2 py-1 rounded-md cursor-pointer"
                placeholder="Enter your message"
                required
                autoComplete="false"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
