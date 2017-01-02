const APIUtil = {
  createAlgo: data => $.ajax({
    type: 'POST',
    url: 'https://algorithm-racer.herokuapp.com/algorithms',
    dataType: 'JSON',
    contentType: 'application/json',
    data: JSON.stringify(data)
  }),

  fetchScores: (category, maxScore) => $.ajax({
    method: 'GET',
    url: 'https://algorithm-racer.herokuapp.com/algorithms',
    dataType: 'json',
    data: {
      category: category,
      max_score: maxScore
    }
  })
};

module.exports = APIUtil;
