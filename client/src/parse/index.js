import $ from 'jquery';

const Parse = {
  server: `http://127.0.0.1:3000/list/items`,

  create: (item, successCB, errorCB = null) => {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(item),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('Failed to create item', error);
      }
    })
  },

  readAll: (successCB, errorCB = null) => {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('Failed to create item', error);
      }
    })
  },

  update: (id, property, value, successCB, errorCB = null) => {
    $.ajax({
      url: `${Parse.server}/${id}`,
      type: 'PATCH',
      data: JSON.stringify({ property, value }),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('Failed to update item', error);
      }
    })
  }
};

export default Parse;