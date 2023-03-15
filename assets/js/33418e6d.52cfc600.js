"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[425],{6947:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(9231),a=n(6710);const o=[{title:"Name",key:"name",renderer:e=>l.createElement("code",{className:"overflow-hidden"},e.item.name),flex:.35},{title:"Type",key:"type",flex:.5,renderer:e=>l.createElement("code",{className:"overflow-hidden"},e.item.type)},{title:"Description",key:"description",renderer:e=>l.createElement("div",{className:"overflow-hidden"},e.item.required?l.createElement("span",{className:"font-bold italic"},"[required] "):"",e.item.description)}];const r=function(e){return l.createElement(a.iA,{indexKey:"name",columnConfigs:o,data:e.data,baseHeaderClasses:"font-bold",baseCellPadding:{vertical:"10px",horizontal:"10px"},gridConfig:{showExternLines:a.Pn.ALL,showHorizontalLines:!0,showVerticalLines:!0,width:"1px",color:"#606770"},baseRowClasses:e=>e%2!=0?"":" bg-gray-100 dark:bg-stripe"})}},8753:(e,t,n)=>{n.d(t,{N:()=>l});const l=[{name:"flex",type:"number",description:"Horizontal weight of the selection column",required:!0},{name:"renderer",type:"(props: SelectionRendererProps) => JSX.Element",description:"Selection renderer for every row",required:!0},{name:"initialSelection",type:"any[]",description:"Array containing the list of initial selected rows. Every row will be represented by the value of its `indexKey`"},{name:"headerRenderer?",type:"(props: SelectionHeaderRendererProps) => JSX.Element",description:"Global selection renderer for header"}]},7917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>S,frontMatter:()=>x,metadata:()=>y,toc:()=>C});var l=n(5675),a=n(9231),o=n(4852),r=n(1691),i=n(4161),s=n(6947),c=n(6710),d=n(7579);const p=function(e){return a.createElement("div",{className:"flex justify-center h-full w-full"},a.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.onChange,className:"accent-violet-800 dark:accent-violet-200"}))},m=[{title:"Id",key:"id",flex:.5},{title:"Last name",key:"about.lastName"},{title:"Job",key:"about.job",flex:1.5},{title:"Company",key:"company",flex:1.5}];const u=function(e){return a.createElement("div",{className:"flex justify-center h-full w-full"},a.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.onChange,className:"accent-violet-800 dark:accent-violet-200"}))};const f=function(){return a.createElement(c.iA,{indexKey:"id",data:d.M.slice(0,6),columnConfigs:m,baseHeaderClasses:"font-bold",baseRowClasses:(e,t)=>{if(t)return"cursor-pointer !bg-violet-200 dark:!bg-violet-800 dark:text-white";let n="cursor-pointer";return e%2!=0?n:`${n} bg-gray-100 dark:bg-stripe`},baseCellPadding:{vertical:"10px",horizontal:"10px"},selectionConfig:{flex:.2,initialSelection:[0,3],renderer:p,headerRenderer:u}})};var b=n(8753),k=n(8576);const x={sidebar_position:8},h="Selection",y={unversionedId:"selection",id:"selection",title:"Selection",description:"If you need to make your rows selectable you can do it via the selectionConfig prop of ``.",source:"@site/docs/selection.mdx",sourceDirName:".",slug:"/selection",permalink:"/selection",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/pagination"},next:{title:"Drag resize",permalink:"/drag-resize"}},g={},C=[],v={toc:C},w="wrapper";function S(e){let{components:t,...n}=e;return(0,o.kt)(w,(0,l.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"selection"},"Selection"),(0,o.kt)("p",null,"If you need to make your rows selectable you can do it via the ",(0,o.kt)("inlineCode",{parentName:"p"},"selectionConfig")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"<Table />"),"."),(0,o.kt)("p",null,"You have the ability to render a selector at the start of each line and define a callback for when it's pressed.\nYou can also choose whether to show a global selector for all page elements within the header."),(0,o.kt)(k.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(s.Z,{data:b.N,mdxType:"ApiTable"}))),(0,o.kt)("br",null),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"SelectionCell.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/selection/SelectionCell.tsx#L2-L15",file:"../src/examples/selection/SelectionCell.tsx#L2-L15"},"import { SelectionRendererProps } from 'retables';\n\nfunction SelectionCell(props: SelectionRendererProps) {\n    return (\n        <div className='flex justify-center h-full w-full'>\n            <input\n                type='checkbox'\n                checked={props.checked}\n                onChange={props.onChange}\n                className='accent-violet-800 dark:accent-violet-200'\n            />\n        </div>\n    );\n}\n"))),(0,o.kt)(i.Z,{value:"SelectionHeaderCell.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/selection/SelectionHeaderCell.tsx#L2-L15",file:"../src/examples/selection/SelectionHeaderCell.tsx#L2-L15"},"import { SelectionHeaderRendererProps } from 'retables';\n\nfunction SelectionHeaderCell(props: SelectionHeaderRendererProps) {\n    return (\n        <div className='flex justify-center h-full w-full'>\n            <input\n                type='checkbox'\n                checked={props.checked}\n                onChange={props.onChange}\n                className='accent-violet-800 dark:accent-violet-200'\n            />\n        </div>\n    );\n}\n"))),(0,o.kt)(i.Z,{value:"SelectionTable.tsx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/selection/Selection1Table.tsx#L8-L35",file:"../src/examples/selection/Selection1Table.tsx#L8-L35"},"function SelectionTable() {\n    return (\n        <Table<Person>\n            indexKey='id'\n            data={people.slice(0, 6)}\n            columnConfigs={peopleColumns}\n            baseHeaderClasses='font-bold'\n            baseRowClasses={(index, isSelected) => {\n                if (isSelected)\n                    return 'cursor-pointer !bg-violet-200 dark:!bg-violet-800 dark:text-white';\n                let baseClasses = 'cursor-pointer';\n                return index % 2 !== 0 ? baseClasses : `${baseClasses} bg-gray-100 dark:bg-stripe`;\n            }}\n            baseCellPadding={{\n                vertical: '10px',\n                horizontal: '10px'\n            }}\n            // highlight-start\n            selectionConfig={{\n                flex: 0.2,\n                initialSelection: [0, 3],\n                renderer: SelectionCell,\n                headerRenderer: SelectionHeaderCell\n            }}\n            // highlight-end\n        />\n    );\n}\n"))),(0,o.kt)(i.Z,{value:"columns.ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"file=../src/examples/selection/columns.ts#L4-",file:"../src/examples/selection/columns.ts#L4-"},"export const peopleColumns: ColumnConfig<Person>[] = [\n    { title: 'Id', key: 'id', flex: 0.5 },\n    { title: 'Last name', key: 'about.lastName' },\n    { title: 'Job', key: 'about.job', flex: 1.5 },\n    { title: 'Company', key: 'company', flex: 1.5 }\n];\n"))),(0,o.kt)(i.Z,{value:"Live example",mdxType:"TabItem"},(0,o.kt)(k.Z,{mdxType:"BrowserOnly"},(()=>(0,o.kt)(f,{mdxType:"Selection1Table"}))))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"/basic-personalization#custom-row-style-depending-on-row-index"},"Basic Personalization")," section,\nyou can apply custom row styles only to the selected row.")))}S.isMDXComponent=!0}}]);