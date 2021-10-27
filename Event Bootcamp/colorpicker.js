let colors = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];

document.querySelector('.color')
.addEventListener('keyup', (e) => {

    let input = e.target.value; // input value

    // empty error msg
    document.querySelector('p.error').innerText = '';
    
    // Suggestions
    let found = colors.filter((color) => { // Filtera fram alla färger som innehåller input-värdet
        return color.includes(input);
    })

    // update UI with suggestions
    document.querySelector('p.suggestions').innerText = found.join(', ');

    // on enter, check if array includes input color
    if(e.code === 'Enter') {
        // om e.target.value finns i arrayen colors, sätt bakgrunden till den färgen
        if(colors.includes(e.target.value)) {
            // color exist!!
            document.querySelector('body').style.backgroundColor = e.target.value;
        } else {
            // annars kasta ett fel
            error(e); // if no match, show error
        }

        e.target.value = '' // Empty input el   
    
    }
})

function error(e){
    // leta reda på p.error och sätt in innerText = 'hittar inte den färgen.'
    document.querySelector('p.error')
    .innerText = 'Hittar inte färgen.'
}