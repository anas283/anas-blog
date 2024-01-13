const Contact = () => {
  return (
    <div className="border-t border-b border-gray-200 mt-10">
      <div className="mx-auto items-center justify-between px-4 py-20">
        <div>
          <h1 className="text-4xl text-center font-medium">Get In Touch</h1>
          <p className="text-center text-gray-500 mt-4  max-w-lg flex mx-auto">
            If you are interested in contacting me, please do not hesitate 
            to write me an email. I will try response as soon as possible.
          </p>
          <a 
            href="mailto:muhammadanasbinadam@gmail.com"
            target="_blank"
            className="bg-slate-900 hover:bg-slate-700 text-sm text-white font-medium py-3 px-8 rounded flex mx-auto w-fit mt-5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact