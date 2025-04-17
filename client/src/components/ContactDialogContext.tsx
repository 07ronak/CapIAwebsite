import React, { createContext, useContext, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ContactDialogContextType = {
  openDialog: () => void;
  closeDialog: () => void;
  contactForm: ContactForm;
  setContactForm: React.Dispatch<React.SetStateAction<ContactForm>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

const ContactDialogContext = createContext<ContactDialogContextType | null>(
  null
);

export const useContactDialog = () => {
  const ctx = useContext(ContactDialogContext);
  if (!ctx)
    throw new Error(
      "useContactDialog must be used within ContactDialogProvider"
    );
  return ctx;
};

export const ContactDialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { toast } = useToast();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          ...contactForm,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to submit form");

      toast({
        title: "Thank you for your message!",
        description: "We'll get back to you soon.",
      });

      setContactForm({ name: "", email: "", message: "" });
      closeDialog();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to send message",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <ContactDialogContext.Provider
      value={{
        dialogRef,
        contactForm,
        setContactForm,
        openDialog,
        closeDialog,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </ContactDialogContext.Provider>
  );
};
