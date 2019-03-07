var API_URL = 'https://api.tickerence.com/api/1.3';

var $eventsTable = $('#events'),
	$eventsTableBody = $eventsTable.find('tbody'),
	events = [];

var Event = function (id,
					  title,
					  start_date,
					  city) {
	this.id = id;
	this.title = title;
	this.start_date = start_date;
	this.city = city;
	this.$body = $('<tr>');
	this.$actionButton = $('<a>');

	this.$body.data('object', this);

	this.createActionButton = function () {
		this.$actionButton
			.attr('href', '#')
			.text('Edytuj');

		this.$actionButton.on('click', function (e) {
			var $thisButton = $(this);

			e.preventDefault();

			alert(
				$thisButton
					.closest('tr')
					.data('object')
					.title
			);
		});
	};

	this.appendToTableBody = function ($tableBody) {
		this.createActionButton();

		this.$body
			.append('<td>' + this.id + '</td>')
			.append('<td>' + this.title + '</td>')
			.append('<td>' + this.start_date + '</td>')
			.append('<td>' + this.city + '</td>')
			.append(
				$('<td>')
					.append(this.$actionButton)
			);

		$tableBody.append(this.$body);
	};
};

$.get(
	API_URL + '/event/list'
).done(function (r) {
	console.log('Zapytanie wykonane prawidłowo.');

	$.each(r, function () {
		var thisEvent = this;

		var event = new Event(
			thisEvent.id,
			thisEvent.title,
			thisEvent.start_date,
			thisEvent.city
		);

		event.appendToTableBody($eventsTableBody);

		events.push(event);
	});
}).fail(function (err) {
	console.log(err);
});