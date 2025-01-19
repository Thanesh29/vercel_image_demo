import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Optimized Image Showcase</title>
      </Head>

      <main>
        <h1>Welcome to the Optimized Image Showcase</h1>

        {/* Example Image Without Size and Lazy Loading */}
        <div>
          <Image 
            src="/path/to/your/image.jpg" 
            alt="Sample Image"
            // Notice there's no width and height specified here
          />
        </div>
        
        {/* Other images could be added in a similar manner */}
        <div>
          <Image 
            src="/path/to/another-image.jpg" 
            alt="Another Image"
            // No size or lazy loading attributes here either
          />
        </div>
      </main>
    </div>
  );
}

