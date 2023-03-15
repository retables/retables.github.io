"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11],{6947:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(9231),o=n(6710);const i=[{title:"Name",key:"name",renderer:e=>a.createElement("code",{className:"overflow-hidden"},e.item.name),flex:.35},{title:"Type",key:"type",flex:.5,renderer:e=>a.createElement("code",{className:"overflow-hidden"},e.item.type)},{title:"Description",key:"description",renderer:e=>a.createElement("div",{className:"overflow-hidden"},e.item.required?a.createElement("span",{className:"font-bold italic"},"[required] "):"",e.item.description)}];const l=function(e){return a.createElement(o.iA,{indexKey:"name",columnConfigs:i,data:e.data,baseHeaderClasses:"font-bold",baseCellPadding:{vertical:"10px",horizontal:"10px"},gridConfig:{showExternLines:o.Pn.ALL,showHorizontalLines:!0,showVerticalLines:!0,width:"1px",color:"#606770"},baseRowClasses:e=>e%2!=0?"":" bg-gray-100 dark:bg-stripe"})}},8137:(e,t,n)=>{n.d(t,{N:()=>a});const a=[{name:"breakpoint",type:"BREAKPOINT",description:"Width breakpoint from mobile table and full size table"},{name:"className",type:"string",description:"Classes that will be applied to the <table /> tag"},{name:"baseHeaderClasses",type:"string",description:"Classes that will be applied to the header"},{name:"baseRowClasses",type:"string | ((index: number, isSelected?: boolean) => string)",description:"Classes that will be applied to every row. You can also have different styling based on the row index or its selection status"},{name:"baseCellPadding",type:"CellPadding",description:"Default padding for each table cell, including headers"},{name:"resizable",type:"boolean",description:"Enable column drag resize"},{name:"gridConfig",type:"GridConfig",description:"Defines which grid lines needs to be rendered. Contains also grid related personalization options"},{name:"paginationConfig",type:"PaginationConfig",description:"Pagination options. If undefined, no pagination will be applied"},{name:"orderIconsConfig",type:"OrderIconsConfig",description:"Define custom header order icons"},{name:"skeletonConfig",type:"SkeletonConfig",description:"Skeleton row configuration. Skeleton rows will be displayed when the `data` prop on <Table /> is undefined"},{name:"headerRenderer",type:"(props: DefaultHeaderCellProps) => JSX.Element",description:"Default renderer for every header cell"},{name:"cellRenderer",type:"(props: DefaultCellRendererProps) => JSX.Element",description:"Default renderer for every table cell"}]},7816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>N,frontMatter:()=>x,metadata:()=>C,toc:()=>T});var a=n(5675),o=n(9231),i=n(4852),l=n(1691),r=n(4161),s=n(6947),p=n(7579),d=n(6710);const c=[{title:"Id",key:"id",flex:.5},{title:"Last name",key:"about.lastName"},{title:"Age",key:"about.age",flex:.5},{title:"Job",key:"about.job",flex:1.5},{title:"Company",key:"company",flex:1.5}];const m=function(){return o.createElement(d.iA,{indexKey:"id",data:p.M.slice(0,3),columnConfigs:c})};const b=function(e){return o.createElement("div",{className:"text-xs text-gray-700 uppercase font-extrabold dark:text-gray-400"},e.title)};const u=function(e){return o.createElement("div",{className:"text-center"},e.text)};const f=function(){return o.createElement(d.i7,{breakpoint:d.Bs.SM,headerRenderer:b,cellRenderer:u,baseRowClasses:"cursor-pointer",baseCellPadding:{vertical:"10px",horizontal:"10px"}},o.createElement(m,null))};var g=n(8137),y=n(8576);const x={sidebar_position:10},k="Global configuration",C={unversionedId:"global-configuration",id:"global-configuration",title:"Global configuration",description:"If your site contains many tables, it is possible to define common properties that will be applied to all through the `` provider.",source:"@site/docs/global-configuration.mdx",sourceDirName:".",slug:"/global-configuration",permalink:"/global-configuration",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Drag resize",permalink:"/drag-resize"},next:{title:"Api reference",permalink:"/api-reference"}},h={},T=[{value:"Global properties",id:"global-properties",level:2}],w={toc:T},v="wrapper";function N(e){let{components:t,...n}=e;return(0,i.kt)(v,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"global-configuration"},"Global configuration"),(0,i.kt)("p",null,"If your site contains many tables, it is possible to define common properties that will be applied to all through the ",(0,i.kt)("inlineCode",{parentName:"p"},"<InitTables />")," provider."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"App.tsx",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/global-configuration/App.tsx#L7-L21",file:"../src/examples/global-configuration/App.tsx#L7-L21"},"function App() {\n    return (\n        <InitTables\n            breakpoint={BREAKPOINT.SM}\n            headerRenderer={DefaultHeaderCell}\n            cellRenderer={DefaultTableCell}\n            baseRowClasses='cursor-pointer'\n            baseCellPadding={{\n                vertical: '10px',\n                horizontal: '10px'\n            }}>\n            <GlobalConfigurationTable />\n        </InitTables>\n    );\n}\n"))),(0,i.kt)(r.Z,{value:"GlobalConfigurationTable.tsx",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/global-configuration/GlobalConfiguration1Table.tsx#L6-L9",file:"../src/examples/global-configuration/GlobalConfiguration1Table.tsx#L6-L9"},"function GlobalConfigurationTable() {\n    // Render\n    return <Table<Person> indexKey='id' data={people.slice(0, 3)} columnConfigs={peopleColumns} />;\n}\n"))),(0,i.kt)(r.Z,{value:"columns.ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/global-configuration/columns.ts#L4-L10",file:"../src/examples/global-configuration/columns.ts#L4-L10"},"export const peopleColumns: ColumnConfig<Person>[] = [\n    { title: 'Id', key: 'id', flex: 0.5 },\n    { title: 'Last name', key: 'about.lastName' },\n    { title: 'Age', key: 'about.age', flex: 0.5 },\n    { title: 'Job', key: 'about.job', flex: 1.5 },\n    { title: 'Company', key: 'company', flex: 1.5 }\n];\n"))),(0,i.kt)(r.Z,{value:"Live example",mdxType:"TabItem"},(0,i.kt)(y.Z,{mdxType:"BrowserOnly"},(()=>(0,i.kt)(f,{mdxType:"App"},(0,i.kt)(m,{mdxType:"GlobalConfiguration1Table"})))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can always override a property of ",(0,i.kt)("inlineCode",{parentName:"p"},"<InitTables />")," by redefining it on ",(0,i.kt)("inlineCode",{parentName:"p"},"<Table />"))),(0,i.kt)("h2",{id:"global-properties"},"Global properties"),(0,i.kt)(y.Z,{mdxType:"BrowserOnly"},(()=>(0,i.kt)(s.Z,{data:g.N,mdxType:"ApiTable"}))))}N.isMDXComponent=!0}}]);