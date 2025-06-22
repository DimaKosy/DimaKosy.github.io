$(document).ready(function () {
    $(document).on('click', '.element_button_class', function () {
        
        let id = $(this).attr('id');

        $.ajax({
            url: `./assets/html/${id}.html`,
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#projectContainer').html(data);
            },
            error: function (error) {
                console.log('Error fetching data:', error);
            }
        });
    });


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
            
            data.file.forEach(element => {
                $('#project_buttons').append(
                    `<button id=\"${element}\" class=\"element_button_class btn btn-lg btn-primary\" type=\"button\">${element}</button>`
                );
            });

        },
        error: function (error) {
            console.log('Error fetching data:', error);
        }
    });
});