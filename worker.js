let i=0,k=`string`,f=1,m=`Object`,g=`utf-8`,c=null,b=`undefined`,o=4,l=`function`,n=16,e=Array,h=Error,p=Promise,j=Uint8Array,d=undefined;let a;(()=>{var L=((a,b,c)=>{s._dyn_core__ops__function__Fn__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e31b4b79b5f4107(a,b,y(c))});var D=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==c){return `${a}`};if(b==k){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==c){return `Symbol`}else{return `Symbol(${b})`}};if(b==l){const b=a.name;if(typeof b==k&&b.length>i){return `Function(${b})`}else{return `Function`}};if(e.isArray(a)){const b=a.length;let c=`[`;if(b>i){c+=D(a[i])};for(let d=f;d<b;d++){c+=`, `+ D(a[d])};c+=`]`;return c};const d=/\[object ([^\]]+)\]/.exec(toString.call(a));let g;if(d.length>f){g=d[f]}else{return toString.call(a)};if(g==m){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return m}};if(a instanceof h){return `${a.name}: ${a.message}\n${a.stack}`};return g});var _=((a,b)=>{});var N=((a,b,c)=>{s.wasm_bindgen__convert__closures__invoke1_mut__h3280407b2e4d5bd4(a,b,y(c))});var y=(a=>{if(v===t.length)t.push(t.length+ f);const b=v;v=t[b];t[b]=a;return b});var x=(a=>{const b=u(a);w(a);return b});function O(a,b){try{return a.apply(this,b)}catch(a){s.__wbindgen_exn_store(y(a))}}var a1=(async(a)=>{if(s!==d)return s;if(typeof a===b&&r!==b){a=r.replace(/\.js$/,`_bg.wasm`)};const c=Z();if(typeof a===k||typeof Request===l&&a instanceof Request||typeof URL===l&&a instanceof URL){a=fetch(a)};_(c);const {instance:e,module:f}=await Y(await a,c);return $(e,f)});var J=(()=>{if(I===c||I.byteLength===i){I=new Int32Array(s.memory.buffer)};return I});var Q=(a=>a===d||a===c);var u=(a=>t[a]);var a0=(a=>{if(s!==d)return s;const b=Z();_(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const c=new WebAssembly.Instance(a,b);return $(c,a)});var $=((a,b)=>{s=a.exports;a1.__wbindgen_wasm_module=b;I=c;A=c;s.__wbindgen_start();return s});var Z=(()=>{const a={};a.wbg={};a.wbg.__wbindgen_object_drop_ref=(a=>{x(a)});a.wbg.__wbindgen_cb_drop=(a=>{const b=x(a).original;if(b.cnt--==f){b.a=i;return !0};const c=!1;return c});a.wbg.__wbindgen_object_clone_ref=(a=>{const b=u(a);return y(b)});a.wbg.__wbindgen_string_new=((a,b)=>{const c=C(a,b);return y(c)});a.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(u(a))});a.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=u(a).queueMicrotask;return y(b)});a.wbg.__wbindgen_is_function=(a=>{const b=typeof u(a)===l;return b});a.wbg.__wbindgen_is_undefined=(a=>{const b=u(a)===d;return b});a.wbg.__wbg_setonmessage_a7281508ee498972=((a,b)=>{u(a).onmessage=u(b)});a.wbg.__wbg_close_3d3019a22dda6227=(a=>{u(a).close()});a.wbg.__wbg_postMessage_101f1eec24e6c59b=function(){return O(((a,b)=>{u(a).postMessage(u(b))}),arguments)};a.wbg.__wbg_data_ba3ea616b5392abf=(a=>{const b=u(a).data;return y(b)});a.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(C(a,b));return y(c)});a.wbg.__wbg_call_90c26b09837aba1c=function(){return O(((a,b)=>{const c=u(a).call(u(b));return y(c)}),arguments)};a.wbg.__wbg_self_f0e34d89f33b99fd=function(){return O((()=>{const a=self.self;return y(a)}),arguments)};a.wbg.__wbg_window_d3b084224f4774d7=function(){return O((()=>{const a=window.window;return y(a)}),arguments)};a.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return O((()=>{const a=globalThis.globalThis;return y(a)}),arguments)};a.wbg.__wbg_global_35dfdd59a4da3e74=function(){return O((()=>{const a=global.global;return y(a)}),arguments)};a.wbg.__wbg_new_a64e3f2afc2cf2f8=((a,b)=>{const c=new h(C(a,b));return y(c)});a.wbg.__wbg_call_5da1969d7cd31ccd=function(){return O(((a,b,c)=>{const d=u(a).call(u(b),u(c));return y(d)}),arguments)};a.wbg.__wbg_new_60f57089c7563e81=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=i;try{return P(d,c.b,a,b)}finally{c.a=d}};const e=new p(d);return y(e)}finally{c.a=c.b=i}});a.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=p.resolve(u(a));return y(b)});a.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const c=u(a).then(u(b));return y(c)});a.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=u(a).buffer;return y(b)});a.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,c)=>{const d=new j(u(a),b>>>i,c>>>i);return y(d)});a.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new j(u(a));return y(b)});a.wbg.__wbg_set_2357bf09366ee480=((a,b,c)=>{u(a).set(u(b),c>>>i)});a.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=u(a).length;return b});a.wbg.__wbindgen_debug_string=((a,b)=>{const c=D(u(b));const d=H(c,s.__wbindgen_malloc,s.__wbindgen_realloc);const e=E;J()[a/o+ f]=e;J()[a/o+ i]=d});a.wbg.__wbindgen_throw=((a,b)=>{throw new h(C(a,b))});a.wbg.__wbindgen_memory=(()=>{const a=s.memory;return y(a)});a.wbg.__wbg_respond_8fadc5f5c9d95422=((a,b)=>{u(a).respond(b>>>i)});a.wbg.__wbg_byobRequest_08c18cee35def1f4=(a=>{const b=u(a).byobRequest;return Q(b)?i:y(b)});a.wbg.__wbg_view_231340b0dd8a2484=(a=>{const b=u(a).view;return Q(b)?i:y(b)});a.wbg.__wbg_byteLength_5299848ed3264181=(a=>{const b=u(a).byteLength;return b});a.wbg.__wbg_close_da7e6fb9d9851e5a=(a=>{u(a).close()});a.wbg.__wbg_buffer_4e79326814bdd393=(a=>{const b=u(a).buffer;return y(b)});a.wbg.__wbg_byteOffset_b69b0a07afccce19=(a=>{const b=u(a).byteOffset;return b});a.wbg.__wbg_close_e9110ca16e2567db=(a=>{u(a).close()});a.wbg.__wbg_enqueue_d71a1a518e21f5c3=((a,b)=>{u(a).enqueue(u(b))});a.wbg.__wbindgen_closure_wrapper54=((a,b,c)=>{const d=K(a,b,10,L);return y(d)});a.wbg.__wbindgen_closure_wrapper125=((a,b,c)=>{const d=M(a,b,32,N);return y(d)});return a});var P=((a,b,c,d)=>{s.wasm_bindgen__convert__closures__invoke2_mut__h4917ddb720101916(a,b,y(c),y(d))});var K=((a,b,c,d)=>{const e={a:a,b:b,cnt:f,dtor:c};const g=(...a)=>{e.cnt++;try{return d(e.a,e.b,...a)}finally{if(--e.cnt===i){s.__wbindgen_export_2.get(e.dtor)(e.a,e.b);e.a=i}}};g.original=e;return g});var w=(a=>{if(a<132)return;t[a]=v;v=a});var M=((a,b,c,d)=>{const e={a:a,b:b,cnt:f,dtor:c};const g=(...a)=>{e.cnt++;const b=e.a;e.a=i;try{return d(b,e.b,...a)}finally{if(--e.cnt===i){s.__wbindgen_export_2.get(e.dtor)(b,e.b)}else{e.a=b}}};g.original=e;return g});var H=((a,b,c)=>{if(c===d){const c=F.encode(a);const d=b(c.length,f)>>>i;B().subarray(d,d+ c.length).set(c);E=c.length;return d};let e=a.length;let g=b(e,f)>>>i;const h=B();let j=i;for(;j<e;j++){const b=a.charCodeAt(j);if(b>127)break;h[g+ j]=b};if(j!==e){if(j!==i){a=a.slice(j)};g=c(g,e,e=j+ a.length*3,f)>>>i;const b=B().subarray(g+ j,g+ e);const d=G(a,b);j+=d.written};E=j;return g});var B=(()=>{if(A===c||A.byteLength===i){A=new j(s.memory.buffer)};return A});var C=((a,b)=>{a=a>>>i;return z.decode(B().subarray(a,a+ b))});var Y=(async(a,b)=>{if(typeof Response===l&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===l){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});const q={};let r;if(typeof document!==b&&document.currentScript!==c){r=new URL(document.currentScript.src,location.href).toString()};let s=d;const t=new e(128).fill(d);t.push(d,c,!0,!1);let v=t.length;const z=typeof TextDecoder!==b?new TextDecoder(g,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw h(`TextDecoder not available`)}};if(typeof TextDecoder!==b){z.decode()};let A=c;let E=i;const F=typeof TextEncoder!==b?new TextEncoder(g):{encode:()=>{throw h(`TextEncoder not available`)}};const G=typeof F.encodeInto===l?((a,b)=>F.encodeInto(a,b)):((a,b)=>{const c=F.encode(a);b.set(c);return {read:a.length,written:c.length}});let I=c;class R{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_intounderlyingbytesource_free(a)}type(){let a;let b;try{const e=s.__wbindgen_add_to_stack_pointer(-n);s.intounderlyingbytesource_type(e,this.__wbg_ptr);var c=J()[e/o+ i];var d=J()[e/o+ f];a=c;b=d;return C(c,d)}finally{s.__wbindgen_add_to_stack_pointer(n);s.__wbindgen_free(a,b,f)}}autoAllocateChunkSize(){const a=s.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return a>>>i}start(a){s.intounderlyingbytesource_start(this.__wbg_ptr,y(a))}pull(a){const b=s.intounderlyingbytesource_pull(this.__wbg_ptr,y(a));return x(b)}cancel(){const a=this.__destroy_into_raw();s.intounderlyingbytesource_cancel(a)}}q.IntoUnderlyingByteSource=R;class S{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_intounderlyingsink_free(a)}write(a){const b=s.intounderlyingsink_write(this.__wbg_ptr,y(a));return x(b)}close(){const a=this.__destroy_into_raw();const b=s.intounderlyingsink_close(a);return x(b)}abort(a){const b=this.__destroy_into_raw();const c=s.intounderlyingsink_abort(b,y(a));return x(c)}}q.IntoUnderlyingSink=S;class T{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_intounderlyingsource_free(a)}pull(a){const b=s.intounderlyingsource_pull(this.__wbg_ptr,y(a));return x(b)}cancel(){const a=this.__destroy_into_raw();s.intounderlyingsource_cancel(a)}}q.IntoUnderlyingSource=T;class U{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_options_free(a)}format(){let a;let b;try{const e=s.__wbindgen_add_to_stack_pointer(-n);s.__wbg_get_options_format(e,this.__wbg_ptr);var c=J()[e/o+ i];var d=J()[e/o+ f];a=c;b=d;return C(c,d)}finally{s.__wbindgen_add_to_stack_pointer(n);s.__wbindgen_free(a,b,f)}}format(a){const b=H(a,s.__wbindgen_malloc,s.__wbindgen_realloc);const c=E;s.__wbg_set_options_format(this.__wbg_ptr,b,c)}engine(){let a;let b;try{const e=s.__wbindgen_add_to_stack_pointer(-n);s.__wbg_get_options_engine(e,this.__wbg_ptr);var c=J()[e/o+ i];var d=J()[e/o+ f];a=c;b=d;return C(c,d)}finally{s.__wbindgen_add_to_stack_pointer(n);s.__wbindgen_free(a,b,f)}}engine(a){const b=H(a,s.__wbindgen_malloc,s.__wbindgen_realloc);const c=E;s.__wbg_set_options_engine(this.__wbg_ptr,b,c)}yInvert(){const a=s.__wbg_get_options_yInvert(this.__wbg_ptr);return a!==i}yInvert(a){s.__wbg_set_options_yInvert(this.__wbg_ptr,a)}}q.Options=U;class V{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_pipeoptions_free(a)}preventClose(){const a=s.pipeoptions_preventClose(this.__wbg_ptr);return a!==i}preventCancel(){const a=s.pipeoptions_preventCancel(this.__wbg_ptr);return a!==i}preventAbort(){const a=s.pipeoptions_preventAbort(this.__wbg_ptr);return a!==i}signal(){const a=s.pipeoptions_signal(this.__wbg_ptr);return x(a)}}q.PipeOptions=V;class W{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_queuingstrategy_free(a)}highWaterMark(){const a=s.queuingstrategy_highWaterMark(this.__wbg_ptr);return a}}q.QueuingStrategy=W;class X{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=i;return a}free(){const a=this.__destroy_into_raw();s.__wbg_readablestreamgetreaderoptions_free(a)}mode(){const a=s.readablestreamgetreaderoptions_mode(this.__wbg_ptr);return x(a)}}q.ReadableStreamGetReaderOptions=X;a=Object.assign(a1,{initSync:a0},q)})()