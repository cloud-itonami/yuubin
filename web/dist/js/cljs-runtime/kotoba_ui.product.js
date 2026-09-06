goog.provide('kotoba_ui.product');
kotoba_ui.product.classes = (function kotoba_ui$product$classes(base,extra){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),((cljs.core.seq(extra))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra)].join(''):null)].join('');
});
/**
 * Compact labelled value. opts: :label, :value, :detail, :status, :id, :class.
 */
kotoba_ui.product.metric = (function kotoba_ui$product$metric(p__23146){
var map__23147 = p__23146;
var map__23147__$1 = cljs.core.__destructure_map(map__23147);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23147__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23147__$1,new cljs.core.Keyword(null,"value","value",305978217));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23147__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23147__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23147__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23147__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__23148 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__metric",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23148,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23148;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-label hig-footnote"], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-value hig-title2"], null),value], null),(cljs.core.truth_((function (){var or__5002__auto__ = detail;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return status;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__metric-detail hig-footnote"], null),(cljs.core.truth_(status)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__status"], null),status], null):null),detail], null):null)], null);
});
/**
 * Purposeful empty state. opts: :title, :body, :actions, :id, :class.
 */
kotoba_ui.product.empty_state = (function kotoba_ui$product$empty_state(p__23178){
var map__23179 = p__23178;
var map__23179__$1 = cljs.core.__destructure_map(map__23179);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"title","title",636505583));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23179__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var G__23180 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__empty",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23180,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23180;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-headline"], null),title], null),(cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hig-footnote kotoba-product__muted"], null),body], null):null),((cljs.core.seq(actions))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__empty-actions"], null)], null),actions):null)], null);
});
/**
 * Accessible responsive table. Columns are {:key k :label s}; rows are maps.
 *   Cell values may be hiccup. opts: :caption, :columns, :rows, :empty, :id, :class.
 */
kotoba_ui.product.data_table = (function kotoba_ui$product$data_table(p__23181){
var map__23182 = p__23181;
var map__23182__$1 = cljs.core.__destructure_map(map__23182);
var caption = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"caption","caption",-855383902));
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var empty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"empty","empty",767870958));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.seq(rows)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"kotoba-product__table-scroll"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var G__23183 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),kotoba_ui.product.classes("kotoba-product__table",class$)], null);
if(cljs.core.truth_(id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23183,new cljs.core.Keyword(null,"id","id",-1388402092),id);
} else {
return G__23183;
}
})(),(cljs.core.truth_(caption)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caption","caption",-855383902),caption], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__23184(s__23185){
return (new cljs.core.LazySeq(null,(function (){
var s__23185__$1 = s__23185;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23185__$1);
if(temp__5825__auto__){
var s__23185__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23185__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23185__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23187 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23186 = (0);
while(true){
if((i__23186 < size__5479__auto__)){
var map__23188 = cljs.core._nth(c__5478__auto__,i__23186);
var map__23188__$1 = cljs.core.__destructure_map(map__23188);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23188__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__23187,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null));

var G__23216 = (i__23186 + (1));
i__23186 = G__23216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23187),kotoba_ui$product$data_table_$_iter__23184(cljs.core.chunk_rest(s__23185__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23187),null);
}
} else {
var map__23190 = cljs.core.first(s__23185__$2);
var map__23190__$1 = cljs.core.__destructure_map(map__23190);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col",new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),label], null),kotoba_ui$product$data_table_$_iter__23184(cljs.core.rest(s__23185__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(columns);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5480__auto__ = (function kotoba_ui$product$data_table_$_iter__23191(s__23192){
return (new cljs.core.LazySeq(null,(function (){
var s__23192__$1 = s__23192;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23192__$1);
if(temp__5825__auto__){
var s__23192__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23192__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23192__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23194 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23193 = (0);
while(true){
if((i__23193 < size__5479__auto__)){
var vec__23195 = cljs.core._nth(c__5478__auto__,i__23193);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23195,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23195,(1),null);
cljs.core.chunk_append(b__23194,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (i__23193,vec__23195,idx,row,c__5478__auto__,size__5479__auto__,b__23194,s__23192__$2,temp__5825__auto__,map__23182,map__23182__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__23191_$_iter__23198(s__23199){
return (new cljs.core.LazySeq(null,((function (i__23193,vec__23195,idx,row,c__5478__auto__,size__5479__auto__,b__23194,s__23192__$2,temp__5825__auto__,map__23182,map__23182__$1,caption,columns,rows,empty,id,class$){
return (function (){
var s__23199__$1 = s__23199;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23199__$1);
if(temp__5825__auto____$1){
var s__23199__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23199__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__23199__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__23201 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__23200 = (0);
while(true){
if((i__23200 < size__5479__auto____$1)){
var map__23202 = cljs.core._nth(c__5478__auto____$1,i__23200);
var map__23202__$1 = cljs.core.__destructure_map(map__23202);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__23201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23247 = (i__23200 + (1));
i__23200 = G__23247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23201),kotoba_ui$product$data_table_$_iter__23191_$_iter__23198(cljs.core.chunk_rest(s__23199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23201),null);
}
} else {
var map__23203 = cljs.core.first(s__23199__$2);
var map__23203__$1 = cljs.core.__destructure_map(map__23203);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23203__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__23191_$_iter__23198(cljs.core.rest(s__23199__$2)));
}
} else {
return null;
}
break;
}
});})(i__23193,vec__23195,idx,row,c__5478__auto__,size__5479__auto__,b__23194,s__23192__$2,temp__5825__auto__,map__23182,map__23182__$1,caption,columns,rows,empty,id,class$))
,null,null));
});})(i__23193,vec__23195,idx,row,c__5478__auto__,size__5479__auto__,b__23194,s__23192__$2,temp__5825__auto__,map__23182,map__23182__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null));

var G__23249 = (i__23193 + (1));
i__23193 = G__23249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23194),kotoba_ui$product$data_table_$_iter__23191(cljs.core.chunk_rest(s__23192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23194),null);
}
} else {
var vec__23206 = cljs.core.first(s__23192__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),(function (){var iter__5480__auto__ = ((function (vec__23206,idx,row,s__23192__$2,temp__5825__auto__,map__23182,map__23182__$1,caption,columns,rows,empty,id,class$){
return (function kotoba_ui$product$data_table_$_iter__23191_$_iter__23209(s__23210){
return (new cljs.core.LazySeq(null,(function (){
var s__23210__$1 = s__23210;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__23210__$1);
if(temp__5825__auto____$1){
var s__23210__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23210__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23210__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23212 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23211 = (0);
while(true){
if((i__23211 < size__5479__auto__)){
var map__23213 = cljs.core._nth(c__5478__auto__,i__23211);
var map__23213__$1 = cljs.core.__destructure_map(map__23213);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23213__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
cljs.core.chunk_append(b__23212,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null));

var G__23251 = (i__23211 + (1));
i__23211 = G__23251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23212),kotoba_ui$product$data_table_$_iter__23191_$_iter__23209(cljs.core.chunk_rest(s__23210__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23212),null);
}
} else {
var map__23214 = cljs.core.first(s__23210__$2);
var map__23214__$1 = cljs.core.__destructure_map(map__23214);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23214__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,key)], null),kotoba_ui$product$data_table_$_iter__23191_$_iter__23209(cljs.core.rest(s__23210__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__23206,idx,row,s__23192__$2,temp__5825__auto__,map__23182,map__23182__$1,caption,columns,rows,empty,id,class$))
;
return iter__5480__auto__(columns);
})()], null),kotoba_ui$product$data_table_$_iter__23191(cljs.core.rest(s__23192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,rows));
})()], null)], null)], null);
} else {
var or__5002__auto__ = empty;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return kotoba_ui.product.empty_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Nothing here yet"], null));
}
}
});
kotoba_ui.product.product_css = ["@layer kotoba.hig{",".kotoba-product__metric{min-width:0;padding:var(--hig-spacing-3);border:var(--hig-hairline) solid var(--hig-color-separator);border-radius:var(--hig-radius-large);background:var(--hig-color-secondary-system-background)}",".kotoba-product__metric-label,.kotoba-product__metric-detail,.kotoba-product__muted{color:var(--hig-color-secondary-label)}",".kotoba-product__metric-value{margin:var(--hig-spacing-1) 0;overflow-wrap:anywhere}",".kotoba-product__status{display:inline-block;margin-right:var(--hig-spacing-2);color:var(--hig-color-tint);font-weight:600}",".kotoba-product__empty{text-align:center;padding:var(--hig-spacing-6);border:var(--hig-hairline) dashed var(--hig-color-separator);border-radius:var(--hig-radius-large)}",".kotoba-product__empty-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:var(--hig-spacing-2);margin-top:var(--hig-spacing-3)}",".kotoba-product__table-scroll{overflow-x:auto}",".kotoba-product__table{width:100%;border-collapse:collapse}",".kotoba-product__table caption{text-align:left;margin-bottom:var(--hig-spacing-2);font-weight:600}",".kotoba-product__table th,.kotoba-product__table td{text-align:left;vertical-align:top;padding:var(--hig-spacing-2) var(--hig-spacing-3);border-bottom:var(--hig-hairline) solid var(--hig-color-separator)}",".kotoba-product__table th{color:var(--hig-color-secondary-label);font-weight:600}","}"].join('');

//# sourceMappingURL=kotoba_ui.product.js.map
