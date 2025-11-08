import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-muted-foreground">
          We're here to help with your 3D printing calculations
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
