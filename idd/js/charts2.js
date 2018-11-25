google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Businesses', 'Business Births' ],
        ['2011', 7765, 570],
        ['2012', 7870, 655],
        ['2013', 8010, 720],
        ['2014', 8135, 945],
        ['2015', 8105, 880],
        ['2016', 8610, 830],
        ['2017', 8790, 830]
      ]);

      var options = {
        width: 1000,
        height: 400,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }