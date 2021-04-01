const useMarkupAction = (imageType) => {
  console.log('markup');

  return () => {
    console.log(imageType);
  };
};

export default useMarkupAction();
