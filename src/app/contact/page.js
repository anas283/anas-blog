import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Contact | Anas',
  description: 'Frontend Developer',
}

const Contact = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold">Get In Touch</h4>
      <p className="text-md text-slate-700 font-normal mt-1">
        If you are interested in contacting me, please do not hesitate 
        to write me an email. I will try response as soon as possible.
      </p>
      <a 
        href="mailto:muhammadanasbinadam@gmail.com"
        target="_blank"
      >
        <Button variant="outline" className="mt-2.5">
          Contact Me
        </Button>
      </a>
    </div>
  )
}

export default Contact