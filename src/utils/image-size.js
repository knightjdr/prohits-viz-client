const imageSize = (uri) => (
  new Promise((resolve) => {
    const img = new Image();
    img.addEventListener('load', function onLoad () {
      resolve([this.naturalHeight, this.naturalWidth]);
    });
    img.src = uri;
  })
);

export default imageSize;
