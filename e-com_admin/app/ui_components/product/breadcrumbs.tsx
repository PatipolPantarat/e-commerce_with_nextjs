import Link from "next/link";

interface Breadcrumb {
  title: string;
  path: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav>
      <ol>
        {breadcrumbs.map(({ title, path, active }, index) => (
          <li key={path} className={active ? "active" : ""}>
            <Link href={path}>{title}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
