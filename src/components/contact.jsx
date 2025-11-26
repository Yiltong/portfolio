import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { useState } from "react";


export default function Contact() {

    const [isSend, setIsSend] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
         
        setIsSend(true)
        setTimeout(() => {
            setIsSend(false)
        }, 1000)
    }

    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold md-4 text-ceter">
                Get In Touch
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-12 max-w-2xl mx-auto">
                    Have a project you want to colaborate wih? 
                    feel free to reachout
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Email</h4>
                                    <a href="mailto:zachariahyiltong48@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        zachariahyiltong48@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Phone </h4>
                                    <a href="tel:+2348 085018473" 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        +234 8085018473
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4> Location</h4>
                                    <a  
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        Zaria, Nigeria
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex px-45">
                                <a href="#" className="px-2">
                                <Linkedin />
                            </a>
                            <a href="#">
                                <Twitter />
                            </a>
                            <a href="https://www.fb.com/l/6lp1kJRRR">
                                <Facebook />
                            </a>
                            <a href="https://whatsapp.com/dl/">
                            WHATSAPP
                            </a> 
                                  
                            </div>        
                        </div>
                    </div>

                    <div className="bg-card p-9 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-5">Send a Message</h3>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <input type="text" id="name" required className="w-full px-3 py-4 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="your name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your email </label>
                                <input type="email" id="email" name="email" required className="w-full px-3 py-4 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="your@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <textarea id="Message" name="Message" required className="w-full px-3 py-4 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="I'd like to hear from you" />
                            </div>
                            <button type="sumit"
                                onClick={handleSubmit}
                                className="cusmic-button w-full flex items-center justify-center gap-2">
                                {isSend ? "wait a munite...." : "send your Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
    
}