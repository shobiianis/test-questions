//corrrect

function guessGifts(wishlist, presents){

gift=[]
    for(let i=0;i<presents.length;i++){
        for(let j=0;j<wishlist.length;j++){
            if(presents[i].size===wishlist[j].size && presents[i].clatters===wishlist[j].clatters && presents[i].weight===wishlist[j].weight){
                gift.push(wishlist[j].name)
            } 
        }
    }

    return gift 
}
var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
    ];
    var presents = [
    {  size: "small", clatters: "no", weight: "light"},
    {size: "small", clatters: "yes", weight: "heavy"}
    ];

console.log(guessGifts (wishlist, presents))