import { Breadcrumbs, items } from "../../components/Breadcrumbs";

export function BreadcrumbsDisplay() {
  const itemsMockUp: Array<items> = [
    { title: "title1", href: "#1" },
    { title: "title2", href: "#2" },
    { title: "title3", href: "#3" },
  ];

  return (
    <>
      <p className="text-3xl underline p-2">Breadcrumbs</p>
      <Breadcrumbs items={itemsMockUp} />
    </>
  );
}
