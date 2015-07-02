var json = [
  { id: 1, name: "Luiz", title: "Developer"},
  { id: 2, name: "Freneda", title: "Coder"},
  { id: 3, name: "Perez", title: "Programmer"},
  { id: 4, name: "Junior", title: "Intern"}
];

module.exports = function(app) {
    app.get('/api/people', getPeople);
    app.get('/api/people/:id', getPerson);
    app.post('/api/people', addPerson);
    app.delete('/api/people/:id', deletePerson)

    function addPerson(req, res) {
      json.push(req.body);
      res.send(req.body);
    }

    function getPeople(req, res) {
        res.send(json);
    }

    function getPerson(req,res) {
      res.send({ id: 4, name: "Junior", title: "Intern"});
    }

    function deletePerson(req, res) {
      json.splice(0, 1);
      res.send(json);
    }
};
