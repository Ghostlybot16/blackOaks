"use client";

import { useState } from "react";

type DropdownOption = {
    label: string;
    value: string;
};

type SearchDropdownProps = {
    label: string;
    placeholder: string;
    options: DropdownOption[];
};

function SearchDropdown({
    label,
    placeholder,
    options,
}: SearchDropdownProps) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const selectedOption = options.find(
        (option) => option.value === selected
    );

    return (
        <div className="relative flex min-h-[96px] flex-1 items-center px-7">

            <div className="w-full">

                {/* Field Label */}
                <p 
                    className="
                        mb-3
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-label
                        text-content-muted
                    "
                >
                    {label}
                </p>

                {/* Dropdown Button */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5
                        text-left
                        text-sm
                        font-medium
                        text-content-primary
                    "
                >
                        <span>
                            {selectedOption?.label || placeholder}
                        </span>

                        {/* Arrow */}
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className={`
                                h-4
                                w-4
                                shrink-0
                                transition-transform
                                duration-200
                                ${open ? "rotate-180" : ""}
                            `}
                        >
                            <path
                                d="M6 8L10 12L14 8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            {open && (
                <div
                    className="
                        absolute
                        left-4
                        right-4
                        top-full
                        z-50
                        mt-3
                        h-[140px]
                        overflow-y-auto
                        overscroll-contain
                        rounded-panel
                        border
                        border-dropdown-border
                        bg-surface-search
                        shadow-dropdown
                    "
                >
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                setSelected(option.value);
                                setOpen(false);
                            }}
                            className="
                                block
                                w-full
                                px-5
                                py-4
                                text-left
                                text-sm
                                font-medium
                                text-content-secondary
                                transition-colors
                                hover:bg-surface-search-hover
                            "
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>      
    );
}

export default function PropertySearch() {
    return (
        <div
            className="
                w-full
                rounded-panel
                border
                border-glass-line-subtle
                bg-glass-search
                p-2
                shadow-search
                backdrop-blur-glass
            "
        >
            {/* Search Bar Header */}
            <p
                className="
                    px-3
                    pb-2
                    pt-1
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-section-label
                    text-content-on-dark/70
                "
            >
                Find Your Home
            </p>

            <div
                className="
                    grid
                    w-full
                    grid-cols-1
                    rounded-panel
                    bg-surface-search-translucent
                    md:grid-cols-2
                    xl:grid-cols-[1.2fr_1fr_1fr_auto]
                "
            >
                {/* Location */}
                <SearchDropdown
                    label="Location"
                    placeholder="Any Location"
                    options={[
                        {
                            label: "Toronto",
                            value: "toronto",
                        },
                        {
                            label: "Scarborough",
                            value: "scarborough",
                        },
                        {
                            label: "Pickering",
                            value: "pickering",
                        },
                    ]}
                />

                {/* Property Type */}
                <div className="border-field-divider xl:border-l">
                    <SearchDropdown
                        label="Property Type"
                        placeholder="Any Type"
                        options={[
                            {
                                label: "Detached",
                                value: "detached",
                            },
                            {
                                label: "Semi-Detached",
                                value: "semi-detached",
                            },
                            {
                                label: "Townhouse",
                                value: "townhouse",
                            },
                            {
                                label: "Condo",
                                value: "condo",
                            },
                        ]}
                    />
                </div>

                {/* Price Range */}
                <div className="border-field-divider xl:border-l">
                    <SearchDropdown
                        label="Price Range"
                        placeholder="Any Price"
                        options={[
                            {
                                label: "Under $500K",
                                value: "500000",
                            },
                            {
                                label: "$500K – $750K",
                                value: "750000",
                            },
                            {
                                label: "$750K – $1M",
                                value: "1000000",
                            },
                            {
                                label: "$1M – $1.5M",
                                value: "1500000",
                            },
                            {
                                label: "$1.5M+",
                                value: "1500000-plus",
                            },
                            ]}
                        />
                </div>

                {/* Search Button */}
                <div
                    className="
                        flex
                        min-h-[96px]
                        items-center
                        px-5
                        py-4
                    "
                >
                    <button
                        type="button"
                        className="
                            w-full
                            whitespace-nowrap
                            rounded-pill
                            bg-surface-action-dark
                            px-8
                            py-4
                            text-sm
                            font-semibold
                            text-content-on-dark
                            transition-colors
                            duration-300
                            hover:bg-brand-primary-hover
                            xl:w-auto
                        "
                    >
                        Search Properties
                    </button>
                </div>
            </div>
        </div>
    );
}