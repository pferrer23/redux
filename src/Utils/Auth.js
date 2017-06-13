const auth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Pablo Ferrer',
        avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAbVAAAAJDY3YzRiMTM3LTIwNGUtNGY1ZC05NDMxLTExMTA0YjE4NTdlZA.jpg',
        uid: 'pferrer23',
      })
    } ,2000);
  });
};

export default auth;