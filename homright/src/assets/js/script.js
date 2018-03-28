jQuery.fn.extend({
    AjoutSuppressionCase: function(nbCaseLigneOuColonne) {
        return this.each(function() {
            var tailleSansCaseDifference = $(this).children();
            var caseDifference = nbCaseLigneOuColonne - tailleSansCaseDifference.length;
            

            console.log('test des la suppression ou ajout de case : ' + caseDifference);
           
            if(caseDifference > 0)
            {
                // Ajoute une case
                for(var i = 0; i < caseDifference; i++)
                {
                    //Probleme : ça clonera aussi les éléments dedans
                    var supressionItemClone = tailleSansCaseDifference.last().clone().appendTo(this);
                    supressionItemClone.find('.objet').remove(); 
                }
            }
            else if(caseDifference < 0)
            {
                // Supprime une case
                tailleSansCaseDifference.slice(caseDifference).remove();
            }
        });
    },
});

var test = function DefinirPositionXY()
{
    $('.case-sol').each(function() {
        $(this).attr('position-x', $(this).prevAll('.case-sol').length+1);
        $(this).attr('position-y', $(this).closest('.ligne-sol').prevAll('.ligne-sol').length+1);
    });
}

var lignes = $('#ligne-totale').on('input propertychange change', function() {

    var nbLignesTotales = $(this).val();
    //console.log('nombre de lignes : ' + nbLignesTotales);
    $('label[for="'+$(this).attr('id')+'"]').html(nbLignesTotales);
    $('#sol-maison.sol').AjoutSuppressionCase(nbLignesTotales);    
    DefinirPositionXY();

}).trigger('change');

var colonnes = $('#colonne-totale').on('input propertychange change', function() {

    var nbColonnesTotales = $(this).val();
    console.log('nombre de colonnes : ' + nbColonnesTotales);
    $('label[for="'+$(this).attr('id')+'"]').html(nbColonnesTotales);      
    $('#sol-maison.sol .ligne-sol').AjoutSuppressionCase(nbColonnesTotales);  
    DefinirPositionXY();

}).trigger('change');



