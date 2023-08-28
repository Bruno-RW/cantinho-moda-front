interface ColumnTitleProps {title: string}

const ColumnTitle: React.FC<ColumnTitleProps> = ({ title }) => {
  return (
    <h4 className="text-sm font-bold pb-5">{title}</h4>
  );
}
export default ColumnTitle;