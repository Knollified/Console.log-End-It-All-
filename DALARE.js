$(() => {
    $('form').on('submit', (event)=>{
        event.preventDefault();
        const userInput = $('input[type="text"]').val();
    $.ajax({
         url:'http://www.omdbapi.com/'+ API + userInput
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

let Roast;
let RoastGen = {
RoastPick: function (){
    let Roastlist =[
        'Is your ass jealous of the amount of shit that just came out of your mouth?',"Two wrongs don't make a right, take your parents as an example","If I wanted to kill myself I'd climb your ego and jump to your IQ.","He is so old that he gets nostalgic when he sees the Neolithic cave paintings.","I'd like to see things from your point of view but I can't seem to get my head that far up my ass.","Your family tree must be a cactus because everybody on it is a prick.","It's better to let someone think you are an Idiot than to open your mouth and prove it.","You're so ugly, when your mom dropped you off at school she got a fine for littering.","Your birth certificate is an apology letter from the condom factory.","If laughter is the best medicine, your face must be curing the world.","The only way you'll ever get laid is if you crawl up a chicken's ass and wait.","You must have been born on a highway because that's where most accidents happen.","It looks like your face caught on fire and someone tried to put it out with a hammer.","If ignorance is bliss, you must be the happiest person on earth."," wasn't born with enough middle fingers to let you know how I feel about you.","If you really want to know about mistakes, you should ask your parents.","What language are you speaking? Cause it sounds like bullshit.","If I had a face like yours, I'd sue my parents.","So, a thought crossed your mind? Must have been a long and lonely journey.","Hey, you have something on your chin... no, the 3rd one down","You are proof that evolution CAN go in reverse.","You're so fake, Barbie is jealous","Don't you love nature, despite what it did to you?","You're the reason the gene pool needs a lifeguard.","I'm jealous of all the people that haven't met you!","I would love to insult you... but that would be beyond the level of your intelligence.","You do realize makeup isn't going to fix your stupidity?","There's only one problem with your face, I can see it.","Shock me, say something intelligent.","Hell is wallpapered with all your deleted selfies.","How many times do I have to flush before you go away?","I don't think you are stupid. You just have a bad luck when thinking.","Aha, I see the Fuck-Up Fairy has visited us again!","Keep talking, someday you'll say something intelligent!","Whats the difference between your girlfriend and a walrus? One has a moustache and smells of fish and the other is a walrus.","Calling you an idiot would be an insult to all stupid people.","Yo mama is so ugly, her portraits hang themselves.","You are so ugly when you looked in the mirror your reflection walked away.","You are so ugly when you looked in the mirror your reflection walked away.","You are so ugly when you looked in the mirror your reflection walked away.","Yo mamma is so fat her memory foam mattress forgot","Yo momma's so fat, I swerved to miss her in my car and ran out of gas.","Yo mama so fat she can only store files up to 4GB.","Yo mama so stupid, she thinks Cheerios are donut seeds.","Your momma is so fat, her blood-type is Ragu.","Yo mama's so stupid she thinks Tupac Shakur is a Jewish holiday!","Yo mama so fat, that when she was diagnosed with a fleshing eating disease, the doctor gave her 40 years to live.","Yo mama like a bowling ball. She gets picked up, fingered, rolled down the gutter and the bitch comes back for more.","Yo mama jokes are old and overused, but so is your mom.","What do you call a cow with no legs? Ground beef.What do you call a cow with three legs? Lean beef.What do you call a cow with 2 legs? Yo mama.","Yo momma so fat when she walked past the TV I missed three episodes.","Yo mama so fat, it takes two yo mama jokes to explain it.","Yo mamma so fat, we're concerned for her health.","Yo momma so fat she was born on the 7th, 8th & 9th of July","Yo momma so ugly, even her dildo needs Viagra.","Yo momma is so fat, i took a picture of her last christmas and it's still printing.","Yo momma is so fat, her patronus is a cake.","Yo mama's so fat, God didn't say, Let there be light. He just told your mama to move her fat ass out of the way.","Yo momma is so fat, she wore a Malcom X shirt and a helicopter tried to land on her","Yo mommas so fat I can see the tv behind her due to gravitational lensing","Yo momma so classless she could be a Marxist utopia.","Your mama so fat, when she hauls ass she has to make two trips!","Yo mama so old, in her history class, they just wrote down what they were doing.","Yo momma's so fat, she looks up cheats for WiiFit.","*In your best fake Indian voice* I cannot bring myself to insult your mother, because in my culture the cow is a sacred being.","Yo momma's so fat her splash attack does damage.","Yo momma so fat she had to baptized at Sea World","Yo momma so fat, when she gets in an elevator, it HAS to go DOWN.","Yo mamma so fat not even Dora can explore her.","Yo momma is so dumb she got fired from the sperm bank for drinking on the job.","Yo mama is so stupid, she climbed over a glass wall to see whats on the other side.","Yo mama so poor the pigeons feed her","Your mama so wrinkly, she has to screw her hat on."
    ];
    let randomNumber = Math.floor(Math.random() * 72);
    console.log(randomNumber);
    Roast = Roastlist[randomNumber];
    console.log(Roast);
}
};

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