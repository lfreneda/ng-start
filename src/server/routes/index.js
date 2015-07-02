module.exports = function(app) {
    app.get('/api/people', getPeople);

    function getPeople(req, res, next) {
       
        var json = [
		  { id: 1, name: "Luiz", title: "Developer"},
		  { id: 2, name: "Freneda", title: "Coder"},
		  { id: 3, name: "Perez", title: "Programmer"},
		  { id: 4, name: "Junior", title: "Intern"}
		];

        res.send(json);
    }
};