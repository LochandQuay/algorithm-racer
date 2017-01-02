const APIUtil = {
  createAlgo: data => $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/algorithms',
    dataType: 'JSON',
    contentType: 'application/json',
    data: JSON.stringify(data)
  }),

  fetchScores: category => $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/algorithms',
    dataType: 'json',
    data: {
      category: category
    }
  })
};

module.exports = APIUtil;
