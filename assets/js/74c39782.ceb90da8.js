"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[770],{2287:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>v,contentTitle:()=>x,default:()=>C,frontMatter:()=>k,metadata:()=>f,toc:()=>g});var t=n(5675),a=n(9231),o=n(4852),l=n(1691),i=n(4161),r=n(6710),p=n(7579);const m=[{title:"Id",key:"id",flex:.5},{title:"Last name",key:"about.lastName"},{title:"Age",key:"about.age",flex:.5},{title:"Job",key:"about.job",flex:1.5},{title:"Company",key:"company",flex:1.5}],d=[{title:"Id",key:"id",flex:.5},{title:"Last name",key:"about.lastName"},{title:"Age",key:"about.age",flex:.5,showAt:r.Bs.XL},{title:"Job",key:"about.job",flex:1.5},{title:"Company",key:"company",flex:1.5}];const b=function(){return a.createElement(r.iA,{indexKey:"id",data:p.M.slice(0,6),columnConfigs:d,baseHeaderClasses:"font-bold",baseRowClasses:e=>{let s="cursor-pointer";return e%2!=0?s:`${s} bg-gray-100 dark:bg-stripe`},baseCellPadding:{vertical:"10px",horizontal:"10px"}})};const u=function(){return a.createElement(r.iA,{indexKey:"id",breakpoint:r.Bs.DOUBLEXL,data:p.M.slice(0,6),columnConfigs:m,baseHeaderClasses:"font-bold",baseRowClasses:e=>{let s="cursor-pointer";return e%2!=0?s:`${s} bg-gray-100 dark:bg-stripe`},baseCellPadding:{vertical:"10px",horizontal:"10px"}})};var c=n(8576);const k={sidebar_position:5},x="Responsiveness",f={unversionedId:"responsiveness",id:"responsiveness",title:"Responsiveness",description:"Table of contents",source:"@site/docs/responsiveness.mdx",sourceDirName:".",slug:"/responsiveness",permalink:"/responsiveness",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Custom renderers",permalink:"/custom-renderers"},next:{title:"Sorting",permalink:"/sorting"}},v={},g=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Hide columns",id:"hide-columns",level:2},{value:"Mobile version",id:"mobile-version",level:2}],y={toc:g},h="wrapper";function C(e){let{components:s,...n}=e;return(0,o.kt)(h,(0,t.Z)({},y,n,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"responsiveness"},"Responsiveness"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/quick-start"},"quickstart section"),", the Table component is able to scale to various page sizes (see ",(0,o.kt)("a",{parentName:"p",href:"/quick-start#breakpoints"},"breakpoints"),") to ensure a good experience for all users."),(0,o.kt)("p",null,"You are able to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hide-columns"},(0,o.kt)("strong",{parentName:"a"},"Hide some columns"))," below a specific breakpoint"),(0,o.kt)("li",{parentName:"ul"},"Show a ",(0,o.kt)("a",{parentName:"li",href:"#mobile-version"},(0,o.kt)("strong",{parentName:"a"},"mobile version"))," of the table designed for small devices.")),(0,o.kt)("h2",{id:"hide-columns"},"Hide columns"),(0,o.kt)("p",null,"To hide a particular column under a specific breakpoint you need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"showAt")," property of ",(0,o.kt)("inlineCode",{parentName:"p"},"ColumnConfig"),"."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"columns.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/responsiveness/columns.ts#L12-",file:"../src/examples/responsiveness/columns.ts#L12-"},"export const showAtColumns: ColumnConfig<Person>[] = [\n    { title: 'Id', key: 'id', flex: 0.5 },\n    { title: 'Last name', key: 'about.lastName' },\n    // highlight-next-line\n    { title: 'Age', key: 'about.age', flex: 0.5, showAt: BREAKPOINT.XL },\n    { title: 'Job', key: 'about.job', flex: 1.5 },\n    { title: 'Company', key: 'company', flex: 1.5 }\n];\n"))),(0,o.kt)(i.Z,{value:"ResponsivenessTable.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/responsiveness/Responsiveness1Table.tsx#L6-L23",file:"../src/examples/responsiveness/Responsiveness1Table.tsx#L6-L23"},"function ResponsivenessTable() {\n    return (\n        <Table<Person>\n            indexKey='id'\n            data={people.slice(0, 6)}\n            columnConfigs={showAtColumns}\n            baseHeaderClasses='font-bold'\n            baseRowClasses={index => {\n                let baseClasses = 'cursor-pointer';\n                return index % 2 !== 0 ? baseClasses : `${baseClasses} bg-gray-100 dark:bg-stripe`;\n            }}\n            baseCellPadding={{\n                vertical: '10px',\n                horizontal: '10px'\n            }}\n        />\n    );\n}\n"))),(0,o.kt)(i.Z,{value:"Live example",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(b,{mdxType:"Responsiveness1Table"}))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Try to resize the page and see how the table in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Live example")," changes.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Hided columns will still be visibile in the the table ",(0,o.kt)("inlineCode",{parentName:"p"},"mobile version"),".")),(0,o.kt)("h2",{id:"mobile-version"},"Mobile version"),(0,o.kt)("p",null,"The mobile version of the table is enabled by default under ",(0,o.kt)("inlineCode",{parentName:"p"},"BREAKPOINT.MD"),". Since every table in the docs is renderer using ",(0,o.kt)("strong",{parentName:"p"},"reTables"),", you can see this by yourself heading over to one of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Live examples"),".\nIn the following example, for demonstration purposes, we will force the mobile view on all screens."),(0,o.kt)("p",null,"To customize this behavior use the ",(0,o.kt)("inlineCode",{parentName:"p"},"breakpoint")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Table />")," component."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ResponsivenessTable.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/responsiveness/Responsiveness2Table.tsx#L6-L25",file:"../src/examples/responsiveness/Responsiveness2Table.tsx#L6-L25"},"function ResponsivenessTable() {\n    return (\n        <Table<Person>\n            indexKey='id'\n            // highlight-next-line\n            breakpoint={BREAKPOINT.DOUBLEXL}\n            data={people.slice(0, 6)}\n            columnConfigs={peopleColumns}\n            baseHeaderClasses='font-bold'\n            baseRowClasses={index => {\n                let baseClasses = 'cursor-pointer';\n                return index % 2 !== 0 ? baseClasses : `${baseClasses} bg-gray-100 dark:bg-stripe`;\n            }}\n            baseCellPadding={{\n                vertical: '10px',\n                horizontal: '10px'\n            }}\n        />\n    );\n}\n"))),(0,o.kt)(i.Z,{value:"columns.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/responsiveness/columns.ts#L4-L10",file:"../src/examples/responsiveness/columns.ts#L4-L10"},"export const peopleColumns: ColumnConfig<Person>[] = [\n    { title: 'Id', key: 'id', flex: 0.5 },\n    { title: 'Last name', key: 'about.lastName' },\n    { title: 'Age', key: 'about.age', flex: 0.5 },\n    { title: 'Job', key: 'about.job', flex: 1.5 },\n    { title: 'Company', key: 'company', flex: 1.5 }\n];\n"))),(0,o.kt)(i.Z,{value:"Live example",mdxType:"TabItem"},(0,o.kt)(c.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(u,{mdxType:"Responsiveness2Table"}))))))}C.isMDXComponent=!0}}]);