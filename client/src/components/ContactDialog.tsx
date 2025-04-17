import { useContactDialog } from "./ContactDialogContext";
import { Input } from "@/components/ui/input"; // adjust as needed
import { Button } from "@/components/ui/button";

const ContactDialog = () => {
  const { dialogRef, closeDialog, contactForm, handleChange, handleSubmit } =
    useContactDialog();

  return (
    <dialog
      ref={dialogRef}
      className="rounded-lg shadow-lg backdrop:bg-black/50 backdrop:backdrop-blur-sm w-full bg-[#121212] text-white p-8 max-w-md md:max-w-lg 3xl:max-w-xl 4k:max-w-2xl 3xl:p-10 4k:p-12"
      onClick={(e) => {
        if (e.target === dialogRef.current) closeDialog();
      }}
    >
      <div className="flex justify-between items-center mb-8 3xl:mb-10 4k:mb-12">
        <h3 className="text-2xl font-semibold text-[#00b3e6] 3xl:text-3xl 4k:text-4k">
          Contact Us
        </h3>
        <button
          onClick={closeDialog}
          className="text-gray-400 hover:text-white transition-colors text-xl 3xl:text-2xl 4k:text-3xl"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={contactForm.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white"
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={contactForm.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white"
            placeholder="Your email"
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-[#202B31] border border-gray-700 text-white min-h-[150px]"
            placeholder="Your message"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#00b3e6] py-3 rounded-md text-white"
        >
          Send Message
        </Button>
      </form>
    </dialog>
  );
};

export default ContactDialog;
