Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('test something', (I) => {
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
});
