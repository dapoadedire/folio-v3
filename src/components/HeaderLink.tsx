import React from "react";

export const HeaderLink = ({
    href,
    className,
    children,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
}) => {
    const pathname = window.location.pathname;
    const isActive = href === pathname || href === pathname.replace(/\/$/, "");

    return (
        <>
            <a
                href={href}
                className={`inline-block text-decoration-none ${className}${
                    isActive ? " font-bold underline" : ""
                }`}
            >
                {children}
            </a>
        </>
    );
};
