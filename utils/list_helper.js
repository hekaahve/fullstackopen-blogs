const dummy = (blogs) => {
  if (blogs) {
    return 1;
  } else {
    return 1;
  }
};

const totalLikes = (blogs) => {
  if (blogs) {
    const likes = blogs.map(({ likes }) => likes);
    console.log(likes);

    const reducer = (sum, item) => {
      return sum + item;
    };

    return likes.reduce(reducer, 0);
  }
};

const favoriteBlog = (blogs) => {
  if (blogs) {
    const maxVal = Math.max(...blogs.map((b) => b.likes));
    const best = blogs.find((b) => b.likes == maxVal);
    console.log(best);
    return best;
  }
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
