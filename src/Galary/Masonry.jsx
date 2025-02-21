function importAll(r) {
  return r.keys().map((fileName) => r(fileName));
}

const images = importAll(
  require.context("../Images", false, /\.(png|jpe?g|svg)$/)
);

function masonry() {
  return (
    <div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Masonry ${index + 1}`}
          className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
        />
      ))}
    </div>
  );
}

export default masonry;
