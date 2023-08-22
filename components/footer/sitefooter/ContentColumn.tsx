import ColumnTitle from "./ColumnTitle";

interface ContentColumnProps {title: string, children: React.ReactNode}

const ContentColumn: React.FC<ContentColumnProps> = ( {title, children} ) => {
  return (
    <div className="flex flex-col items-start mt-5 md:mt-0 mb-5">
        <ColumnTitle title={title} />
        {children}
    </div>
  )
}
export default ContentColumn;