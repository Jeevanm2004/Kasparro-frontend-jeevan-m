import { Navbar } from "@/components/layout/Navbar";
import Link from "next/link";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="container mx-auto px-4 py-12 md:px-8">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                                <div className="h-6 w-6 rounded bg-zinc-900 dark:bg-white flex items-center justify-center">
                                    <span className="text-white dark:text-zinc-900 font-bold text-xs">K</span>
                                </div>
                                <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">Kasparro</span>
                            </Link>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                                AI visibility intelligence for the machine age. Optimize your brand for the future of search.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-zinc-900 dark:text-white">Product</h4>
                            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <li><Link href="/app/dashboard" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Dashboard</Link></li>
                                <li><Link href="/platform" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Platform</Link></li>
                                <li><Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link></li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-zinc-900 dark:text-white">Company</h4>
                            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Blog</li>
                                <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Careers</li>
                                <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold text-zinc-900 dark:text-white">Legal</h4>
                            <ul className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                                <li className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-zinc-400 dark:text-zinc-500">
                            © {new Date().getFullYear()} Kasparro Intelligence Inc. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-xs text-zinc-400 dark:text-zinc-500">
                            <span className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">Twitter</span>
                            <span className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">LinkedIn</span>
                            <span className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer">GitHub</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
