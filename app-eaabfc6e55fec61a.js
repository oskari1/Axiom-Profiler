let _=0,a1=`string`,W=1,a2=`Object`,Y=`utf-8`,a7=201,V=null,X=`undefined`,a3=4,a0=`function`,a4=16,T=128,S=Array,Z=Error,a5=Object,a6=Promise,$=Uint8Array,U=undefined;var M=(async(a,b)=>{if(typeof Response===a0&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===a0){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var t=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==V){return `${a}`};if(b==a1){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==V){return `Symbol`}else{return `Symbol(${b})`}};if(b==a0){const b=a.name;if(typeof b==a1&&b.length>_){return `Function(${b})`}else{return `Function`}};if(S.isArray(a)){const b=a.length;let c=`[`;if(b>_){c+=t(a[_])};for(let d=W;d<b;d++){c+=`, `+ t(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>W){d=c[W]}else{return toString.call(a)};if(d==a2){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a2}};if(a instanceof Z){return `${a.name}: ${a.message}\n${a.stack}`};return d});var v=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1__h2d21395a7f115ba6(a,c,h(d))});var O=((a,b)=>{});var C=((a,c,d)=>{b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8f2935d16529b525(a,c,h(d))});var G=((a,b)=>{a=a>>>_;const c=F();const d=c.subarray(a/a3,a/a3+ b);const e=[];for(let a=_;a<d.length;a++){e.push(g(d[a]))};return e});var h=(a=>{if(e===c.length)c.push(c.length+ W);const b=e;e=c[b];c[b]=a;return b});var g=(a=>{const b=d(a);f(a);return b});var B=((a,d,e)=>{try{b._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he810d441412aa20a(a,d,y(e))}finally{c[x++]=U}});var R=(async(a)=>{if(b!==U)return b;if(typeof a===X){a=new URL(`app-eaabfc6e55fec61a_bg.wasm`,import.meta.url)};const c=N();if(typeof a===a1||typeof Request===a0&&a instanceof Request||typeof URL===a0&&a instanceof URL){a=fetch(a)};O(c);const {instance:d,module:e}=await M(await a,c);return P(d,e)});var Q=(a=>{if(b!==U)return b;const c=N();O(c);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const d=new WebAssembly.Instance(a,c);return P(d,a)});function D(a,c){try{return a.apply(this,c)}catch(a){b.__wbindgen_exn_store(h(a))}}var H=((a,c,d,e)=>{b.wasm_bindgen__convert__closures__invoke2_mut__h1dc69f16776f5f3e(a,c,h(d),h(e))});var P=((a,c)=>{b=a.exports;R.__wbindgen_wasm_module=c;r=V;E=V;j=V;b.__wbindgen_start();return b});var s=(()=>{if(r===V||r.byteLength===_){r=new Int32Array(b.memory.buffer)};return r});var q=(a=>a===U||a===V);var d=(a=>c[a]);var N=(()=>{const c={};c.wbg={};c.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});c.wbg.__wbindgen_object_clone_ref=(a=>{const b=d(a);return h(b)});c.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==W){b.a=_;return !0};const c=!1;return c});c.wbg.__wbindgen_string_new=((a,b)=>{const c=l(a,b);return h(c)});c.wbg.__wbindgen_number_new=(a=>{const b=a;return h(b)});c.wbg.__wbg_graphvizdummyhack_0852dd0248253ddd=function(){return D((()=>{const b=a();return h(b)}),arguments)};c.wbg.__wbg_instance_f60981357d5efe77=(a=>{const b=d(a).instance();return h(b)});c.wbg.__wbindgen_string_get=((a,c)=>{const e=d(c);const f=typeof e===a1?e:U;var g=q(f)?_:p(f,b.__wbindgen_malloc,b.__wbindgen_realloc);var h=m;s()[a/a3+ W]=h;s()[a/a3+ _]=g});c.wbg.__wbg_renderSVGElement_5841c8dc19e8ebb5=function(){return D(((a,c,e,f)=>{let g;let i;try{g=c;i=e;const b=d(a).renderSVGElement(l(c,e),L.__wrap(f));return h(b)}finally{b.__wbindgen_free(g,i,W)}}),arguments)};c.wbg.__wbg_instanceof_WindowWithViz_db507c0d28180f70=(a=>{let b;try{b=d(a) instanceof Window}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_instanceof_VizInstance_69ecf28f56b930b4=(a=>{let b;try{b=d(a) instanceof a5}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_Viz_18168f7e2c61b62f=(a=>{const b=d(a).Viz;return h(b)});c.wbg.__wbg_getReader_60b03253b647519a=function(){return D(((a,b)=>{const c=d(a).getReader(d(b));return h(c)}),arguments)};c.wbg.__wbg_done_2ffa852272310e47=(a=>{const b=d(a).done;return b});c.wbg.__wbg_value_9f6eeb1e2aab8d96=(a=>{const b=d(a).value;return h(b)});c.wbg.__wbg_log_7c3433e130418e14=((a,c)=>{var d=G(a,c).slice();b.__wbindgen_free(a,c*a3,a3);console.log(...d)});c.wbg.__wbg_listenerid_12315eee21527820=((a,b)=>{const c=d(b).__yew_listener_id;s()[a/a3+ W]=q(c)?_:c;s()[a/a3+ _]=!q(c)});c.wbg.__wbg_setlistenerid_3183aae8fa5840fb=((a,b)=>{d(a).__yew_listener_id=b>>>_});c.wbg.__wbg_subtreeid_e348577f7ef777e3=((a,b)=>{const c=d(b).__yew_subtree_id;s()[a/a3+ W]=q(c)?_:c;s()[a/a3+ _]=!q(c)});c.wbg.__wbg_setsubtreeid_d32e6327eef1f7fc=((a,b)=>{d(a).__yew_subtree_id=b>>>_});c.wbg.__wbg_cachekey_b61393159c57fd7b=((a,b)=>{const c=d(b).__yew_subtree_cache_key;s()[a/a3+ W]=q(c)?_:c;s()[a/a3+ _]=!q(c)});c.wbg.__wbg_setcachekey_80183b7cfc421143=((a,b)=>{d(a).__yew_subtree_cache_key=b>>>_});c.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(d(a))});c.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=d(a).queueMicrotask;return h(b)});c.wbg.__wbindgen_is_function=(a=>{const b=typeof d(a)===a0;return b});c.wbg.__wbindgen_is_object=(a=>{const b=d(a);const c=typeof b===`object`&&b!==V;return c});c.wbg.__wbindgen_is_undefined=(a=>{const b=d(a)===U;return b});c.wbg.__wbg_error_71d6845bf00a930f=((a,c)=>{var d=G(a,c).slice();b.__wbindgen_free(a,c*a3,a3);console.error(...d)});c.wbg.__wbg_log_1f7f93998ab961f7=((a,c)=>{var d=G(a,c).slice();b.__wbindgen_free(a,c*a3,a3);console.log(...d)});c.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=d(a) instanceof Window}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_document_d609202d16c38224=(a=>{const b=d(a).document;return q(b)?_:h(b)});c.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=d(a).location;return h(b)});c.wbg.__wbg_confirm_1c06783e8e1a3b07=function(){return D(((a,b,c)=>{const e=d(a).confirm(l(b,c));return e}),arguments)};c.wbg.__wbg_location_6fd8f140f024ba10=(a=>{const b=d(a).location;return q(b)?_:h(b)});c.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=d(a).body;return q(b)?_:h(b)});c.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return D(((a,b,c)=>{const e=d(a).createElement(l(b,c));return h(e)}),arguments)};c.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return D(((a,b,c,e,f)=>{const g=d(a).createElementNS(b===_?U:l(b,c),l(e,f));return h(g)}),arguments)};c.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,c)=>{const e=d(a).createTextNode(l(b,c));return h(e)});c.wbg.__wbg_instanceof_Element_3f326a19cc457941=(a=>{let b;try{b=d(a) instanceof Element}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_namespaceURI_7cc7ef157e398356=((a,c)=>{const e=d(c).namespaceURI;var f=q(e)?_:p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);var g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_id_ba8ed2468700af37=((a,c)=>{const e=d(c).id;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,c)=>{d(a).innerHTML=l(b,c)});c.wbg.__wbg_outerHTML_b5a8d952b5615778=((a,c)=>{const e=d(c).outerHTML;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_children_990f38c4f4d5c721=(a=>{const b=d(a).children;return h(b)});c.wbg.__wbg_getAttribute_bff489553dd803cc=((a,c,e,f)=>{const g=d(c).getAttribute(l(e,f));var h=q(g)?_:p(g,b.__wbindgen_malloc,b.__wbindgen_realloc);var i=m;s()[a/a3+ W]=i;s()[a/a3+ _]=h});c.wbg.__wbg_getElementsByClassName_2bec3dc564edbab7=((a,b,c)=>{const e=d(a).getElementsByClassName(l(b,c));return h(e)});c.wbg.__wbg_getElementsByTagName_ec3f759c6b7f5daa=((a,b,c)=>{const e=d(a).getElementsByTagName(l(b,c));return h(e)});c.wbg.__wbg_querySelector_efbef0bce19ae6c9=function(){return D(((a,b,c)=>{const e=d(a).querySelector(l(b,c));return q(e)?_:h(e)}),arguments)};c.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return D(((a,b,c)=>{d(a).removeAttribute(l(b,c))}),arguments)};c.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return D(((a,b,c,e,f)=>{d(a).setAttribute(l(b,c),l(e,f))}),arguments)};c.wbg.__wbg_key_cf8022c18f47869e=((a,c)=>{const e=d(c).key;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_data_ba3ea616b5392abf=(a=>{const b=d(a).data;return h(b)});c.wbg.__wbg_view_1fe68975176283b3=(a=>{const b=d(a).view;return q(b)?_:h(b)});c.wbg.__wbg_respond_6272b341f88864a2=function(){return D(((a,b)=>{d(a).respond(b>>>_)}),arguments)};c.wbg.__wbg_debug_678fc976919895d2=((a,b,c,e)=>{console.debug(d(a),d(b),d(c),d(e))});c.wbg.__wbg_error_e60eff06f24ab7a4=(a=>{console.error(d(a))});c.wbg.__wbg_error_ce00188b70015ed4=((a,b,c,e)=>{console.error(d(a),d(b),d(c),d(e))});c.wbg.__wbg_info_7904cb81904ea2ec=((a,b,c,e)=>{console.info(d(a),d(b),d(c),d(e))});c.wbg.__wbg_log_a4530b4fe289336f=(a=>{console.log(d(a))});c.wbg.__wbg_log_aaedbaa276606939=((a,b,c,e)=>{console.log(d(a),d(b),d(c),d(e))});c.wbg.__wbg_warn_0345511f899411e2=((a,b,c,e)=>{console.warn(d(a),d(b),d(c),d(e))});c.wbg.__wbg_addEventListener_9bf60ea8a362e5e4=function(){return D(((a,b,c,e)=>{d(a).addEventListener(l(b,c),d(e))}),arguments)};c.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return D(((a,b,c,e,f)=>{d(a).addEventListener(l(b,c),d(e),d(f))}),arguments)};c.wbg.__wbg_removeEventListener_66ee1536a0b32c11=function(){return D(((a,b,c,e)=>{d(a).removeEventListener(l(b,c),d(e))}),arguments)};c.wbg.__wbg_removeEventListener_9ece7e86d1135657=function(){return D(((a,b,c,e,f)=>{d(a).removeEventListener(l(b,c),d(e),f!==_)}),arguments)};c.wbg.__wbg_instanceof_HtmlInputElement_e7869aaef9cbb0e6=(a=>{let b;try{b=d(a) instanceof HTMLInputElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_setchecked_c1d5c3726082e274=((a,b)=>{d(a).checked=b!==_});c.wbg.__wbg_files_84acf164900adf19=(a=>{const b=d(a).files;return q(b)?_:h(b)});c.wbg.__wbg_value_e024243a9dae20bc=((a,c)=>{const e=d(c).value;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_setvalue_5b3442ff620b4a5d=((a,b,c)=>{d(a).value=l(b,c)});c.wbg.__wbg_name_bbf9c43b9611377a=((a,c)=>{const e=d(c).name;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_value_57e57170f6952449=((a,c)=>{const e=d(c).value;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_setvalue_a11f3069fd7a1805=((a,b,c)=>{d(a).value=l(b,c)});c.wbg.__wbg_byobRequest_05466bb0cacd89fa=(a=>{const b=d(a).byobRequest;return q(b)?_:h(b)});c.wbg.__wbg_close_d29a75e8efc5fa94=function(){return D((a=>{d(a).close()}),arguments)};c.wbg.__wbg_length_3a540c5a953d15b4=(a=>{const b=d(a).length;return b});c.wbg.__wbg_item_97e4102176c1e955=((a,b)=>{const c=d(a).item(b>>>_);return q(c)?_:h(c)});c.wbg.__wbg_close_79df9bcee94a607c=function(){return D((a=>{d(a).close()}),arguments)};c.wbg.__wbg_enqueue_e8019641f9877e27=function(){return D(((a,b)=>{d(a).enqueue(d(b))}),arguments)};c.wbg.__wbg_read_3e77a5c909c5876a=((a,b)=>{const c=d(a).read(d(b));return h(c)});c.wbg.__wbg_releaseLock_5485b9e8bef73072=(a=>{d(a).releaseLock()});c.wbg.__wbg_cancel_42c4488392c4d9e2=(a=>{const b=d(a).cancel();return h(b)});c.wbg.__wbg_newwithstrsequenceandoptions_4806b667a908f161=function(){return D(((a,b)=>{const c=new Blob(d(a),d(b));return h(c)}),arguments)};c.wbg.__wbg_stream_0f52618247e617b7=(a=>{const b=d(a).stream();return h(b)});c.wbg.__wbg_target_52ddf6955f636bf5=(a=>{const b=d(a).target;return q(b)?_:h(b)});c.wbg.__wbg_bubbles_f1cdd0584446cad0=(a=>{const b=d(a).bubbles;return b});c.wbg.__wbg_cancelBubble_976cfdf7ac449a6c=(a=>{const b=d(a).cancelBubble;return b});c.wbg.__wbg_composedPath_12a068e57a98cf90=(a=>{const b=d(a).composedPath();return h(b)});c.wbg.__wbg_parentNode_92a7017b3a4fad43=(a=>{const b=d(a).parentNode;return q(b)?_:h(b)});c.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=d(a).parentElement;return q(b)?_:h(b)});c.wbg.__wbg_lastChild_a62e3fbaab87f734=(a=>{const b=d(a).lastChild;return q(b)?_:h(b)});c.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=d(a).nextSibling;return q(b)?_:h(b)});c.wbg.__wbg_setnodeValue_630c6470d05b600e=((a,b,c)=>{d(a).nodeValue=b===_?U:l(b,c)});c.wbg.__wbg_textContent_2f37235e13f8484b=((a,c)=>{const e=d(c).textContent;var f=q(e)?_:p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);var g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return D(((a,b)=>{const c=d(a).appendChild(d(b));return h(c)}),arguments)};c.wbg.__wbg_insertBefore_726c1640c419e940=function(){return D(((a,b,c)=>{const e=d(a).insertBefore(d(b),d(c));return h(e)}),arguments)};c.wbg.__wbg_removeChild_942eb9c02243d84d=function(){return D(((a,b)=>{const c=d(a).removeChild(d(b));return h(c)}),arguments)};c.wbg.__wbg_instanceof_ShadowRoot_0bd39e89ab117f86=(a=>{let b;try{b=d(a) instanceof ShadowRoot}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_host_09eee5e3d9cf59a1=(a=>{const b=d(a).host;return h(b)});c.wbg.__wbg_instanceof_SvgsvgElement_e3ef1b44a2b87828=(a=>{let b;try{b=d(a) instanceof SVGSVGElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_createObjectURL_9fbd9480174d7f02=function(){return D(((a,c)=>{const e=URL.createObjectURL(d(c));const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f}),arguments)};c.wbg.__wbg_origin_595edc88be6e66b8=function(){return D(((a,c)=>{const e=d(c).origin;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f}),arguments)};c.wbg.__wbg_pathname_1ab7e82aaa4511ff=function(){return D(((a,c)=>{const e=d(c).pathname;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f}),arguments)};c.wbg.__wbg_name_663328ac10533100=((a,c)=>{const e=d(c).name;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_message_3915f683795a43d9=((a,c)=>{const e=d(c).message;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_length_c8f895dad5ec94df=(a=>{const b=d(a).length;return b});c.wbg.__wbg_get_6756090dbec4b385=((a,b)=>{const c=d(a)[b>>>_];return q(c)?_:h(c)});c.wbg.__wbg_readyState_a91ab6f4e27bbf47=(a=>{const b=d(a).readyState;return b});c.wbg.__wbg_result_d1e1134585be8336=function(){return D((a=>{const b=d(a).result;return h(b)}),arguments)};c.wbg.__wbg_error_b63db32ba3313af1=(a=>{const b=d(a).error;return q(b)?_:h(b)});c.wbg.__wbg_new_d881a9e329b0c6bb=function(){return D((()=>{const a=new FileReader();return h(a)}),arguments)};c.wbg.__wbg_abort_fc5a5332fc395d91=(a=>{d(a).abort()});c.wbg.__wbg_readAsArrayBuffer_a3d6ef46725fe135=function(){return D(((a,b)=>{d(a).readAsArrayBuffer(d(b))}),arguments)};c.wbg.__wbg_setonmessage_9961dd0a8670d682=((a,b)=>{d(a).onmessage=d(b)});c.wbg.__wbg_new_ff19bad2f50bf62b=function(){return D(((a,b)=>{const c=new Worker(l(a,b));return h(c)}),arguments)};c.wbg.__wbg_newwithoptions_6e193f98830c7b27=function(){return D(((a,b,c)=>{const e=new Worker(l(a,b),d(c));return h(e)}),arguments)};c.wbg.__wbg_postMessage_f071c51d77b68152=function(){return D(((a,b)=>{d(a).postMessage(d(b))}),arguments)};c.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const c=d(a)[b>>>_];return h(c)});c.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=d(a).length;return b});c.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new S();return h(a)});c.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(l(a,b));return h(c)});c.wbg.__wbg_call_90c26b09837aba1c=function(){return D(((a,b)=>{const c=d(a).call(d(b));return h(c)}),arguments)};c.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new a5();return h(a)});c.wbg.__wbg_self_f0e34d89f33b99fd=function(){return D((()=>{const a=self.self;return h(a)}),arguments)};c.wbg.__wbg_window_d3b084224f4774d7=function(){return D((()=>{const a=window.window;return h(a)}),arguments)};c.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return D((()=>{const a=globalThis.globalThis;return h(a)}),arguments)};c.wbg.__wbg_global_35dfdd59a4da3e74=function(){return D((()=>{const a=global.global;return h(a)}),arguments)};c.wbg.__wbg_from_71add2e723d1f1b2=(a=>{const b=S.from(d(a));return h(b)});c.wbg.__wbg_push_901f3914205d44de=((a,b)=>{const c=d(a).push(d(b));return c});c.wbg.__wbg_instanceof_ArrayBuffer_e7d53d51371448e2=(a=>{let b;try{b=d(a) instanceof ArrayBuffer}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_new_a64e3f2afc2cf2f8=((a,b)=>{const c=new Z(l(a,b));return h(c)});c.wbg.__wbg_call_5da1969d7cd31ccd=function(){return D(((a,b,c)=>{const e=d(a).call(d(b),d(c));return h(e)}),arguments)};c.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const c=a5.is(d(a),d(b));return c});c.wbg.__wbg_toString_6577cc00288ad588=(a=>{const b=d(a).toString();return h(b)});c.wbg.__wbg_new_60f57089c7563e81=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=_;try{return H(d,c.b,a,b)}finally{c.a=d}};const e=new a6(d);return h(e)}finally{c.a=c.b=_}});c.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=a6.resolve(d(a));return h(b)});c.wbg.__wbg_catch_d1ac5c6ee8bae995=((a,b)=>{const c=d(a).catch(d(b));return h(c)});c.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const c=d(a).then(d(b));return h(c)});c.wbg.__wbg_then_8371cc12cfedc5a2=((a,b,c)=>{const e=d(a).then(d(b),d(c));return h(e)});c.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=d(a).buffer;return h(b)});c.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,c)=>{const e=new $(d(a),b>>>_,c>>>_);return h(e)});c.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new $(d(a));return h(b)});c.wbg.__wbg_set_2357bf09366ee480=((a,b,c)=>{d(a).set(d(b),c>>>_)});c.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=d(a).length;return b});c.wbg.__wbg_newwithlength_6c2df9e2f3028c43=(a=>{const b=new $(a>>>_);return h(b)});c.wbg.__wbg_buffer_261f267c3396c59b=(a=>{const b=d(a).buffer;return h(b)});c.wbg.__wbg_subarray_2e940e41c0f5a1d9=((a,b,c)=>{const e=d(a).subarray(b>>>_,c>>>_);return h(e)});c.wbg.__wbg_byteLength_af7bdd61ff8ad011=(a=>{const b=d(a).byteLength;return b});c.wbg.__wbg_byteOffset_ef240684c26a4ab0=(a=>{const b=d(a).byteOffset;return b});c.wbg.__wbg_set_759f75cd92b612d2=function(){return D(((a,b,c)=>{const e=Reflect.set(d(a),d(b),d(c));return e}),arguments)};c.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new Z();return h(a)});c.wbg.__wbg_stack_658279fe44541cf6=((a,c)=>{const e=d(c).stack;const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbg_error_f851667af71bcfc6=((a,c)=>{let d;let e;try{d=a;e=c;console.error(l(a,c))}finally{b.__wbindgen_free(d,e,W)}});c.wbg.__wbindgen_debug_string=((a,c)=>{const e=t(d(c));const f=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=m;s()[a/a3+ W]=g;s()[a/a3+ _]=f});c.wbg.__wbindgen_throw=((a,b)=>{throw new Z(l(a,b))});c.wbg.__wbindgen_memory=(()=>{const a=b.memory;return h(a)});c.wbg.__wbindgen_closure_wrapper465=((a,b,c)=>{const d=u(a,b,a7,v);return h(d)});c.wbg.__wbindgen_closure_wrapper466=((a,b,c)=>{const d=u(a,b,a7,v);return h(d)});c.wbg.__wbindgen_closure_wrapper468=((a,b,c)=>{const d=w(a,b,a7,z);return h(d)});c.wbg.__wbindgen_closure_wrapper1251=((a,b,c)=>{const d=w(a,b,664,A);return h(d)});c.wbg.__wbindgen_closure_wrapper1737=((a,b,c)=>{const d=w(a,b,781,B);return h(d)});c.wbg.__wbindgen_closure_wrapper1856=((a,b,c)=>{const d=w(a,b,823,C);return h(d)});return c});var z=((a,d,e)=>{try{b.wasm_bindgen__convert__closures__invoke1_mut_ref__h45e4a03c9bf75110(a,d,y(e))}finally{c[x++]=U}});var F=(()=>{if(E===V||E.byteLength===_){E=new Uint32Array(b.memory.buffer)};return E});var A=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1_mut__h80fff843bce54811(a,c,h(d))});var u=((a,c,d,e)=>{const f={a:a,b:c,cnt:W,dtor:d};const g=(...a)=>{f.cnt++;try{return e(f.a,f.b,...a)}finally{if(--f.cnt===_){b.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=_}}};g.original=f;return g});var f=(a=>{if(a<132)return;c[a]=e;e=a});var w=((a,c,d,e)=>{const f={a:a,b:c,cnt:W,dtor:d};const g=(...a)=>{f.cnt++;const c=f.a;f.a=_;try{return e(c,f.b,...a)}finally{if(--f.cnt===_){b.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var p=((a,b,c)=>{if(c===U){const c=n.encode(a);const d=b(c.length,W)>>>_;k().subarray(d,d+ c.length).set(c);m=c.length;return d};let d=a.length;let e=b(d,W)>>>_;const f=k();let g=_;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==_){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,W)>>>_;const b=k().subarray(e+ g,e+ d);const f=o(a,b);g+=f.written};m=g;return e});var k=(()=>{if(j===V||j.byteLength===_){j=new $(b.memory.buffer)};return j});var l=((a,b)=>{a=a>>>_;return i.decode(k().subarray(a,a+ b))});var y=(a=>{if(x==W)throw new Z(`out of js stack`);c[--x]=a;return x});import{graphviz_dummy_hack as a}from"./snippets/viz-js-3dff437496ba69e3/js/viz-standalone.js";let b;const c=new S(T).fill(U);c.push(U,V,!0,!1);let e=c.length;const i=typeof TextDecoder!==X?new TextDecoder(Y,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Z(`TextDecoder not available`)}};if(typeof TextDecoder!==X){i.decode()};let j=V;let m=_;const n=typeof TextEncoder!==X?new TextEncoder(Y):{encode:()=>{throw Z(`TextEncoder not available`)}};const o=typeof n.encodeInto===a0?((a,b)=>n.encodeInto(a,b)):((a,b)=>{const c=n.encode(a);b.set(c);return {read:a.length,written:c.length}});let r=V;let x=T;let E=V;class I{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;return a}free(){const a=this.__destroy_into_raw();b.__wbg_intounderlyingbytesource_free(a)}type(){let a;let c;try{const f=b.__wbindgen_add_to_stack_pointer(-a4);b.intounderlyingbytesource_type(f,this.__wbg_ptr);var d=s()[f/a3+ _];var e=s()[f/a3+ W];a=d;c=e;return l(d,e)}finally{b.__wbindgen_add_to_stack_pointer(a4);b.__wbindgen_free(a,c,W)}}autoAllocateChunkSize(){const a=b.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return a>>>_}start(a){b.intounderlyingbytesource_start(this.__wbg_ptr,h(a))}pull(a){const c=b.intounderlyingbytesource_pull(this.__wbg_ptr,h(a));return g(c)}cancel(){const a=this.__destroy_into_raw();b.intounderlyingbytesource_cancel(a)}}class J{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;return a}free(){const a=this.__destroy_into_raw();b.__wbg_intounderlyingsink_free(a)}write(a){const c=b.intounderlyingsink_write(this.__wbg_ptr,h(a));return g(c)}close(){const a=this.__destroy_into_raw();const c=b.intounderlyingsink_close(a);return g(c)}abort(a){const c=this.__destroy_into_raw();const d=b.intounderlyingsink_abort(c,h(a));return g(d)}}class K{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;return a}free(){const a=this.__destroy_into_raw();b.__wbg_intounderlyingsource_free(a)}pull(a){const c=b.intounderlyingsource_pull(this.__wbg_ptr,h(a));return g(c)}cancel(){const a=this.__destroy_into_raw();b.intounderlyingsource_cancel(a)}}class L{static __wrap(a){a=a>>>_;const b=a5.create(L.prototype);b.__wbg_ptr=a;return b}__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;return a}free(){const a=this.__destroy_into_raw();b.__wbg_options_free(a)}format(){let a;let c;try{const f=b.__wbindgen_add_to_stack_pointer(-a4);b.__wbg_get_options_format(f,this.__wbg_ptr);var d=s()[f/a3+ _];var e=s()[f/a3+ W];a=d;c=e;return l(d,e)}finally{b.__wbindgen_add_to_stack_pointer(a4);b.__wbindgen_free(a,c,W)}}format(a){const c=p(a,b.__wbindgen_malloc,b.__wbindgen_realloc);const d=m;b.__wbg_set_options_format(this.__wbg_ptr,c,d)}engine(){let a;let c;try{const f=b.__wbindgen_add_to_stack_pointer(-a4);b.__wbg_get_options_engine(f,this.__wbg_ptr);var d=s()[f/a3+ _];var e=s()[f/a3+ W];a=d;c=e;return l(d,e)}finally{b.__wbindgen_add_to_stack_pointer(a4);b.__wbindgen_free(a,c,W)}}engine(a){const c=p(a,b.__wbindgen_malloc,b.__wbindgen_realloc);const d=m;b.__wbg_set_options_engine(this.__wbg_ptr,c,d)}yInvert(){const a=b.__wbg_get_options_yInvert(this.__wbg_ptr);return a!==_}yInvert(a){b.__wbg_set_options_yInvert(this.__wbg_ptr,a)}}export default R;export{I as IntoUnderlyingByteSource,J as IntoUnderlyingSink,K as IntoUnderlyingSource,L as Options,Q as initSync}