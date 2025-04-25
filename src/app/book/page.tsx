import Image from 'next/image';

export default function BookPage() {
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
        <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
        <div className="bg-gray-100 p-8 rounded-lg">
          <p className="text-lg mb-4">
            This is a prototype version. The booking system will be implemented based on your feedback.
          </p>
          <p className="text-gray-600">
            Features to be implemented:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Online appointment scheduling</li>
            <li>Barber selection</li>
            <li>Service selection</li>
            <li>Time slot booking</li>
            <li>Confirmation system</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 