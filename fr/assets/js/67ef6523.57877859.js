(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),o=(n(0),n(149)),l={title:"useRecoilCallback(callback, deps)",sidebar_label:"useRecoilCallback()"},c={unversionedId:"api-reference/core/useRecoilCallback",id:"api-reference/core/useRecoilCallback",isDocsHomePage:!1,title:"useRecoilCallback(callback, deps)",description:"Ce hook est similaire \xe0 useCallback(), mais fournira \xe9galement une API pour que vos rappels fonctionnent avec l'\xe9tat Recoil. Ce hook peut \xeatre utilis\xe9 pour construire un callback qui a acc\xe8s \xe0 un Snapshot en lecture seule de l'\xe9tat Recoil et la possibilit\xe9 de mettre \xe0 jour de mani\xe8re asynchrone l'\xe9tat Recoil actuel.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilCallback.md",slug:"/api-reference/core/useRecoilCallback",permalink:"/fr/docs/api-reference/core/useRecoilCallback",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilCallback.md",version:"current",sidebar_label:"useRecoilCallback()",sidebar:"docs",previous:{title:"useGotoRecoilSnapshot(snapshot)",permalink:"/fr/docs/api-reference/core/useGotoRecoilSnapshot"},next:{title:"atomFamily(options)",permalink:"/fr/docs/api-reference/utils/atomFamily"}},i=[{value:"Exemple de lecture diff\xe9r\xe9e",id:"exemple-de-lecture-diff\xe9r\xe9e",children:[]}],u={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Ce hook est similaire \xe0 ",Object(o.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(o.b)("em",{parentName:"a"},Object(o.b)("inlineCode",{parentName:"em"},"useCallback()"))),", mais fournira \xe9galement une API pour que vos rappels fonctionnent avec l'\xe9tat Recoil. Ce hook peut \xeatre utilis\xe9 pour construire un callback qui a acc\xe8s \xe0 un ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(o.b)("inlineCode",{parentName:"a"},"Snapshot"))," en lecture seule de l'\xe9tat Recoil et la possibilit\xe9 de mettre \xe0 jour de mani\xe8re asynchrone l'\xe9tat Recoil actuel."),Object(o.b)("p",null,"Certaines motivations pour utiliser ce crochet peuvent inclure:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lire l'\xe9tat Recoil de mani\xe8re asynchrone sans souscrire \xe0 un composant React pour effectuer un nouveau rendu si l'atome ou le s\xe9lecteur est mis \xe0 jour."),Object(o.b)("li",{parentName:"ul"},"Reportez les recherches co\xfbteuses \xe0 une action asynchrone que vous ne voulez pas faire au moment du rendu."),Object(o.b)("li",{parentName:"ul"},"Effectuer des effets secondaires o\xf9 vous souhaitez \xe9galement lire ou \xe9crire dans l'\xe9tat Recoil."),Object(o.b)("li",{parentName:"ul"},"Mettre \xe0 jour dynamiquement un atome ou un s\xe9lecteur o\xf9 nous pouvons ne pas savoir au moment du rendu quel atome ou s\xe9lecteur nous voulons mettre \xe0 jour, nous ne pouvons donc pas utiliser ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},Object(o.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/asynchronous-data-queries#pr%C3%A9-extraction"},"Pr\xe9lecture")," donn\xe9es avant le rendu.")),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"type CallbackInterface = {\n  snapshot: Snapshot,\n  gotoSnapshot: Snapshot => void,\n  set: <T>(RecoilState<T>, (T => T) | T) => void,\n  reset: <T>(RecoilState<T>) => void,\n};\n\nfunction useRecoilCallback<Args, ReturnValue>(\n  callback: CallbackInterface => (...Args) => ReturnValue,\n  deps?: $ReadOnlyArray<mixed>,\n): (...Args) => ReturnValue\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"callback"))," - La fonction de rappel utilisateur avec une fonction wrapper qui fournit une interface de rappel. Les rappels pour changer l'\xe9tat seront mis en file d'attente pour mettre \xe0 jour de mani\xe8re asynchrone l'\xe9tat Recoil actuel. La signature de type de la fonction encapsul\xe9e correspond \xe0 la signature de type du rappel renvoy\xe9."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"deps"))," - Un ensemble optionnel de d\xe9pendances pour m\xe9moriser le rappel. Comme ",Object(o.b)("inlineCode",{parentName:"li"},"useCallback()"),", le callback produit ne sera pas m\xe9moris\xe9 par d\xe9faut et produira une nouvelle fonction \xe0 chaque rendu. Vous pouvez transmettre un tableau vide pour toujours renvoyer la m\xeame instance de fonction. Si vous passez des valeurs dans le tableau ",Object(o.b)("inlineCode",{parentName:"li"},"deps"),", une nouvelle fonction sera utilis\xe9e si l'\xe9galit\xe9 de r\xe9f\xe9rence de tout dep change. Ces valeurs peuvent ensuite \xeatre utilis\xe9es \xe0 partir du corps de votre rappel sans devenir obsol\xe8tes. (Voir ",Object(o.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(o.b)("inlineCode",{parentName:"a"},"useCallback")),") Vous pouvez ",Object(o.b)("a",{parentName:"li",href:"/docs/introduction/installation#eslint"},"mettre \xe0 jour eslint")," pour vous assurer qu'il est utilis\xe9 correctement .")),Object(o.b)("p",null,"Interface de rappel:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"snapshot"))," - Le ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot"},Object(o.b)("inlineCode",{parentName:"a"},"Snapshot"))," fournit un aper\xe7u en lecture seule de l'\xe9tat de l'atome Recoil engag\xe9 avec un lot React lorsque la transaction actuelle, le rappel est appel\xe9 de commenc\xe9. Alors que les valeurs d'atome sont statiques, les s\xe9lecteurs asynchrones peuvent encore \xeatre en attente ou \xeatre r\xe9solus."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"gotoSnapshot"))," - Mettre en file d'attente la mise \xe0 jour de l'\xe9tat global pour qu'il corresponde au ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot"},Object(o.b)("inlineCode",{parentName:"a"}," Snapshot"))," fourni."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"set"))," - Mise en file d'attente d\xe9finissant la valeur d'un atome ou d'un s\xe9lecteur. Comme ailleurs, vous pouvez soit fournir la nouvelle valeur directement ou une fonction de mise \xe0 jour qui renvoie la nouvelle valeur et prend la valeur actuelle comme param\xe8tre. La valeur actuelle repr\xe9sente tous les autres changements d'\xe9tat mis en file d'attente \xe0 ce jour dans la transaction actuelle."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"reset"))," - R\xe9initialise la valeur d'un atome ou d'un s\xe9lecteur \xe0 sa valeur par d\xe9faut.")),Object(o.b)("h3",{id:"exemple-de-lecture-diff\xe9r\xe9e"},"Exemple de lecture diff\xe9r\xe9e"),Object(o.b)("p",null,"Cet exemple utilise ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"useRecoilCallback()"))," pour lire de fa\xe7on diff\xe9r\xe9e l'\xe9tat sans souscrire \xe0 un composant \xe0 restituer lorsque l'\xe9tat change."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilCallback} from 'recoil';\n\nconst itemsInCart = atom({\n  key: 'itemsInCart',\n  default: 0,\n});\n\nfunction CartInfoDebug() {\n  const logCartItems = useRecoilCallback(({snapshot}) => async () => {\n    const numItemsInCart = await snapshot.getPromise(itemsInCart);\n    console.log('\xc9l\xe9ments dans le chariot: ', numItemsInCart);\n  });\n\n  return (\n    <div>\n      <button onClick={logCartItems}>Noter les \xe9l\xe9ments du chariot</button>\n    </div>\n  );\n}\n")))}s.isMDXComponent=!0}}]);