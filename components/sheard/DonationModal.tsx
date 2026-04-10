"use client"
import Image from "next/image"
import Link from "next/link"


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DonationModal({ isOpen, onClose }: DonationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] max-w-md rounded-xl p-6 sm:p-8">
        <DialogHeader className="relative flex flex-col items-center text-center">
         
          <Image
            src="/asset/logo.png"
            width={40}
            height={53}
            alt="Table Fresh Logo"
            className="mb-4 h-[53px] w-[40px]"
            priority
          />
          <DialogTitle className="text-2xl font-bold text-gray-800">Support Table Fresh</DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="mb-4">
            Thank you for supporting Table Fresh. Your help keeps the platform accessible, strengthens community food
            access, and helps more people discover produce from real growers.
          </p>
          <p className="font-semibold">With appreciation from the Table Fresh team</p>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4">
          <Link href="#" className="text-md font-semibold text-[#8a6a3d] underline hover:no-underline">
            Choose your payment option
          </Link>
          <Input
            type="text"
            placeholder="Enter an amount"
            className="w-full rounded-md border border-gray-300 p-3 text-center text-lg focus:border-[#8a6a3d] focus:ring-[#8a6a3d]"
          />
          <Button className="w-full rounded-md bg-[#8a6a3d] py-3 text-lg font-semibold text-white hover:bg-[#755933]">
            Continue Support
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
  
}
