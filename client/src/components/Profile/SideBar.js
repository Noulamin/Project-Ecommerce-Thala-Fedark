import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
     <div class="col-span-3">
            <div class="px-4 py-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="../assets/images/avatar.png" alt="profile" class="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"/>
                </div>
                <div class="flex-grow">
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 font-medium">John Doe</h4>
                </div>
            </div>

            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div class="space-y-1 pl-8">
                    <Link to="#" class="relative text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-address-card"></i>
                        </span>
                        Manage account
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        Profile information
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        Manage addresses
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        Change password
                    </Link>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <Link to="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-box-archive"></i>
                        </span>
                        My order history
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        My returns
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        My Cancellations
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        My reviews
                    </Link>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <Link to="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-credit-card"></i>
                        </span>
                        Payment methods
                    </Link>
                    <Link to="#" class="relative hover:text-primary block capitalize transition">
                        voucher
                    </Link>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <Link to="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-regular fa-heart"></i>
                        </span>
                        My wishlist
                    </Link>
                </div>

                <div class="space-y-1 pl-8 pt-4">
                    <Link to="#" class="relative hover:text-primary block font-medium capitalize transition">
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </span>
                        Logout
                    </Link>
                </div>

            </div>
        </div>
    </>
  )
}

export default SideBar