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
            src="/test_image.jpg" 
            alt="Sample Image"
            // Notice there's no width and height specified here
          />
        </div>
      </main>
    </div>
  );
}

