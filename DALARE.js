$(() => {
    $('form').on('submit', (event)=>{
        event.preventDefault();
        const userInput = $('input[type="text"]').val();
    $.ajax({
         url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
}).then(
    (data)=> {
        let fetch = data.Poster;
        console.log(fetch);
        document.getElementById('poster').src = fetch;
        $('#title').html(data.Title);
        $('#year').html(data.Year);
        $('#rating').html(data.Rated);
        console.log(data);
        console.log('Request Fulfilled.');
    },
    ()=> {
        console.log('Bad Request Check Promise.');
    }
    );
    });
});



let Aclicks = 0;
let Dclicks = 0;

let Dcount = function (count) {
    Dclicks += 1;
    document.querySelector(".Dcounter").innerHTML = Dclicks + ' Sir please call me D.';
};
let Ddecount = function (count) {
    Dclicks -= 1;
    document.querySelector(".Dcounter").innerHTML = Dclicks + ' Sir please call me D.';
};
let Acount = function (count) {
    Aclicks += 1;
    document.querySelector(".Acounter").innerHTML = Aclicks + ' Its AL-EC! ALEH!';
};
let Adecount = function (count) {
    Aclicks -= 1;
    document.querySelector(".Acounter").innerHTML = Aclicks + ' Its AL-EC! ALEH!';
};
let roast = function () {
    RoastGen.RoastPick();
    console.log(Roast);
    document.querySelector(".Roast").innerHTML = Roast;

};