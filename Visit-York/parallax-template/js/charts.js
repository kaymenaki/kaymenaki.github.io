
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  /*
      var data = new google.visualization.DataTable();
      data.addColumn('timeofday', 'Time of Day');
      data.addColumn('number', 'Population');

      data.addRows([
        [{v: [12, 0, 0], f: '2018'}, 211975],
        [{v: [13, 0, 0], f: '2019'}, 213356],
        [{v: [14, 0, 0], f: '2020'}, 214615],
        [{v: [15, 0, 0], f: '2021'}, 215794],
        [{v: [16, 0, 0], f: '2022'}, 217058],
        [{v: [17, 0, 0], f: '2023'}, 218463],
        [{v: [18, 0, 0], f: '2024'}, 219943],
        [{v: [19, 0, 0], f: '2025'}, 221504],
        [{v: [20, 0, 0], f: '2026'}, 223058],
        [{v: [21, 0, 0], f: '2027'}, 224604],
        [{v: [22, 0, 0], f: '2028'}, 226044],
        [{v: [23, 0, 0], f: '2029'}, 227436],
        [{v: [24, 0, 0], f: '2030'}, 228783],
        [{v: [25, 0, 0], f: '2031'}, 230112],
        [{v: [26, 0, 0], f: '2032'}, 231289],
        [{v: [27, 0, 0], f: '2033'}, 232293],
        [{v: [28, 0, 0], f: '2034'}, 233248],
        [{v: [29, 0, 0], f: '2035'}, 234231],
        [{v: [30, 0, 0], f: '2036'}, 235246],
        [{v: [31, 0, 0], f: '2037'}, 236278],
        [{v: [32, 0, 0], f: '2038'}, 237293],
        [{v: [33, 0, 0], f: '2039'}, 238279],
      ]);
*/
      var options = {
        title: 'Long Term Population Projection',
        hAxis: {
          title: 'Year',
          format: 'YYYY',
          viewWindow: {
            min: [11, 30, 0],
            max: [33, 30, 0]
          }
        },
        vAxis: {
          title: 'Population'
        }
      };

      var data = google.visualization.arrayToDataTable([
        ['Year', 'Population' ],
        ['2018', 211975],
        ['2019', 213356],
        ['2020', 214615],
        ['2021', 215794],
        ['2022', 217058],
        ['2023', 218463],
        ['2024', 219943],
        ['2025', 221504],
        ['2026', 223058],
        ['2027', 224604],
        ['2028', 226044],
        ['2029', 227436],
        ['2030', 228783],
        ['2031', 230112],
        ['2032', 231289],
        ['2033', 232293],
        ['2034', 233248],
        ['2035', 234231],
        ['2036', 235246],
        ['2037', 236278],
        ['2038', 237293],
        ['2039', 238279]
      ]);

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }