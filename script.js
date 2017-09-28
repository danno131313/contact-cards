$(document).ready(function(){
    $('form').submit(function(){
        var first = $('#first_name').val();
        var last = $('#last_name').val();
        var description = $('textarea').val();
        var newContact = "<div class='contactcard'>" +
                         "    <p class='description'>" + description + "</p>" +
                         "    <h1>" + first + " " + last + "</h1>" +
                         "    <p class='clickme'>Click me to see a description!" +
                         "</div>"

        $('#contacts').append(newContact);
        createClickListener();
        $('.inputfield').val("");
        return false;
    });
});

function createClickListener(){
    $('.contactcard').on('click', function(){
        console.log(this);
        $(this).children().toggle();
    });
}
