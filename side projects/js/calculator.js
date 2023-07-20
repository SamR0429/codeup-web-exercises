$(() => {

    let input = 0
    let output = 0
    let total = 0

    $('#add-btn').on('click', () => {
        input = $('#number').val();
        output = $('#total-output').text();
        total = parseInt(input) + parseInt(output)
        $('#total-output').text(total);
        console.log(total);
    });


    $('#subtract-btn').on('click', () => {
        input = $('#number').val();
        output = $('#total-output').text();
        total = parseInt(output) - (parseInt(input));
        $('#total-output').text(total);
        console.log(total);
    });

    $('#multiply-btn').on('click', () => {
        input = $('#number').val();
        output = $('#total-output').text();
        total = parseInt(output) * (parseInt(input));
        $('#total-output').text(total);
        console.log(total);
    });

    $('#divide-btn').on('click', () => {
        input = $('#number').val();
        output = $('#total-output').text();
        total = parseInt(output) / (parseInt(input));
        $('#total-output').text(total);
        console.log(total);
    });



});



