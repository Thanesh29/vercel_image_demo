import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Optimized Image Showcase</h1>
      <p>Leveraging the <code>&lt;Image /&gt;</code> Component</p>
      <Image
        src="/test_image.jpg" // Path to your image
        alt="Sample Test Image"
        width={600} // Image width in pixels
        height={400} // Image height in pixels
        loading="lazy" // Ensures lazy loading
      />
    </div>
  );
}

