let $=0,a2=`string`,a1=1,a4=`Object`,Z=`utf-8`,a9=80,X=null,Y=`undefined`,a5=4,a3=`function`,a6=16,V=128,U=Array,_=Error,a7=Object,a8=Promise,a0=Uint8Array,W=undefined;var O=(async(a,b)=>{if(typeof Response===a3&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===a3){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var z=((a,d,e)=>{try{b.wasm_bindgen__convert__closures__invoke1_mut_ref__h683db47ca287f247(a,d,x(e))}finally{c[w++]=W}});var m=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==X){return `${a}`};if(b==a2){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==X){return `Symbol`}else{return `Symbol(${b})`}};if(b==a3){const b=a.name;if(typeof b==a2&&b.length>$){return `Function(${b})`}else{return `Function`}};if(U.isArray(a)){const b=a.length;let c=`[`;if(b>$){c+=m(a[$])};for(let d=a1;d<b;d++){c+=`, `+ m(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>a1){d=c[a1]}else{return toString.call(a)};if(d==a4){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a4}};if(a instanceof _){return `${a.name}: ${a.message}\n${a.stack}`};return d});var Q=((a,b)=>{});var E=((a,b)=>{a=a>>>$;const c=D();const d=c.subarray(a/a5,a/a5+ b);const e=[];for(let a=$;a<d.length;a++){e.push(g(d[a]))};return e});var A=((a,c,d)=>{b.wasm_bindgen__convert__closures__invoke1_mut__h3280407b2e4d5bd4(a,c,l(d))});var y=((a,d,e)=>{try{b._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he2035b4d808b0894(a,d,x(e))}finally{c[w++]=W}});var u=((a,c,d)=>{b._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8df103872e6a67c4(a,c,l(d))});var l=(a=>{if(e===c.length)c.push(c.length+ a1);const b=e;e=c[b];c[b]=a;return b});var g=(a=>{const b=d(a);f(a);return b});function B(a,c){try{return a.apply(this,c)}catch(a){b.__wbindgen_exn_store(l(a))}}var T=(async(a)=>{if(b!==W)return b;if(typeof a===Y){a=new URL(`app-c928d289149ea2903e5417ef99c3f5bc62a04cdd25703ba944efb300e3dd8f186b3db8e6648a22e72f74ae96e09ede93_bg.wasm`,import.meta.url)};const c=P();if(typeof a===a2||typeof Request===a3&&a instanceof Request||typeof URL===a3&&a instanceof URL){a=fetch(a)};Q(c);const {instance:d,module:e}=await O(await a,c);return R(d,e)});var S=(a=>{if(b!==W)return b;const c=P();Q(c);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const d=new WebAssembly.Instance(a,c);return R(d,a)});var s=(()=>{if(r===X||r.byteLength===$){r=new Int32Array(b.memory.buffer)};return r});var F=(a=>a===W||a===X);var d=(a=>c[a]);var R=((a,c)=>{b=a.exports;T.__wbindgen_wasm_module=c;r=X;C=X;i=X;b.__wbindgen_start();return b});var P=(()=>{const c={};c.wbg={};c.wbg.__wbindgen_object_drop_ref=(a=>{g(a)});c.wbg.__wbindgen_cb_drop=(a=>{const b=g(a).original;if(b.cnt--==a1){b.a=$;return !0};const c=!1;return c});c.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return l(c)});c.wbg.__wbindgen_object_clone_ref=(a=>{const b=d(a);return l(b)});c.wbg.__wbg_graphvizdummyhack_0852dd0248253ddd=function(){return B((()=>{const b=a();return l(b)}),arguments)};c.wbg.__wbg_instance_f60981357d5efe77=(a=>{const b=d(a).instance();return l(b)});c.wbg.__wbindgen_number_new=(a=>{const b=a;return l(b)});c.wbg.__wbg_renderSVGElement_5841c8dc19e8ebb5=function(){return B(((a,c,e,f)=>{let g;let h;try{g=c;h=e;const b=d(a).renderSVGElement(k(c,e),K.__wrap(f));return l(b)}finally{b.__wbindgen_free(g,h,a1)}}),arguments)};c.wbg.__wbg_instanceof_WindowWithViz_db507c0d28180f70=(a=>{let b;try{b=d(a) instanceof Window}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_instanceof_VizInstance_69ecf28f56b930b4=(a=>{let b;try{b=d(a) instanceof a7}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_Viz_18168f7e2c61b62f=(a=>{const b=d(a).Viz;return l(b)});c.wbg.__wbg_log_7c3433e130418e14=((a,c)=>{var d=E(a,c).slice();b.__wbindgen_free(a,c*a5,a5);console.log(...d)});c.wbg.__wbg_setlistenerid_3183aae8fa5840fb=((a,b)=>{d(a).__yew_listener_id=b>>>$});c.wbg.__wbg_listenerid_12315eee21527820=((a,b)=>{const c=d(b).__yew_listener_id;s()[a/a5+ a1]=F(c)?$:c;s()[a/a5+ $]=!F(c)});c.wbg.__wbg_cachekey_b61393159c57fd7b=((a,b)=>{const c=d(b).__yew_subtree_cache_key;s()[a/a5+ a1]=F(c)?$:c;s()[a/a5+ $]=!F(c)});c.wbg.__wbg_subtreeid_e348577f7ef777e3=((a,b)=>{const c=d(b).__yew_subtree_id;s()[a/a5+ a1]=F(c)?$:c;s()[a/a5+ $]=!F(c)});c.wbg.__wbg_setsubtreeid_d32e6327eef1f7fc=((a,b)=>{d(a).__yew_subtree_id=b>>>$});c.wbg.__wbg_setcachekey_80183b7cfc421143=((a,b)=>{d(a).__yew_subtree_cache_key=b>>>$});c.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new _();return l(a)});c.wbg.__wbg_stack_658279fe44541cf6=((a,c)=>{const e=d(c).stack;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_error_f851667af71bcfc6=((a,c)=>{let d;let e;try{d=a;e=c;console.error(k(a,c))}finally{b.__wbindgen_free(d,e,a1)}});c.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(d(a))});c.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=d(a).queueMicrotask;return l(b)});c.wbg.__wbindgen_is_function=(a=>{const b=typeof d(a)===a3;return b});c.wbg.__wbindgen_is_undefined=(a=>{const b=d(a)===W;return b});c.wbg.__wbg_error_71d6845bf00a930f=((a,c)=>{var d=E(a,c).slice();b.__wbindgen_free(a,c*a5,a5);console.error(...d)});c.wbg.__wbg_log_1f7f93998ab961f7=((a,c)=>{var d=E(a,c).slice();b.__wbindgen_free(a,c*a5,a5);console.log(...d)});c.wbg.__wbg_location_6fd8f140f024ba10=(a=>{const b=d(a).location;return F(b)?$:l(b)});c.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=d(a).body;return F(b)?$:l(b)});c.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return B(((a,b,c)=>{const e=d(a).createElement(k(b,c));return l(e)}),arguments)};c.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return B(((a,b,c,e,f)=>{const g=d(a).createElementNS(b===$?W:k(b,c),k(e,f));return l(g)}),arguments)};c.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,c)=>{const e=d(a).createTextNode(k(b,c));return l(e)});c.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=d(a) instanceof Window}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_document_d609202d16c38224=(a=>{const b=d(a).document;return F(b)?$:l(b)});c.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=d(a).location;return l(b)});c.wbg.__wbg_confirm_1c06783e8e1a3b07=function(){return B(((a,b,c)=>{const e=d(a).confirm(k(b,c));return e}),arguments)};c.wbg.__wbg_instanceof_Element_3f326a19cc457941=(a=>{let b;try{b=d(a) instanceof Element}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_namespaceURI_7cc7ef157e398356=((a,c)=>{const e=d(c).namespaceURI;var f=F(e)?$:q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);var g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_id_ba8ed2468700af37=((a,c)=>{const e=d(c).id;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,c)=>{d(a).innerHTML=k(b,c)});c.wbg.__wbg_outerHTML_b5a8d952b5615778=((a,c)=>{const e=d(c).outerHTML;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_children_990f38c4f4d5c721=(a=>{const b=d(a).children;return l(b)});c.wbg.__wbg_getAttribute_bff489553dd803cc=((a,c,e,f)=>{const g=d(c).getAttribute(k(e,f));var h=F(g)?$:q(g,b.__wbindgen_malloc,b.__wbindgen_realloc);var i=n;s()[a/a5+ a1]=i;s()[a/a5+ $]=h});c.wbg.__wbg_getElementsByClassName_2bec3dc564edbab7=((a,b,c)=>{const e=d(a).getElementsByClassName(k(b,c));return l(e)});c.wbg.__wbg_getElementsByTagName_ec3f759c6b7f5daa=((a,b,c)=>{const e=d(a).getElementsByTagName(k(b,c));return l(e)});c.wbg.__wbg_querySelector_efbef0bce19ae6c9=function(){return B(((a,b,c)=>{const e=d(a).querySelector(k(b,c));return F(e)?$:l(e)}),arguments)};c.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return B(((a,b,c)=>{d(a).removeAttribute(k(b,c))}),arguments)};c.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return B(((a,b,c,e,f)=>{d(a).setAttribute(k(b,c),k(e,f))}),arguments)};c.wbg.__wbg_name_bbf9c43b9611377a=((a,c)=>{const e=d(c).name;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_key_cf8022c18f47869e=((a,c)=>{const e=d(c).key;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_debug_678fc976919895d2=((a,b,c,e)=>{console.debug(d(a),d(b),d(c),d(e))});c.wbg.__wbg_error_e60eff06f24ab7a4=(a=>{console.error(d(a))});c.wbg.__wbg_error_ce00188b70015ed4=((a,b,c,e)=>{console.error(d(a),d(b),d(c),d(e))});c.wbg.__wbg_info_7904cb81904ea2ec=((a,b,c,e)=>{console.info(d(a),d(b),d(c),d(e))});c.wbg.__wbg_log_a4530b4fe289336f=(a=>{console.log(d(a))});c.wbg.__wbg_log_aaedbaa276606939=((a,b,c,e)=>{console.log(d(a),d(b),d(c),d(e))});c.wbg.__wbg_warn_0345511f899411e2=((a,b,c,e)=>{console.warn(d(a),d(b),d(c),d(e))});c.wbg.__wbg_newwithstrsequenceandoptions_4806b667a908f161=function(){return B(((a,b)=>{const c=new Blob(d(a),d(b));return l(c)}),arguments)};c.wbg.__wbg_createObjectURL_9fbd9480174d7f02=function(){return B(((a,c)=>{const e=URL.createObjectURL(d(c));const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f}),arguments)};c.wbg.__wbg_value_57e57170f6952449=((a,c)=>{const e=d(c).value;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_setvalue_a11f3069fd7a1805=((a,b,c)=>{d(a).value=k(b,c)});c.wbg.__wbg_readyState_a91ab6f4e27bbf47=(a=>{const b=d(a).readyState;return b});c.wbg.__wbg_result_d1e1134585be8336=function(){return B((a=>{const b=d(a).result;return l(b)}),arguments)};c.wbg.__wbg_error_b63db32ba3313af1=(a=>{const b=d(a).error;return F(b)?$:l(b)});c.wbg.__wbg_new_d881a9e329b0c6bb=function(){return B((()=>{const a=new FileReader();return l(a)}),arguments)};c.wbg.__wbg_abort_fc5a5332fc395d91=(a=>{d(a).abort()});c.wbg.__wbg_readAsArrayBuffer_a3d6ef46725fe135=function(){return B(((a,b)=>{d(a).readAsArrayBuffer(d(b))}),arguments)};c.wbg.__wbg_setonmessage_9961dd0a8670d682=((a,b)=>{d(a).onmessage=d(b)});c.wbg.__wbg_new_ff19bad2f50bf62b=function(){return B(((a,b)=>{const c=new Worker(k(a,b));return l(c)}),arguments)};c.wbg.__wbg_newwithoptions_6e193f98830c7b27=function(){return B(((a,b,c)=>{const e=new Worker(k(a,b),d(c));return l(e)}),arguments)};c.wbg.__wbg_postMessage_f071c51d77b68152=function(){return B(((a,b)=>{d(a).postMessage(d(b))}),arguments)};c.wbg.__wbg_target_52ddf6955f636bf5=(a=>{const b=d(a).target;return F(b)?$:l(b)});c.wbg.__wbg_bubbles_f1cdd0584446cad0=(a=>{const b=d(a).bubbles;return b});c.wbg.__wbg_cancelBubble_976cfdf7ac449a6c=(a=>{const b=d(a).cancelBubble;return b});c.wbg.__wbg_composedPath_12a068e57a98cf90=(a=>{const b=d(a).composedPath();return l(b)});c.wbg.__wbg_addEventListener_9bf60ea8a362e5e4=function(){return B(((a,b,c,e)=>{d(a).addEventListener(k(b,c),d(e))}),arguments)};c.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return B(((a,b,c,e,f)=>{d(a).addEventListener(k(b,c),d(e),d(f))}),arguments)};c.wbg.__wbg_removeEventListener_66ee1536a0b32c11=function(){return B(((a,b,c,e)=>{d(a).removeEventListener(k(b,c),d(e))}),arguments)};c.wbg.__wbg_removeEventListener_9ece7e86d1135657=function(){return B(((a,b,c,e,f)=>{d(a).removeEventListener(k(b,c),d(e),f!==$)}),arguments)};c.wbg.__wbg_length_3a540c5a953d15b4=(a=>{const b=d(a).length;return b});c.wbg.__wbg_item_97e4102176c1e955=((a,b)=>{const c=d(a).item(b>>>$);return F(c)?$:l(c)});c.wbg.__wbg_parentNode_92a7017b3a4fad43=(a=>{const b=d(a).parentNode;return F(b)?$:l(b)});c.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=d(a).parentElement;return F(b)?$:l(b)});c.wbg.__wbg_lastChild_a62e3fbaab87f734=(a=>{const b=d(a).lastChild;return F(b)?$:l(b)});c.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=d(a).nextSibling;return F(b)?$:l(b)});c.wbg.__wbg_setnodeValue_630c6470d05b600e=((a,b,c)=>{d(a).nodeValue=b===$?W:k(b,c)});c.wbg.__wbg_textContent_2f37235e13f8484b=((a,c)=>{const e=d(c).textContent;var f=F(e)?$:q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);var g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return B(((a,b)=>{const c=d(a).appendChild(d(b));return l(c)}),arguments)};c.wbg.__wbg_insertBefore_726c1640c419e940=function(){return B(((a,b,c)=>{const e=d(a).insertBefore(d(b),d(c));return l(e)}),arguments)};c.wbg.__wbg_removeChild_942eb9c02243d84d=function(){return B(((a,b)=>{const c=d(a).removeChild(d(b));return l(c)}),arguments)};c.wbg.__wbg_instanceof_SvgsvgElement_e3ef1b44a2b87828=(a=>{let b;try{b=d(a) instanceof SVGSVGElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_instanceof_HtmlInputElement_e7869aaef9cbb0e6=(a=>{let b;try{b=d(a) instanceof HTMLInputElement}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_setchecked_c1d5c3726082e274=((a,b)=>{d(a).checked=b!==$});c.wbg.__wbg_files_84acf164900adf19=(a=>{const b=d(a).files;return F(b)?$:l(b)});c.wbg.__wbg_value_e024243a9dae20bc=((a,c)=>{const e=d(c).value;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_setvalue_5b3442ff620b4a5d=((a,b,c)=>{d(a).value=k(b,c)});c.wbg.__wbg_data_ba3ea616b5392abf=(a=>{const b=d(a).data;return l(b)});c.wbg.__wbg_name_663328ac10533100=((a,c)=>{const e=d(c).name;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_message_3915f683795a43d9=((a,c)=>{const e=d(c).message;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbg_length_c8f895dad5ec94df=(a=>{const b=d(a).length;return b});c.wbg.__wbg_get_6756090dbec4b385=((a,b)=>{const c=d(a)[b>>>$];return F(c)?$:l(c)});c.wbg.__wbg_origin_595edc88be6e66b8=function(){return B(((a,c)=>{const e=d(c).origin;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f}),arguments)};c.wbg.__wbg_pathname_1ab7e82aaa4511ff=function(){return B(((a,c)=>{const e=d(c).pathname;const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f}),arguments)};c.wbg.__wbg_instanceof_ShadowRoot_0bd39e89ab117f86=(a=>{let b;try{b=d(a) instanceof ShadowRoot}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_host_09eee5e3d9cf59a1=(a=>{const b=d(a).host;return l(b)});c.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const c=d(a)[b>>>$];return l(c)});c.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=d(a).length;return b});c.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new U();return l(a)});c.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(k(a,b));return l(c)});c.wbg.__wbg_call_90c26b09837aba1c=function(){return B(((a,b)=>{const c=d(a).call(d(b));return l(c)}),arguments)};c.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new a7();return l(a)});c.wbg.__wbg_self_f0e34d89f33b99fd=function(){return B((()=>{const a=self.self;return l(a)}),arguments)};c.wbg.__wbg_window_d3b084224f4774d7=function(){return B((()=>{const a=window.window;return l(a)}),arguments)};c.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return B((()=>{const a=globalThis.globalThis;return l(a)}),arguments)};c.wbg.__wbg_global_35dfdd59a4da3e74=function(){return B((()=>{const a=global.global;return l(a)}),arguments)};c.wbg.__wbg_from_71add2e723d1f1b2=(a=>{const b=U.from(d(a));return l(b)});c.wbg.__wbg_push_901f3914205d44de=((a,b)=>{const c=d(a).push(d(b));return c});c.wbg.__wbg_instanceof_ArrayBuffer_e7d53d51371448e2=(a=>{let b;try{b=d(a) instanceof ArrayBuffer}catch(a){b=!1}const c=b;return c});c.wbg.__wbg_new_a64e3f2afc2cf2f8=((a,b)=>{const c=new _(k(a,b));return l(c)});c.wbg.__wbg_call_5da1969d7cd31ccd=function(){return B(((a,b,c)=>{const e=d(a).call(d(b),d(c));return l(e)}),arguments)};c.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const c=a7.is(d(a),d(b));return c});c.wbg.__wbg_new_60f57089c7563e81=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=$;try{return G(d,c.b,a,b)}finally{c.a=d}};const e=new a8(d);return l(e)}finally{c.a=c.b=$}});c.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=a8.resolve(d(a));return l(b)});c.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const c=d(a).then(d(b));return l(c)});c.wbg.__wbg_then_8371cc12cfedc5a2=((a,b,c)=>{const e=d(a).then(d(b),d(c));return l(e)});c.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=d(a).buffer;return l(b)});c.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,c)=>{const e=new a0(d(a),b>>>$,c>>>$);return l(e)});c.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new a0(d(a));return l(b)});c.wbg.__wbg_set_2357bf09366ee480=((a,b,c)=>{d(a).set(d(b),c>>>$)});c.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=d(a).length;return b});c.wbg.__wbg_set_759f75cd92b612d2=function(){return B(((a,b,c)=>{const e=Reflect.set(d(a),d(b),d(c));return e}),arguments)};c.wbg.__wbindgen_debug_string=((a,c)=>{const e=m(d(c));const f=q(e,b.__wbindgen_malloc,b.__wbindgen_realloc);const g=n;s()[a/a5+ a1]=g;s()[a/a5+ $]=f});c.wbg.__wbindgen_throw=((a,b)=>{throw new _(k(a,b))});c.wbg.__wbindgen_memory=(()=>{const a=b.memory;return l(a)});c.wbg.__wbg_respond_8fadc5f5c9d95422=((a,b)=>{d(a).respond(b>>>$)});c.wbg.__wbg_byobRequest_08c18cee35def1f4=(a=>{const b=d(a).byobRequest;return F(b)?$:l(b)});c.wbg.__wbg_view_231340b0dd8a2484=(a=>{const b=d(a).view;return F(b)?$:l(b)});c.wbg.__wbg_byteLength_5299848ed3264181=(a=>{const b=d(a).byteLength;return b});c.wbg.__wbg_close_da7e6fb9d9851e5a=(a=>{d(a).close()});c.wbg.__wbg_buffer_4e79326814bdd393=(a=>{const b=d(a).buffer;return l(b)});c.wbg.__wbg_byteOffset_b69b0a07afccce19=(a=>{const b=d(a).byteOffset;return b});c.wbg.__wbg_close_e9110ca16e2567db=(a=>{d(a).close()});c.wbg.__wbg_enqueue_d71a1a518e21f5c3=((a,b)=>{d(a).enqueue(d(b))});c.wbg.__wbindgen_closure_wrapper310=((a,b,c)=>{const d=t(a,b,a9,u);return l(d)});c.wbg.__wbindgen_closure_wrapper311=((a,b,c)=>{const d=v(a,b,a9,y);return l(d)});c.wbg.__wbindgen_closure_wrapper313=((a,b,c)=>{const d=t(a,b,a9,u);return l(d)});c.wbg.__wbindgen_closure_wrapper1596=((a,b,c)=>{const d=v(a,b,689,z);return l(d)});c.wbg.__wbindgen_closure_wrapper1748=((a,b,c)=>{const d=v(a,b,746,A);return l(d)});return c});var G=((a,c,d,e)=>{b.wasm_bindgen__convert__closures__invoke2_mut__h4917ddb720101916(a,c,l(d),l(e))});var D=(()=>{if(C===X||C.byteLength===$){C=new Uint32Array(b.memory.buffer)};return C});var t=((a,c,d,e)=>{const f={a:a,b:c,cnt:a1,dtor:d};const g=(...a)=>{f.cnt++;try{return e(f.a,f.b,...a)}finally{if(--f.cnt===$){b.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=$}}};g.original=f;return g});var f=(a=>{if(a<132)return;c[a]=e;e=a});var v=((a,c,d,e)=>{const f={a:a,b:c,cnt:a1,dtor:d};const g=(...a)=>{f.cnt++;const c=f.a;f.a=$;try{return e(c,f.b,...a)}finally{if(--f.cnt===$){b.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var q=((a,b,c)=>{if(c===W){const c=o.encode(a);const d=b(c.length,a1)>>>$;j().subarray(d,d+ c.length).set(c);n=c.length;return d};let d=a.length;let e=b(d,a1)>>>$;const f=j();let g=$;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==$){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,a1)>>>$;const b=j().subarray(e+ g,e+ d);const f=p(a,b);g+=f.written};n=g;return e});var j=(()=>{if(i===X||i.byteLength===$){i=new a0(b.memory.buffer)};return i});var k=((a,b)=>{a=a>>>$;return h.decode(j().subarray(a,a+ b))});var x=(a=>{if(w==a1)throw new _(`out of js stack`);c[--w]=a;return w});import{graphviz_dummy_hack as a}from"./snippets/viz-js-3dff437496ba69e3/js/viz-standalone.js";let b;const c=new U(V).fill(W);c.push(W,X,!0,!1);let e=c.length;const h=typeof TextDecoder!==Y?new TextDecoder(Z,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw _(`TextDecoder not available`)}};if(typeof TextDecoder!==Y){h.decode()};let i=X;let n=$;const o=typeof TextEncoder!==Y?new TextEncoder(Z):{encode:()=>{throw _(`TextEncoder not available`)}};const p=typeof o.encodeInto===a3?((a,b)=>o.encodeInto(a,b)):((a,b)=>{const c=o.encode(a);b.set(c);return {read:a.length,written:c.length}});let r=X;let w=V;let C=X;class H{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_intounderlyingbytesource_free(a)}type(){let a;let c;try{const f=b.__wbindgen_add_to_stack_pointer(-a6);b.intounderlyingbytesource_type(f,this.__wbg_ptr);var d=s()[f/a5+ $];var e=s()[f/a5+ a1];a=d;c=e;return k(d,e)}finally{b.__wbindgen_add_to_stack_pointer(a6);b.__wbindgen_free(a,c,a1)}}autoAllocateChunkSize(){const a=b.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return a>>>$}start(a){b.intounderlyingbytesource_start(this.__wbg_ptr,l(a))}pull(a){const c=b.intounderlyingbytesource_pull(this.__wbg_ptr,l(a));return g(c)}cancel(){const a=this.__destroy_into_raw();b.intounderlyingbytesource_cancel(a)}}class I{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_intounderlyingsink_free(a)}write(a){const c=b.intounderlyingsink_write(this.__wbg_ptr,l(a));return g(c)}close(){const a=this.__destroy_into_raw();const c=b.intounderlyingsink_close(a);return g(c)}abort(a){const c=this.__destroy_into_raw();const d=b.intounderlyingsink_abort(c,l(a));return g(d)}}class J{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_intounderlyingsource_free(a)}pull(a){const c=b.intounderlyingsource_pull(this.__wbg_ptr,l(a));return g(c)}cancel(){const a=this.__destroy_into_raw();b.intounderlyingsource_cancel(a)}}class K{static __wrap(a){a=a>>>$;const b=a7.create(K.prototype);b.__wbg_ptr=a;return b}__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_options_free(a)}format(){let a;let c;try{const f=b.__wbindgen_add_to_stack_pointer(-a6);b.__wbg_get_options_format(f,this.__wbg_ptr);var d=s()[f/a5+ $];var e=s()[f/a5+ a1];a=d;c=e;return k(d,e)}finally{b.__wbindgen_add_to_stack_pointer(a6);b.__wbindgen_free(a,c,a1)}}format(a){const c=q(a,b.__wbindgen_malloc,b.__wbindgen_realloc);const d=n;b.__wbg_set_options_format(this.__wbg_ptr,c,d)}engine(){let a;let c;try{const f=b.__wbindgen_add_to_stack_pointer(-a6);b.__wbg_get_options_engine(f,this.__wbg_ptr);var d=s()[f/a5+ $];var e=s()[f/a5+ a1];a=d;c=e;return k(d,e)}finally{b.__wbindgen_add_to_stack_pointer(a6);b.__wbindgen_free(a,c,a1)}}engine(a){const c=q(a,b.__wbindgen_malloc,b.__wbindgen_realloc);const d=n;b.__wbg_set_options_engine(this.__wbg_ptr,c,d)}yInvert(){const a=b.__wbg_get_options_yInvert(this.__wbg_ptr);return a!==$}yInvert(a){b.__wbg_set_options_yInvert(this.__wbg_ptr,a)}}class L{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_pipeoptions_free(a)}preventClose(){const a=b.pipeoptions_preventClose(this.__wbg_ptr);return a!==$}preventCancel(){const a=b.pipeoptions_preventCancel(this.__wbg_ptr);return a!==$}preventAbort(){const a=b.pipeoptions_preventAbort(this.__wbg_ptr);return a!==$}signal(){const a=b.pipeoptions_signal(this.__wbg_ptr);return g(a)}}class M{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_queuingstrategy_free(a)}highWaterMark(){const a=b.queuingstrategy_highWaterMark(this.__wbg_ptr);return a}}class N{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=$;return a}free(){const a=this.__destroy_into_raw();b.__wbg_readablestreamgetreaderoptions_free(a)}mode(){const a=b.readablestreamgetreaderoptions_mode(this.__wbg_ptr);return g(a)}}export default T;export{H as IntoUnderlyingByteSource,I as IntoUnderlyingSink,J as IntoUnderlyingSource,K as Options,L as PipeOptions,M as QueuingStrategy,N as ReadableStreamGetReaderOptions,S as initSync}