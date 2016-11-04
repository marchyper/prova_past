/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var randX;
         var randY;
      
         function randomNumbers(){
         	randX = Math.floor(Math.random()*800);
         	randY = Math.floor(Math.random()*800);
         	moveMe();
         }
      
         randomNumbers();
      
         function moveMe(){
         	sym.getSymbol("ninu").animate({left: randX, top:randY},1000,randomNumbers);
         }
         sym.getSymbol("ninu").hide();
      
      });
      //Edge binding end
      
      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'caixes'
   (function(symbolName) {   
   
   })("caixes");
   //Edge symbol end:'caixes'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-4557940");