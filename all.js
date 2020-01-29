 window.onload;
    let currentInstrument = 'none';
    let colorist = 'aqua';
    const instruments = document.querySelector('.figure-transform');
    const figuresField = document.querySelector('.figure-view');
    const pipetteArea = document.querySelector('body');
    const gettinCurrentColor = document.getElementById('currentcolor');
    const gettingPreviousColor = document.getElementById('previous-color');
    let currentColor ;
    let previousColor ;

    const test = (event) => {
        console.log(event.target);
    }

    const chooseInstrument = (event) => {
        let current = event.target;
        while (!current.className){
            current = current.parentNode;
        }
        switch(current.className){
            case 'image-text paint_bucket': 
                console.log('paint_bucket');
                document.body.style.cursor="url('assets/icons/paint-bucket.svg'), auto";
                currentInstrument = 'painting';
            break;
            case 'image-text choose_color': 
                console.log('choose_color');
                
                pickPippete(event);
                break;
            case 'image-text move': 
                console.log('move');
                document.body.style.cursor="url('assets/icons/move.svg'), auto";
                currentInstrument = "moving";
            break;
            case 'image-text transform': 
                console.log('transform');
                document.body.style.cursor="url('assets/icons/transform.svg'), auto";
                currentInstrument = "figureTransform";
            break;
        }
    };

    const figureChange = (event) => {
        let targetFigure = event.target;
        switch(currentInstrument){
            case 'painting': 
                console.log("I can paint");
                figurePaint(targetFigure);
                break;
            case 'colorPicker':
        }
    }

    let figurePaint = (targetFigure) => {
        if (targetFigure.className == 'figure-square') {
        event.target.style.backgroundColor = colorist;
        document.body.style.cursor = "auto";
        currentInstrument = 'none';
        }
    }

    let pickPippete = (event) => {
        console.log('hiiiii');
        document.body.style.cursor="url('assets/icons/color-picker.svg'), auto";   
        console.log(document.body.style.cursor);
        currentInstrument = 'colorPicker';
        console.log(currentInstrument);
        pipetteArea.addEventListener('mousedown', pipette);

    }

    let pipette = (event) => {
        let style = getComputedStyle(event.target);
        console.log('veirnnreurfrf');
        let backgroundColor = style.backgroundColor;
        //console.log(backgroundColor);
        previousColor = currentColor;
        currentColor = backgroundColor;
        //console.log(previousColor, currentColor);
        gettinCurrentColor.style.backgroundColor = currentColor;
        gettingPreviousColor.style.backgroundColor = previousColor;
        document.body.style.cursor = "auto";
        currentInstrument = 'none';
        pipetteArea.removeEventListener('mousedown', pipette);
    }
    
    instruments.addEventListener('click', chooseInstrument);
    figuresField.addEventListener('click', figureChange);
   







