module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(
        date
      ).getDate()}/${new Date(date).getFullYear()}`;
    },
  };



  // Handlebars.registerHelper('limit', function (arr, limit) {
  //   if (!Array.isArray(arr)) { return []; }
  //   return arr.slice(0, limit);
  // });
  