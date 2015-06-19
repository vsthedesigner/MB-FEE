
  // To Load Program Names and info for Lower Listing Area
  $.get('https://api.myjson.com/bins/5bdb3', function(dataArray){
    //loop through data with a count of i and inject data in corresponding div or span
    dataArray.forEach(function(data,i){
      var programName = '.program-panel' + i + '> div > .program-name > h4';
      var lowerProgramName ='.program-panel1 > div > .row > div > .lower-program-name' + i;
      var totalMonthlySales = '.program-panel' + i + '> div > .panel-section-info.column2 > span';
      var lowerMonthlySales = '.program-panel1 > div > .row > div > div.lower-monthly-sales' + i + '> span';
      var monthlyAttendance = '.program-panel1.last-panel > div > .row > div > span.monthly-attendance' +i;
      // replace/insert data in corresponding div
      $(programName).text(data.Name);
      $(lowerProgramName).text(data.Name);
      var totalMonthlySalesFormatted = numeral(data.TotalMonthlySales).format('0,0');
      $(totalMonthlySales).text(totalMonthlySalesFormatted);

      $(lowerMonthlySales).text(totalMonthlySalesFormatted);
      $(monthlyAttendance).text(data.MonthlyAttendance);
      });
    });


// '1,000'
  // Populate panel info
  // $.get ('https://api.myjson.com/bins/17oy7', function(salesArray) {
       //loop through data with a count of i and inject data in corresponding list element
  //   salesArray.forEach(function(sdata,j) {
  //     var planName = '.program-panel' + j + '> div > div.info-panel > div.panel-section-info.column1 > ul > li:nth-child('+ j +')';
  //     var planSales= '.program-panel' + j + '> div > div.info-panel > div.panel-section-info.column2 > ul > li:nth-child('+ j +')';
         // insert/replace text in li element
  //     $(planName).text(sdata.Name)
  //     $(planSales).text(sdata.Sales)
  //   });
  // });