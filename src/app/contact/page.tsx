import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white z-50 h-32 flex items-center justify-between px-8 pt-8">
        <div className="flex items-center gap-40">
          <Image
            src="/images/menu.png"
            alt="Menu"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="cursor-pointer"
          />
          <Image
            src="/images/contact.png"
            alt="Contact"
            width={24}
            height={24}
            className="cursor-pointer hover:opacity-70 transition-opacity"
          />
        </div>
      </div>

      {/* Content */}
      <div className="pt-40 px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-lg mb-4">
            This is a prototype version. The contact form will be implemented based on your feedback.
          </p>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
              disabled
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
              disabled
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded h-32"
              disabled
            />
          </div>
        </div>
      </div>
    </main>
  );
} 