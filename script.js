document.addEventListener('DOMContentLoaded', function() {
    
    for (let i = 0; i < 100; i++) { 
        getClue(i);
    };

    function getClue(i) { 
        var clue = document.createElement('h3');

        var friends = ['Peyton', 'Ashley', 'Daniel', 'Ryan', 'Patrick'];
   
        var location = ['at Moyer Field', 'at Innovation Depot', 'at BSC', 'in the bedroom', 
                        'under a bridge', 'in a Milos bathroom', 'at Camp Crystal Lake', 'in the crowded lobby', 
                        'in the think room', 'in the basement'];
        
        var weapon = ['a ping pong paddle', 'a baseball bat', 'a toothbrush', 'a tire iron', 'butter knife', 
                    'a shoe string', 'a beer bottle', 'a sandbag', 'wet cement', 'a taser', 
                    'a pet possum', 'a tetherball', 'bare hands', 'a wireless controller', 
                    'a toaster', 'a snaggletooth snake', 'an escalator', 
                    'some candle wax', 'a bible', 'the boardgame Clue']

                    clue.click();
                    clue.innerHTML ='Clue ' + (i + 1);
                    clue.addEventListener('click', function() {
                    alert(friends[i % 5] + ' did it ' + location[i % 10] + ' with ' + weapon[i % 20]);
                    })
                    
        document.body.appendChild(clue);
        
    }
});