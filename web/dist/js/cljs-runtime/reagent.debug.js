goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21618__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21619__i = 0, G__21619__a = new Array(arguments.length -  0);
while (G__21619__i < G__21619__a.length) {G__21619__a[G__21619__i] = arguments[G__21619__i + 0]; ++G__21619__i;}
  args = new cljs.core.IndexedSeq(G__21619__a,0,null);
} 
return G__21618__delegate.call(this,args);};
G__21618.cljs$lang$maxFixedArity = 0;
G__21618.cljs$lang$applyTo = (function (arglist__21620){
var args = cljs.core.seq(arglist__21620);
return G__21618__delegate(args);
});
G__21618.cljs$core$IFn$_invoke$arity$variadic = G__21618__delegate;
return G__21618;
})()
);

(o.error = (function() { 
var G__21622__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21623__i = 0, G__21623__a = new Array(arguments.length -  0);
while (G__21623__i < G__21623__a.length) {G__21623__a[G__21623__i] = arguments[G__21623__i + 0]; ++G__21623__i;}
  args = new cljs.core.IndexedSeq(G__21623__a,0,null);
} 
return G__21622__delegate.call(this,args);};
G__21622.cljs$lang$maxFixedArity = 0;
G__21622.cljs$lang$applyTo = (function (arglist__21624){
var args = cljs.core.seq(arglist__21624);
return G__21622__delegate(args);
});
G__21622.cljs$core$IFn$_invoke$arity$variadic = G__21622__delegate;
return G__21622;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
