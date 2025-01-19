export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Optimized Image Showcase</h1>
      <p>Leveraging the <code>&lt;img /&gt;</code> Component</p>
      <img
        src="/test_image.jpg"
        alt="Test Image"
        width="600"
        height="400"
      />
    </div>
  );
}
