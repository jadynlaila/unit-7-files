$(function() {
    // $("#panel1").hide(3000).show(2000);
    // $("#panel2").fadeTo(1000, 0).fadeTo(2000, .80);
    // $("#panel3").slideUp(1000).delay(1000).slideDown(1500);
    // $("#panel4").fadeTo(1000, .3).slideUp(2000).slideDown(2000).fadeTo(2000, .1).fadeTo(2000, 100);

    // $('#panel1').css({
    //         'color': 'blue',
    //         'font-weight': 'bolder',
    //         'background-color': 'red'
    //     })
    //     // $('#panel1').html("new text")

    $('#panel1-body').html("the background is blue and the text is white");
    $('#panel1-body').css({
        'color': 'white',
        'background-color': 'blue'

    })
    $('#panel1').css({
        'color': 'white',
        'background-color': 'blue'

    })

    $('#panel2-body').html("the background is green and the text is white and the font is bold")
    $('#panel2-body').css({
        'background-color': 'green',
        'font-weight': 'bolder'
    })
    $('#panel2').css({
        'backround-color': 'green',
        'font-weight': 'bolder'
    })

    $('#panel3-body').html("the background is dark grey and the text is black and the font family is monospace, inclusing the panel content");
    $('#panel3-body').css({
        'color': 'black',
        'background-color': 'darkgrey',
        'font-family': 'monospace'

    })
    $('#panel3').css({
        'color': 'black',
        'background-color': 'darkgrey',
        'font-family': 'monospace'

    })

    $('#panel4-body').html("the background is dark grey and the text is black and the font family is monospace, inclusing the panel content");
    $('#panel4-body').css({
        'color': 'white',
        'background-color': 'red',
        'font-family': 'serif'

    })
    $('#panel4').css({
        'color': 'white',
        'background-color': 'red',
        'font-family': 'serif'
    })


    // $('#button1').on('click', function() {
    //     $('#panel1').fadeToggle(1000, 0);

    // })

    // $('#button2').on('click', function() {
    //     let randy = Math.floor(Math.random() * 5000) + 1000;
    //     $('#panel2').hide(1000).delay(randy).show(1000);
    //     $('#panel2-heading').html(`${randy} milliseconds`);
    //     console.log(randy);
    // })

    // $('#button3').on("mouseover", function() {
    //     $('#panel3').fadeOut(1000);
    //     $('#panel4').fadeOut(1000);
    // })
    // $('#button4').on("mouseover", function() {
    //     $('#panel3').fadeIn(1000);
    //     $('#panel4').fadeIn(1000);
    // })

    // $('#button1').on('click', function() {
    //     $('#panel1').toggle(1000);
    //     $('#panel4').toggle(1000);
    // })

    // $('#button2').on('click', function() {
    //     $('#panel2').toggle(1000);
    //     $('#panel3').toggle(1000);
    //     $('#panel4').toggle(1000);
    // })

    // $('#button3').on('click', function() {
    //     $('#panel1').toggle(1000);
    //     $('#panel3').toggle(1000);
    // })

    // $('#button4').on('click', function() {
    //     $('#panel1').toggle(1000);
    //     $('#panel2').toggle(1000);
    // })


    // $('button').on('click', function() {
    //     let panelid = $(this).attr('panelid');
    //     $('#panel' + panelid).toggle(1000);
    //     $('#panel' + panelid + ' .panel-heading').html("this changed")
    // })

    //     $('button').hide();
    //     $('.panel').hide();
    //     $('#button1').show();

    //     $('button').on('click', function() {
    //         let panelid = $(this).attr('panelid');
    //         $('#panel' + panelid).toggle(1000);
    //         $('#panel' + panelid + ' .panel-heading').html("click here to open the next button")
    //     })

    //     $('.panel').on('click', function() {
    //         let panelid = $(this).attr('panelid');
    //         panelid = Number(panelid) + 1;
    //         $('#button' + panelid).toggle(1000);
    //         $('#button' + panelid + ' .panel-heading').html("this changed")
    //         $('#button').html("this changed")
    //     })

    // $('li').on("click", function() {
    //     $(this).next().toggle(300);
    // })
    // my way 
    // $('li').on('click', function() {
    //     $('li').removeClass('highlight');
    //     $(this).addClass('highlight');
    //     $(this).siblings().removeClass('highlight');
    // })
    //packs way(same thing basically)
    $('li').on('click', function() {
        $(this).closest('.list').find('li').filter(".highlight").removeClass('highlight');
        $(this).addClass('highlight');
    })


});