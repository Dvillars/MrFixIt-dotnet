var test = "it works";

$(document).ready(function () {
    $('.claim').click(function () {
        var id = this.id;
        $.ajax({
            type: 'GET',
            data: { theId: id },
            url: '/Jobs/Claimed/theId',
            success: function (result) {
                console.log(result);
                $('#claimed' + result).text('You claimed this task!');
                location.reload();
            }
        })
    });
});