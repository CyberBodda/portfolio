import { Mail, MapPin, Phone, PhoneCall, Send } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useInView } from "../hooks/use-in-view"
import { useState } from "react"

// Fades and slides its children up the first time they scroll into view.
const Reveal = ({ children, delay = 0, className }) => {
    const [ref, inView] = useInView({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
            className={cn(
                "transition-all duration-700 ease-out",
                "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                className
            )}
        >
            {children}
        </div>
    );
};

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xyeydlad", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast({
                title: "Message Sent",
                description: "Thank you for your message. I'll get back to you soon!"
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Contact form error:", error);
            toast({
                title: "Something went wrong",
                description: "Please try again or email me directly.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <section className="py-24 px-4 relative" id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Ready to bring your vision to life?
                    Whether you have a project in mind or just want to explore how
                    we can elevate your digital presence, I’d love to hear from you.
                    Let’s collaborate to build something functional, intuitive, and truly impactful.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items ">
                    <Reveal className="space-y-8 mt-6">
                        <h3 className="text-2xl font-semibold mb-6 pl-16 max-[401px]:pl-9 ">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start gap-x-4">
                                <div className="p-3 rounded-full bg-primary/10 max-[401px]:p-1 ">
                                    <Mail className="h-6 w-6 text-primary" /> {""}
                                </div>
                                <div className="flex flex-col space-y-1 m-auto ">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:abdelrahmanelmasry096@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        abdelrahmanelmasry096@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-4">
                                <div className="p-3 rounded-full bg-primary/10 max-[401px]:p-1 max-[401px]:mr-0 ">
                                    <PhoneCall className="h-6 w-6 text-primary" /> {""}
                                </div>
                                <div className="flex flex-col space-y-1 m-auto ">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+201031623223" className="text-muted-foreground hover:text-primary transition-colors">
                                        +20 10 3162 3223
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-x-4">
                                <div className="p-3 rounded-full bg-primary/10 max-[401px]:p-1 ">
                                    <MapPin className="h-6 w-6 text-primary  " /> {""}
                                </div>
                                <div className="flex flex-col space-y-1 m-auto ">
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Cairo, Egypt
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pl-16 max-[401px]:pl-9">
                            <h4 className="font-medium mb-4"> Connect With Me!</h4>
                            <div className="flex gap-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/abdelrahman-elmasry-888576393/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedin  />
                                </a>
                                <a href="https://www.instagram.com/_aelmasry_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.facebook.com/abdelrahman.sameh.5811/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={150} className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your name" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="youremail@email.com" />
                            </div>

                            <div>
                                <label htmlFor="message"
                                    className="block text-sm font-medium mb-2">
                                    Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center m-auto gap-2",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}