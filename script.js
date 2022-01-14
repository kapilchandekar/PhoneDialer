function dialerClick(type, value) {
    let input = $('#dialer_input_td input');
    let input_val = $('#dialer_input_td input').val();
    if (type == 'dial') {
        input.val(input_val + value);
    } else if (type == 'delete') {
        input.val(input_val.substring(0, input_val.length - 1));
    } else if (type == 'clear') {
        input.val("");
    }
}   