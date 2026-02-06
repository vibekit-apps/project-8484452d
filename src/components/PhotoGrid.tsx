import Image from 'next/image'

const photos = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Portrait photography',
    category: 'Portrait'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Landscape photography',
    category: 'Landscape'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Wedding photography',
    category: 'Wedding'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Nature photography',
    category: 'Nature'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Street photography',
    category: 'Street'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1502780402662-acc01917949e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Portrait photography',
    category: 'Portrait'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Landscape photography',
    category: 'Landscape'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Event photography',
    category: 'Event'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Nature photography',
    category: 'Nature'
  }
]

export default function PhotoGrid() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            A collection of my favorite shots across different genres and styles. 
            Each image tells a unique story and captures a special moment in time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}