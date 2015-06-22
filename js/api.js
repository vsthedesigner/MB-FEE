
  // To Load Program Names and info for Lower Listing Area
  $.get('https://api.myjson.com/bins/5bdb3', function(dataArray){
    //loop through data with a count of i and inject data in corresponding div or span
    dataArray.forEach(function(data,i){
      var programName = '.program-panel' + i + '> div > .program-name > h4';
      var lowerProgramName ='.program-panel1 > div > .row > div > .lower-program-name' + i;
      var totalMonthlySales = '.program-panel' + i + '> div > .panel-section-info.column2';
      var lowerMonthlySales = '.program-panel1 > div > .row > div > div.lower-monthly-sales' + i;
      var monthlyAttendance = '.program-panel1.last-panel > div > .row > div > span.monthly-attendance' +i;
      // replace/insert data in corresponding div
      $(programName).text(data.Name);
      $(lowerProgramName).text(data.Name);
      //Add commas to numbers >= 1000 (i.e 1,000, 22,000)
      var totalMonthlySalesFormatted = numeral(data.TotalMonthlySales).format('0,0');

      $(totalMonthlySales).text('$' + totalMonthlySalesFormatted);
      $(lowerMonthlySales).text('$' + totalMonthlySalesFormatted);
      $(monthlyAttendance).text(data.MonthlyAttendance);
      });
    });

  //Load plan name and sales into each panel
  $.get ('https://api.myjson.com/bins/17oy7', function(salesArray) {
    console.log(salesArray)
    //loop through data with a count of i and inject data in corresponding div or span
    salesArray.forEach(function(sdata,j) {
      var planName = '.program-panel' + Math.ceil(j/7) +' > div > div.info-panel > div.panel-section-info.column1 > ul';
      var planSales= '.program-panel' + Math.ceil(j/7) + ' > div > div.info-panel > div.panel-section-info.column2 > ul';

      //Add commas to numbers >= 1000 (i.e 1,000, 22,000)
      var planSalesFormatted = numeral(sdata. Sales).format('0,0');
      //append li items in ul with containing text
      $(planName).append($('<li>').text(sdata.Name));
      $(planSales).append($('<li>').text('$' + planSalesFormatted));
    });
  });