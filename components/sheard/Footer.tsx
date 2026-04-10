"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session, status } = useSession()

  const isLoggedIn = status === "authenticated"
  const userRole = session?.user?.role || null

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Mission", href: "/mission" },
    { name: "Sell With Us", href: "/become-seller" },
    { name: "Blog", href: "/blog" },
  ].filter((link) => link.href !== "/become-seller" || !isLoggedIn || userRole !== "seller")

  const customerServiceLinks = [
    { name: "FAQs", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ]

  const isActive = (href: string) => pathname === href || pathname.startsWith(href)

  const handleBecomeSellerClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    if (!isLoggedIn) {
      router.push("/login")
    } else {
      router.push(href)
    }
  }

  return (
    <footer className="bg-[#fffaf2] border-t border-[#eadfce] mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/asset/logo.png"
                width={40}
                height={53}
                alt="Table Fresh Logo"
                className="h-[53px] w-[40px]"
                priority
              />
              <div className="leading-5">
                <h1 className="text-xl font-bold text-black">TABLE</h1>
                <p className="text-[#8a6a3d] font-semibold text-lg -mt-1">FRESH</p>
                <span className="text-[10px] text-gray-500 block">Local. Seasonal. Direct.</span>
              </div>
            </Link>

            <div className="flex gap-4 mt-4">
              {[{ Icon: Facebook }, { Icon: Instagram }, { Icon: Twitter }].map(({ Icon }, i) => (
                <Link key={i} href="#" className="text-gray-500 hover:text-[#8a6a3d] transition-colors">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) =>
                      link.href === "/become-seller" ? handleBecomeSellerClick(e, link.href) : null
                    }
                    className={`text-sm transition font-medium ${
                      isActive(link.href)
                        ? "text-[#8a6a3d]"
                        : "text-gray-700 hover:text-[#8a6a3d]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-3">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm transition font-medium ${
                      isActive(link.href)
                        ? "text-[#8a6a3d]"
                        : "text-gray-700 hover:text-[#8a6a3d]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} <strong>TABLE FRESH</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
