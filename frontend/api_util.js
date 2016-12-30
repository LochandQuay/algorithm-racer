const APIUtil = {
  createAlgo: data => $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/algorithms',
    dataType: 'JSON',
    data: data
  })
};
