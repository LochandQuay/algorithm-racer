const APIUtil = {
  createAlgo: data => $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/algorithms',
    dataType: 'jsonp',
    contentType: 'application/json',
    data: JSON.stringify(data)
  }),

  fetchScores: (category, maxScore) => $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/algorithms',
    dataType: 'json',
    data: {
      category: category,
      max_score: maxScore
    }
  })
};

module.exports = APIUtil;
