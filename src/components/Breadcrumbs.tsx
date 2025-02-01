export interface Items {
  title: string;
  href: string;
}

interface Props {
  items: Array<Items> | [];
}

export function Breadcrumbs({ items = [] }: Props) {
  return (
    <>
      <div className="flex">
        {items.map((item, index) => (
          <p key={index}>
            {item.title}
            {index === items.length - 1 ? "" : " > "}
          </p>
        ))}
      </div>
    </>
  );
}
