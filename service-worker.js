if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const s=e=>a(e,c),f={module:{uri:c},exports:n,require:s};i[c]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/12/15/dzs-hj/index.html",revision:"250fa1119df8ccca1d1fd86ba7d27d7a"},{url:"2020/12/15/googlepan-hj/index.html",revision:"c22f62d99f263109801fab7a851986d6"},{url:"2020/12/15/jiema-hj/index.html",revision:"e8cdc2308c3553151259358efbe3622b"},{url:"2020/12/15/lanzoucloud-app-hj/index.html",revision:"9695d22a075202a12b5c74c2e3428e7c"},{url:"2020/12/15/manghua-hj/index.html",revision:"e364edb3c2df9a9d95f553e9914625ea"},{url:"2020/12/15/qcbz-pan-hj/index.html",revision:"907fb6752c5120ae7a1490932b1e9f28"},{url:"2020/12/15/spxz-hj/index.html",revision:"b0ea910daddeede607cfb5c9730bfdf4"},{url:"2020/12/15/ssxz-hj/index.html",revision:"4d8b965ce1928ed61bb4e038770d2b8c"},{url:"2020/12/15/telegram-bot/index.html",revision:"cf62d02e06d01c10788add6c43530dab"},{url:"2020/12/15/waiguosfz-hj/index.html",revision:"ae8729b8525644f53392cf2a6e9017f7"},{url:"2020/12/15/wpzy-hj/index.html",revision:"c9b00b2f34e7193c12b0e1f1e49392b5"},{url:"2020/12/15/xzgj-hj/index.html",revision:"1e4fab306ebea7d3e39138fbf6a66fa3"},{url:"2020/12/15/zxspwz-hj/index.html",revision:"bca8687ff9b030d6229eff01b7b488e5"},{url:"2022/04/09/IDM/index.html",revision:"e11edb701fb4bc902942f26ef2561ca1"},{url:"2022/04/09/PreSonus-Studio-One/index.html",revision:"874754c00a502594c9b5a77da77451bd"},{url:"2022/04/10/cloudreve/index.html",revision:"45a707005d7da93c7aa53065efe271fc"},{url:"2022/04/14/gcp-ssh-password/index.html",revision:"3d29d47212a5a9a2a5b8a1bd68ceeaca"},{url:"2022/04/16/frp/index.html",revision:"36f72b87f740ddd44400d3aedae974b4"},{url:"2022/04/23/hax/index.html",revision:"541f972e31d07cc28c48825d27f7e1dc"},{url:"2022/04/23/parsec/index.html",revision:"b5f059649060c1dce56318820a2f0666"},{url:"2022/04/25/lsky-pro/index.html",revision:"30ae209c6677c6f6e3bd3158a1edbfa9"},{url:"2022/04/25/windows/index.html",revision:"5dd221c28ab84aec62e4d343face551e"},{url:"2022/04/28/musicdl/index.html",revision:"1db72ecdf71edd4640204224d08b9d15"},{url:"2022/05/03/Alist-add-account/index.html",revision:"44e26332ba796ba0396b474b402a648b"},{url:"2022/05/03/Alist-Features/index.html",revision:"ba2b262313074a27c6fffc7ab5f2f406"},{url:"2022/05/03/Alist-ht/index.html",revision:"080a9aea7a89e7a10ba42a4c298f764c"},{url:"2022/05/03/Alist-webdav/index.html",revision:"65483a5ab0137f6405bf3e0d68d13042"},{url:"2022/05/03/Alist/index.html",revision:"fb2d34c9cb9e9414e947fc9f1b36baca"},{url:"2022/05/04/frp-webtest/index.html",revision:"21d593daa07f8b4a023728a2661a6706"},{url:"2022/05/07/iptables/index.html",revision:"4ff2c60723235adeed4ff9a96ecb9fdb"},{url:"2022/05/07/Navicat-Premium-12-pj/index.html",revision:"194725f8545957efbc7b1b906832efb8"},{url:"2022/05/07/Navicat-Premium-15-pj/index.html",revision:"a7097200fe1feb7d2bdd6f2406e1c9ac"},{url:"2022/05/07/sjkkshtj/index.html",revision:"42dfd34d77c89b0a1f92a7645cbadbd9"},{url:"2022/05/07/sqlsjktj/index.html",revision:"7f31aa6ddf4a5624c068806ad3b67e99"},{url:"2022/05/08/Markdown-bjq/index.html",revision:"db9331461ec5a999368d9c3e5038596a"},{url:"2022/05/10/frps-webui-admin/index.html",revision:"3592c1436e6bde3c2d4f2a89f6679ce6"},{url:"2022/05/10/Linux-vps-add-Virtual-Memory/index.html",revision:"f9e434cd1215b2db8b4c2dcd13a53ced"},{url:"2022/05/11/frps-install/index.html",revision:"e1df51811b3a0c08044286f9b18559ca"},{url:"2022/05/11/Github-Hosts/index.html",revision:"79f61d3c2e12c9f8a3e089ac58fa735e"},{url:"2022/05/11/java-install/index.html",revision:"ff94bdb7bc55e174a62e2ba97a54ba4b"},{url:"2022/05/11/lanproxy/index.html",revision:"51e9659b1b6a1f3eb27ef3b3d2ca1ea1"},{url:"2022/05/15/hugo-blog/index.html",revision:"e6e98b77bad107f9b28fded24f4fe818"},{url:"2022/06/01/Rhythm-Doctor-GOODRAGE/index.html",revision:"1840fe081055566b645e3209e60e0174"},{url:"2022/06/22/openfrp-frpc/index.html",revision:"f4e1920d7d5685504222ea55bc6bc065"},{url:"2022/07/06/LIULIFrp/index.html",revision:"bee95410f2b85d9186179f65bbf2f6a4"},{url:"2022/07/06/StarryFrp/index.html",revision:"2828ffb24fcb8f1678c257dcf27f17bb"},{url:"404.html",revision:"5f803c36a84ee3959dbdb5a0ac5e63d0"},{url:"archives/2020/12/index.html",revision:"0bdd8a405814b24b740bbde4cb18d943"},{url:"archives/2020/12/page/2/index.html",revision:"12e8b5c9e46663b2d2fea3d33dedf5dd"},{url:"archives/2020/index.html",revision:"3dc7457ebc6041bf0241f6293ec37b3e"},{url:"archives/2020/page/2/index.html",revision:"12dba4e8c88798beb98fcf4634a359ab"},{url:"archives/2022/04/index.html",revision:"f69fc72eb8f9fd51fadc015336aec833"},{url:"archives/2022/05/index.html",revision:"4ca22b1b5a096deb6c8ee6a6c1caded0"},{url:"archives/2022/05/page/2/index.html",revision:"0eeb86ab0d5c2f84c0ca103ff487ac89"},{url:"archives/2022/06/index.html",revision:"9497b5dbde05f6bbcfa927c218054302"},{url:"archives/2022/07/index.html",revision:"0f4b9ff3f2ad1df966ac0650c1746de8"},{url:"archives/2022/index.html",revision:"14b0301d942708aa47151099225d35e2"},{url:"archives/2022/page/2/index.html",revision:"8499c606c05ae826e0253ae197ac110b"},{url:"archives/2022/page/3/index.html",revision:"90543fc95e9b518430619465a488709f"},{url:"archives/2022/page/4/index.html",revision:"df69ad69ad8f4893170b2f8be5231fa7"},{url:"archives/index.html",revision:"0c226cd318806e51c65f3977b4c248f8"},{url:"archives/page/2/index.html",revision:"6fa331e544b53ba6ce792a93e349fc82"},{url:"archives/page/3/index.html",revision:"c3bdb843e881e07844cf472f2882e84b"},{url:"archives/page/4/index.html",revision:"1ba50c95a29bf38df22e2b4f79350c7c"},{url:"archives/page/5/index.html",revision:"cc6d1eed33f7a631b6af20ccf4b49711"},{url:"bangumis/index.html",revision:"bfade2a4206b1cb07d483ba7aa393d16"},{url:"categories/blog分支/index.html",revision:"623e87bf8e9595e53eafc4c9529c8b0c"},{url:"categories/index.html",revision:"8143146b0f3e8e277b65203b723f179a"},{url:"categories/vps/index.html",revision:"5d92072e69d358ee599909c440b8ecc1"},{url:"categories/vps/白嫖/hax/index.html",revision:"74380c22dab35fb607a307078bf1018b"},{url:"categories/vps/白嫖/index.html",revision:"e566b08a807beb569b2abbb7ee33d02d"},{url:"categories/vps/谷歌云/index.html",revision:"46139cb65ba0957f7bf4297f3a921163"},{url:"categories/内网穿透-frp/index.html",revision:"c46a45635e5a2183631e89b0f14436c8"},{url:"categories/内网穿透-frp/openfrp/index.html",revision:"ddd592f8a339cd3f9f159e97100db7c2"},{url:"categories/内网穿透-frp/openfrp/速通/index.html",revision:"0c1b7ccbe6e4daad6b5ea1b4541c5485"},{url:"categories/内网穿透-frp/教程/index.html",revision:"833a191d3a7ac1d3fbd728dafc8bb269"},{url:"categories/内网穿透-frp/测试/index.html",revision:"c7a39248f8f944c39566f8186fa5a407"},{url:"categories/合集/index.html",revision:"8e05682a106fad574f228929cbfc4d3b"},{url:"categories/合集/page/2/index.html",revision:"254400dd2d8491286c32099f18eaca8e"},{url:"categories/源码/index.html",revision:"4106e8248f3009ef26b0e1770f974c5f"},{url:"categories/源码/源码推荐/index.html",revision:"2de1d7150324f0e5777abda947c02ed4"},{url:"categories/源码/源码推荐/安装教程/index.html",revision:"5bbd1dbe3a8693006c29b2dd1421039e"},{url:"categories/源码/源码教程/hosts/index.html",revision:"9cfa6c519146cff981074fb074d1ad4d"},{url:"categories/源码/源码教程/index.html",revision:"e709ccfe1c9e45b28cf7f004d1f8200b"},{url:"categories/源码推荐/index.html",revision:"e5a0b0b1c5a7096b8dec242eeb728232"},{url:"categories/源码推荐/安装教程/index.html",revision:"d631084a5d40a4d9bb585e38e02d4c06"},{url:"categories/评测/index.html",revision:"b40b825405fb18d3b928ee0183f8ec32"},{url:"categories/评测/内网穿透-frp/index.html",revision:"8250b7cf95b5e932c57e003dccf258cc"},{url:"categories/评测/内网穿透-frp/StarryFrp/index.html",revision:"d865e3e280af6548852b96d60dbd248d"},{url:"categories/软件/index.html",revision:"c3f5d7635a0e07d595a2a89bb323bde4"},{url:"categories/软件/安装/index.html",revision:"7aab130b870f63b612fbc28f404c1a49"},{url:"categories/软件/安装/教程/index.html",revision:"4ca9a4b7f1ef05ce7ff92e7e58e64153"},{url:"categories/软件/软件分享/index.html",revision:"0212774d58651b3f37618deaddd91c6a"},{url:"categories/软件/软件分享/实用软件/index.html",revision:"343311d6ea0e8a5e5fa1d43da11c56db"},{url:"categories/软件/软件推荐/index.html",revision:"bb24da05b65d6e3b9f2a3a879f02e591"},{url:"categories/软件/软件推荐/软件分享/index.html",revision:"850ff0db5308a4108e36453ef812a897"},{url:"categories/软件/软件推荐/软件分享/破解/index.html",revision:"1358b86ff0443c042a23ee9a79ad967c"},{url:"categories/软件/软件推荐/软件分享/破解/编曲宿主/index.html",revision:"2f76f994277c8874f3bbd7d057513407"},{url:"categories/软件/软件推荐/软件分享/软件测评/index.html",revision:"1e808ab2d0e8f922c692bcc1af12161f"},{url:"categories/音乐/index.html",revision:"493b97a812c2c23e5af59ed422c9d917"},{url:"categories/音乐/推荐/index.html",revision:"c3cf38c25f1941a2b67f4b2fe64d8e97"},{url:"categories/音乐/推荐/下载/index.html",revision:"c488db94c90bc4ae8605a39f21e3c880"},{url:"categories/音游/index.html",revision:"57df7692484581ce75d2234f1209ca0a"},{url:"categories/音游/节奏医生/index.html",revision:"c061e31d4d57e531bce74036999aa277"},{url:"categories/音游/节奏医生/自制谱/index.html",revision:"e7fc8497828fa3949ee2e9ad112d598b"},{url:"css/index.css",revision:"47d90a3812c2527ce36d0ce3f6898f6b"},{url:"css/runtime.css",revision:"a96df2424b5918e60b3362a2a4e7bc3a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"2ac8a4823661062a2e25fbf1fef3526c"},{url:"js/crash_cheat.js",revision:"f8e9d4593921576fde38caca160c30bc"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/runtime.js",revision:"d2b8cbf57cca54cd83245d934cb79369"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/weather.js",revision:"7b2e62ae86427b2ba48d77c8d3e346dd"},{url:"link/index.html",revision:"298389e8ccc84737fdcf8f0b1b61e7c3"},{url:"page/2/index.html",revision:"4e7e909fe5a3c5e06ea97af2fbab1e51"},{url:"page/3/index.html",revision:"282bf6e41c3a8cb3d341e0e596d62c81"},{url:"page/4/index.html",revision:"170afcd1eadb02dc1833345219603f9f"},{url:"page/5/index.html",revision:"275b1a58a21171262616bf9efa1dfc07"},{url:"sponsor/index.html",revision:"60c6b695bf8d3bb6c440c64a1c935873"},{url:"tags/Alist/index.html",revision:"05f19df7c81227a44dd4324438823ec3"},{url:"tags/bot/index.html",revision:"acb685e4ec8c1a81b575675e11c8f219"},{url:"tags/frp/index.html",revision:"4091c6ab5196b8012f66551f51915c05"},{url:"tags/gcp/index.html",revision:"0beea1902a0253c23c905fda1f4fb8ab"},{url:"tags/Google/index.html",revision:"4f3dbebcf8e9526956da5168c0eee7f6"},{url:"tags/hosts/index.html",revision:"a866932e56aa16b4651d13ad14bb2acc"},{url:"tags/hugo-blog/index.html",revision:"9c4cb35bb411df58ed5c188dc53f5a0f"},{url:"tags/index.html",revision:"bb98777f092636880278fc433bbfb335"},{url:"tags/Markdown/index.html",revision:"e91d430e7558f0cde234670acc9ea742"},{url:"tags/Rhythm-Doctor/index.html",revision:"40a7267169846d48241036cb800651ce"},{url:"tags/ssh/index.html",revision:"e32b11893d2941965090339bc8ace67c"},{url:"tags/StarryFrp/index.html",revision:"9045f34742ad071f1a5041e037ddc1d5"},{url:"tags/telegram/index.html",revision:"94b493d18f8d206c73efb188f7a98006"},{url:"tags/vps/index.html",revision:"4da5dc2ecf420c1edabc0cd89ec3c408"},{url:"tags/windows/index.html",revision:"20a09184729e0aa27ed2b3f23e01dd6f"},{url:"tags/下载/index.html",revision:"2209aaa0672dc51f23c7f462c16d370e"},{url:"tags/下载工具/index.html",revision:"b5091d41823cba38ce98130bb6cbad9a"},{url:"tags/内网穿透-frp/index.html",revision:"0a3099c78f558f0435e7c691cdf656cd"},{url:"tags/内网穿透/index.html",revision:"961acb36b3f6d7cc2f6f849aaef92aa9"},{url:"tags/合集/index.html",revision:"e3d380be4ddaad64b8f4ec4961e3957d"},{url:"tags/合集/page/2/index.html",revision:"86591d9884e459edf6ac3bbe215ef966"},{url:"tags/图床/index.html",revision:"966a19cb8f9efae424a664845696c042"},{url:"tags/安装/index.html",revision:"91ffb103602f856fab0758b549052a02"},{url:"tags/安装/page/2/index.html",revision:"048c9ca84984d8819b7cf5d0a807596a"},{url:"tags/工具/index.html",revision:"1650315ffe9210f84367b993ae4e210d"},{url:"tags/接码/index.html",revision:"e4b57a5d5b1e2c7c0ddcb13e1b37ad8e"},{url:"tags/推荐/index.html",revision:"509748b0932fd6586624e0f760ff811c"},{url:"tags/教程/index.html",revision:"63bf054dbaba2a346e5a99cf12cf6b15"},{url:"tags/教程/page/2/index.html",revision:"4311a464c41fb2477bace8565294c85c"},{url:"tags/数据库/index.html",revision:"368ec3aab8ca99c5fc45d8f09ef68b51"},{url:"tags/测评/index.html",revision:"384c1a9d71af45e8738ab1201ec140d6"},{url:"tags/测试/index.html",revision:"c7385f0ef4010f487cd20273f7dfca46"},{url:"tags/游戏/index.html",revision:"aec4edd6a0e0ebf60769aee9b573011d"},{url:"tags/源码/index.html",revision:"37d38065a31f8bcb0508ed7bdf714cfd"},{url:"tags/源码/page/2/index.html",revision:"c4d263fc585378231687e2d199369ac1"},{url:"tags/漫画/index.html",revision:"b59fd1cbca0cfae3ae2fdba8ac8c0a73"},{url:"tags/生成/index.html",revision:"730d235898694b9544df5075006d03ee"},{url:"tags/电子书/index.html",revision:"4e1ec55110aa537a2515dd6052ddc78c"},{url:"tags/白嫖/index.html",revision:"d9b9517e7664fa3ede490a35b490afa2"},{url:"tags/破解/index.html",revision:"68c7651287050aebcca353da929e33e8"},{url:"tags/视频/index.html",revision:"ba9235cdbb97becc1386872480579e11"},{url:"tags/端口转发/index.html",revision:"1977300f3843e9a244c775a738b74138"},{url:"tags/管理/index.html",revision:"094e6e824dc029722057f26db96c6512"},{url:"tags/编曲/index.html",revision:"d81b8993c5afedb8e5757723cef2a25a"},{url:"tags/编辑器/index.html",revision:"26fea6a39a3df517c65cb7a30454114f"},{url:"tags/网盘/index.html",revision:"f36ad530f0e14ffa0e16759eff51343f"},{url:"tags/网站/index.html",revision:"e92db8b16235707b195339e7768a015f"},{url:"tags/网络/index.html",revision:"27059ef74ea632a444cd755ccc917c8f"},{url:"tags/自制谱/index.html",revision:"1a8dfe5a3e2453adadbea9b38d67d760"},{url:"tags/节奏医生/index.html",revision:"047cfd6c6ca58ec27f527522c86b5450"},{url:"tags/蓝奏云/index.html",revision:"39592b995a9090e03073b29795aca1d7"},{url:"tags/虚拟身份证/index.html",revision:"af144a141130bdea789108f131eb05ae"},{url:"tags/评测/index.html",revision:"e5eab1ef28c043d2a6b098052aa6ee88"},{url:"tags/谷歌/index.html",revision:"deaa823eab6f1455056c3d36ef2dfc17"},{url:"tags/资源/index.html",revision:"31246dde9a5969633d48039dd754fdf5"},{url:"tags/软件/index.html",revision:"2ee02aa6558817fc56f00ddd3ca8d93b"},{url:"tags/软件/page/2/index.html",revision:"2933afb6f5eefea38060ff9dc32531e8"},{url:"tags/远程桌面/index.html",revision:"9c0a329cc85983aa810b627286b17c58"},{url:"tags/面板/index.html",revision:"6cdb2aff320b7d9a3f00d2ffc9227c92"},{url:"tags/音乐/index.html",revision:"176f1accafae871b2baa43d8b7478b18"},{url:"video/index.html",revision:"61d6a24ff1f4e3a64e0c022b929570d2"}],{})}));
//# sourceMappingURL=service-worker.js.map
