$(document).ready(function () {
    $.ajax({
        url: './assets/html/FYP.html',
        method: 'GET',
        dataType: 'html',
        success: function (data) {
            $('#projectContainer').html(data)
        },
        error: function (error) {
            console.log('Error fetching data:', error);
        }
    });

    //read file
    $.ajax({
        url: './assets/html/catalogue.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            
            console.log(data);

        },
        error: function (error) {
            console.log('Error fetching data:', error);
        }
    });
});