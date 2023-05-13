$(document).ready(()=>{
  let firstName =$('#firstName')
  firstName.on('focusout',()=>{
    if(firstName.val() === ''){

        firstName.addClass('is-invalid')
        firstName.removeClass('is-valid')

        $('#firstName+div').html('First name can not be empty').addClass('invalid-feedback').removeClass('valid-feedback')

    }else if(firstName.val().length<3){

        firstName.addClass('is-invalid').removeClass('is-valid')
        $('#firstName+div').html('First name must be at least 3 characters').addClass('invalid-feedback').removeClass('valid-feedback')

    }else{
        firstName.addClass('is-valid').removeClass('is-invalid')
    }

    

  })
})