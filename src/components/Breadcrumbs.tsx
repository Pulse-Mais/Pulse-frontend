"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { BreadCrumbsLink } from '@/utils/links';

const Breadcrumbs = () => {
  const pathnames = usePathname().split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <li key={href} className="flex items-center">
              {index != 0 && <span className="mx-1">{">"}</span>}
              {isLast ? (
                <span className="font-bold text-2xl">{BreadCrumbsLink.filter(link => link.href == `/${value}`)[0]?.name || value}</span>
              ) : (
                <Link href={href}>
                  <span className="text-2xl">{BreadCrumbsLink.filter(link => link.href == `/${value}`)[0]?.name || value}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;