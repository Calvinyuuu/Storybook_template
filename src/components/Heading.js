/**
 * 
 * children: the content displayed
 * level: the header level
 * ...restProps: misc props if any
 * @returns the component
 */
export default function Heading({children, level, ...restProps}) {
 let levels = new Set(["1","2","3","4","5","6"]);
 let Element = "h1";

 if (levels.has(level)){
    Element = `h${level}`;
 }

 return <Element {...restProps}>{children}</Element>
}