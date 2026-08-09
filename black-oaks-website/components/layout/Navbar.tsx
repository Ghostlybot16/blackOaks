import Link from 'next/link';

export default function Navbar() {
    return (
        <header>
            <nav className="flex items-center justify-between px-12 py-7">
                <Link href="/" className="text-lg font-bold">
                    BLACKOAKS
                </Link>

                <div className="flex items-center gap-18 text-lg">
                    <Link href="/">Home</Link>
                    <Link href="/properties">Properties</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </nav>
        </header>
    );
}