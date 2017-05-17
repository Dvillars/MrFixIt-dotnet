var test = "it works";

$(document).ready(function () {

    $('.claim').click(function () {
        var id = this.id;
        $.ajax({
            type: 'GET',
            data: { theId: id },
            url: '/Jobs/Claimed/',
            success: function (result) {
                console.log(result);
                $('#claimed' + result).text('You claimed this task!');
                location.reload();
            }
        })
    });

    $('.active').click(function () {
        var id = this.id;
        $.ajax({
            type: 'GET',
            data: { theId: id },
            url: '/Workers/Active/',
            success: function (result) {
                console.log(result)
                $('#pending' + result).text('Active');
                location.reload();
            }
        });
    });

    $('.complete').click(function () {
        var id = this.id;
        $.ajax({
            type: 'GET',
            data: { theId: id },
            url: '/Workers/Complete/',
            success: function (result) {
                console.log(result)
                location.reload();
            }
        });
    });

});