export const calculateStars = (reviews) => {
    let stars;
  
    if (reviews < 3) {
      stars = 1;
    } else if (reviews >= 3 && reviews < 6) {
      stars = 2;
    } else if (reviews >= 6 && reviews < 15) {
      stars = 3;
    } else if (reviews >= 15 && reviews < 25) {
      stars = 4;
    } else if (reviews >= 25) {
      stars = 5;
    }
  
    return stars;
  };