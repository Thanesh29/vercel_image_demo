import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Optimized Image Showcase</h1>
      <p>Leveraging the <code>&lt;Image /&gt;</code> Component</p>
      <Image
        src="/test_image.jpg"
        alt="Test Image"
        width={600}
        height={400}
      />
    </div>
  );
}
