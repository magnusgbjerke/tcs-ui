import { Breadcrumbs, BreadcrumbItem } from "../../components/Breadcrumbs";

export function BreadcrumbsDisplay() {
  const itemsMockUp: Array<BreadcrumbItem> = [
    { title: "home", href: "/" },
    { title: "men", href: "/men" },
    { title: "clothes", href: "/men/clothes" },
  ];

  return (
    <>
      <p className="text-3xl underline p-2">Breadcrumbs</p>
      <Breadcrumbs items={itemsMockUp} />
    </>
  );
}
