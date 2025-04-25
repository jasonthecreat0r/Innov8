'use client';

import Image from 'next/image';
import Link from 'next/link';

const barbers = [
  {
    id: 1,
    name: 'James Wilson',
    title: 'Master Barber',
    image: '/images/download.jpeg',
    specialties: ['Classic Cuts', 'Precise Fades', 'Hot Towel Shaves'],
    experience: '8+ years',
    bio: 'Specializing in classic cuts and precise fades, James brings a perfect blend of traditional techniques and modern style.',
  },
  {
    id: 2,
    name: 'Marcus Thompson',
    title: 'Style Specialist',
    image: '/images/download (1).jpeg',
    specialties: ['Modern Styles', 'Textured Cuts', 'Hair Design'],
    experience: '6+ years',
    bio: 'Marcus is known for his innovative approach to modern styles and his expertise in creating perfectly textured cuts.',
  },
  {
    id: 3,
    name: 'David Rodriguez',
    title: 'Beard Specialist',
    image: '/images/download (2).jpeg',
    specialties: ['Beard Design', 'Facial Hair Styling', 'Premium Shaves'],
    experience: '7+ years',
    bio: 'David has mastered the art of beard design and facial hair styling, creating perfectly sculpted looks for his clients.',
  },
  {
    id: 4,
    name: 'Michael Carter',
    title: 'Creative Director',
    image: '/images/images.jpeg',
    specialties: ['Innovative Styles', 'Contemporary Cuts', 'Custom Designs'],
    experience: '10+ years',
    bio: 'As our Creative Director, Michael brings over a decade of experience in creating innovative styles and contemporary looks.',
  },
];

export default function BarbersPage() {
  return (
    <div className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Meet Our Expert Barbers
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our team of skilled professionals brings years of experience and passion to every cut
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="group relative overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-grotesk font-semibold mb-2 text-white">
                  {barber.name}
                </h2>
                <p className="text-primary mb-3">{barber.title}</p>
                <p className="text-gray-400 mb-4">{barber.bio}</p>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Specialties:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {barber.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    Experience: {barber.experience}
                  </p>
                  <Link
                    href={`/book?barber=${barber.id}`}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 