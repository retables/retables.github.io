"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[571],{6947:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9231),i=n(6710);const r=[{title:"Name",key:"name",renderer:e=>a.createElement("code",{className:"overflow-hidden"},e.item.name),flex:.35},{title:"Type",key:"type",flex:.5,renderer:e=>a.createElement("code",{className:"overflow-hidden"},e.item.type)},{title:"Description",key:"description",renderer:e=>a.createElement("div",{className:"overflow-hidden"},e.item.required?a.createElement("span",{className:"font-bold italic"},"[required] "):"",e.item.description)}];const o=function(e){return a.createElement(i.iA,{indexKey:"name",columnConfigs:r,data:e.data,baseHeaderClasses:"font-bold",baseCellPadding:{vertical:"10px",horizontal:"10px"},gridConfig:{showExternLines:i.Pn.ALL,showHorizontalLines:!0,showVerticalLines:!0,width:"1px",color:"#606770"},baseRowClasses:e=>e%2!=0?"":" bg-gray-100 dark:bg-stripe"})}},2376:(e,t,n)=>{n.d(t,{c:()=>a});const a=[{name:"entryPerPage",type:"number",description:"Number of rows per page",required:!0},{name:"renderer",type:"(props: PageSelectorRendererProps) => JSX.Element",description:"Renderer for the page selector component",required:!0}]},1005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>x,default:()=>C,frontMatter:()=>y,metadata:()=>f,toc:()=>h});var a=n(5675),i=n(9231),r=n(4852),o=n(1691),s=n(4161),l=n(6947),p=n(6710),d=n(7579);const m=[{title:"Id",key:"id",flex:.5},{title:"Last name",key:"about.lastName"},{title:"Age",key:"about.age",flex:.5},{title:"Job",key:"about.job",flex:1.5},{title:"Company",key:"company",flex:1.5}];const c=function(e){return i.createElement("div",{className:"flex justify-end mt-5"},Array(e.nPages).fill(0).map(((t,n)=>i.createElement("div",{key:n,onClick:()=>e.setPage(n),className:`items-center font-bold cursor-pointer px-4 py-2 border\n                        text-sm hover:bg-gray-50 \n                            ${e.currentPage===n?"border-violet-800 text-violet-800 z-10":"border-gray-200 text-gray-500"} `},n))))};const g=function(){return i.createElement(p.iA,{indexKey:"id",data:d.M,columnConfigs:m,baseHeaderClasses:"font-bold",baseRowClasses:e=>{let t="cursor-pointer";return e%2!=0?t:`${t} bg-gray-100 dark:bg-stripe`},baseCellPadding:{vertical:"10px",horizontal:"10px"},paginationConfig:{entryPerPage:5,renderer:c}})};var u=n(2376),b=n(8576);const y={sidebar_position:7},x="Pagination",f={unversionedId:"pagination",id:"pagination",title:"Pagination",description:"The ` component natively supports pagination via the PaginationConfig` prop.",source:"@site/docs/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/pagination",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Sorting",permalink:"/sorting"},next:{title:"Selection",permalink:"/selection"}},k={},h=[],P={toc:h},v="wrapper";function C(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table />")," component natively supports pagination via the ",(0,r.kt)("inlineCode",{parentName:"p"},"PaginationConfig")," prop."),(0,r.kt)(b.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l.Z,{data:u.c,mdxType:"ApiTable"}))),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"PageSelector.tsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/pagination/PageSelector.tsx#L4-L24",file:"../src/examples/pagination/PageSelector.tsx#L4-L24"},"function PageSelector(props: PageSelectorRendererProps) {\n    return (\n        <div className='flex justify-end mt-5'>\n            {Array(props.nPages)\n                .fill(0)\n                .map((_, i) => (\n                    <div\n                        key={i}\n                        onClick={() => props.setPage(i)}\n                        className={`items-center font-bold cursor-pointer px-4 py-2 border\n                        text-sm hover:bg-gray-50 \n                            ${\n                                props.currentPage === i\n                                    ? 'border-violet-800 text-violet-800 z-10'\n                                    : 'border-gray-200 text-gray-500'\n                            } `}>\n                        {i}\n                    </div>\n                ))}\n        </div>\n    );\n"))),(0,r.kt)(s.Z,{value:"PaginationTable.tsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/pagination/Pagination1Table.tsx#L7-L30",file:"../src/examples/pagination/Pagination1Table.tsx#L7-L30"},"function ResponsivenessTable() {\n    return (\n        <Table<Person>\n            indexKey='id'\n            data={people}\n            columnConfigs={peopleColumns}\n            baseHeaderClasses='font-bold'\n            baseRowClasses={index => {\n                let baseClasses = 'cursor-pointer';\n                return index % 2 !== 0 ? baseClasses : `${baseClasses} bg-gray-100 dark:bg-stripe`;\n            }}\n            baseCellPadding={{\n                vertical: '10px',\n                horizontal: '10px'\n            }}\n            // highlight-start\n            paginationConfig={{\n                entryPerPage: 5,\n                renderer: PageSelector\n            }}\n            // highlight-end\n        />\n    );\n}\n"))),(0,r.kt)(s.Z,{value:"columns.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/pagination/columns.ts#L4-",file:"../src/examples/pagination/columns.ts#L4-"},"export const peopleColumns: ColumnConfig<Person>[] = [\n    { title: 'Id', key: 'id', flex: 0.5 },\n    { title: 'Last name', key: 'about.lastName' },\n    { title: 'Age', key: 'about.age', flex: 0.5 },\n    { title: 'Job', key: 'about.job', flex: 1.5 },\n    { title: 'Company', key: 'company', flex: 1.5 }\n];\n"))),(0,r.kt)(s.Z,{value:"Live example",mdxType:"TabItem"},(0,r.kt)(b.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(g,{mdxType:"Pagination1Table"}))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Table />")," component can sort data only if they are already available.\nIf, on the other hand, the source is already paginated, ",(0,r.kt)("strong",{parentName:"p"},"retables")," can't infer the complete data set and it would therefore be impossible to indicate the number of page or apply sorting rules."),(0,r.kt)("p",{parentName:"admonition"},"If you happen to be in this situation, you'll need to build yourself an ",(0,r.kt)("inlineCode",{parentName:"p"},"external paging system"),".")))}C.isMDXComponent=!0}}]);