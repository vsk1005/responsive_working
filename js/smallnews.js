

function doNews(){   
   var divNews = $('#news');
    divNews.empty();
    
    for(var i=0; i<=smallnewsData.length -1; i++){
        
        divNews.append(
            $('<div>').addClass('row')
                    .append(
                        $('<p>').append(
                            smallnewsData[i].source + " [] " +
                            smallnewsData[i].title_section
                        )
                    ),
            $('<div>').addClass('row2')
                    .append(
                        $('<p>').append(
                             smallnewsData[i].title
                        )
                    ),
            $('<div>').addClass('row3')
                    .append(
                        $('<p>').append(
                             smallnewsData[i].desc
                        )
                    ), 
            $('<div>').addClass('row4')
                    .append(
                        $('<p>').append(
                             smallnewsData[i].body
                        )
                    ),
             $('<div>').addClass('row5')
                    .append(
                        $('<p>').append(
                             'Author' + smallnewsData[i].authors
                        ),
                        $('<p>').append(
                             'Editor' + smallnewsData[i].editor
                        )
                    )
         );
            
    }
    //$("img").width(100);
   // $("img").height(100);

}




