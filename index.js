exports.fizzBuzz = (req, res) => {
  if (req.body.value === 'undefined') {
    res.status(400).send('No message defined');
    return;
  }

  var event = req.body
  if (event.value % 3 === 0 && event.value % 5 === 0) {
    return res.status(200).send({ input: event.value, result: 'FizzBuzz'});
  }
  if (event.value % 3 === 0) {
    return res.status(200).send({ input: event.value, result: 'Fizz'});
  }
  if (event.value % 5 === 0) {
    return res.status(200).send({ input: event.value, result: 'Buzz'});
  }
  return res.status(200).send({ input: event.value, result: event.value});
};

function getResult (err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
}
