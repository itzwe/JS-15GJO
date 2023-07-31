export function imageChange(node){
  let counter = 0;
    const images = [
      "../assets/images/icon/icon-love.svg",
      "../assets/images/icon/icon-love2.svg",
    ];

    return () => {
      counter++;
      if (counter >= images.length) {
        counter = 0;
      }

      node.setAttribute("src", images[counter]);
    };
}

