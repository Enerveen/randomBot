function getDog(ctx) {
  log(ctx);
  fetch('https://api.thedogapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.DOGAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url);
    });
}

function getCat(ctx) {
  log(ctx);
  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: { 'x-api-key': process.env.CATAPI_KEY },
  })
    .then((data) => data.json())
    .then((data) => {
      ctx.replyWithPhoto(data[0].url);
    });
}

module.exports = { getCat, getDog };
