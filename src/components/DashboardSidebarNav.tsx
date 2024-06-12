"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const DashboardSidebarNav = () => {
  const appsSegmentsRef = useRef<NodeListOf<HTMLLIElement> | null>(null);

  useEffect(() => {
    const appsSegments = document.querySelectorAll(".apps-segment") as NodeListOf<HTMLLIElement>;

    appsSegmentsRef.current = appsSegments;

    const handleClick = (event: Event) => {
      const target = event.currentTarget as HTMLLIElement;
      const list = target.querySelector(".apps-segment-list") as HTMLDivElement;

      if (target.classList.contains("active")) {
        // Collapse
        list.style.maxHeight = `${list.scrollHeight}px`; // Set maxHeight to current height for transition
        setTimeout(() => {
          list.style.maxHeight = "0";
        }, 0); // Allow transition to apply
      } else {
        // Expand
        list.style.maxHeight = `${list.scrollHeight}px`;
      }
      target.classList.toggle("active");
    };

    appsSegments.forEach((apps) => {
      apps.addEventListener("click", handleClick);
    });

    // Clean up event listeners on unmount
    return () => {
      appsSegmentsRef.current?.forEach((apps) => {
        apps.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full hide-scrollbar px-3 py-4 overflow-y-auto bg-[#3131311f] dark:bg-[#faf8f91f] backdrop-blur-md">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={250} height={150} className="dark:invert mx-2 w-[70px] " />
          </Link>

          <ul className="space-y-2 font-medium ">
            {/* home */}
            <li className="mt-3 mb-1 mx-2 p-3 w-[215px]  bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:ps-5 transition-all delay-75 hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f]">
              <Link href="/" target="_blank" className="w-full  flex gap-2 items-center">
                <Image
                  src="/home.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
                Home
              </Link>
            </li>

            {/* dashboard */}
            <li className="mt-3 mb-1 mx-2 p-3 w-[215px]  bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:ps-5 transition-all delay-75 hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f]">
              <Link href="/admin/dashboard" className="w-full  flex gap-2 items-center">
                <Image
                  src="/dashboard.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
                Dashboard
              </Link>
            </li>

            <span className="text-sm mx-2  dark:text-gray-400 text-gray-700">Apps</span>

            {/* apps-segment ecommerce-segment */}
            <li className="my-3 mx-2 w-[215px] apps-segment ecommerce-segment ">
              <div className="p-3 bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f] flex justify-between items-center ">
                <span className="flex gap-2">
                  <Image
                    src="/ecommerce.svg"
                    alt="ecommerce"
                    width={20}
                    height={20}
                    sizes="50vw"
                    className="dark:invert"
                  />
                  Ecommerce
                </span>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
              </div>

              <ul className="apps-segment-list">
                {/* add products */}
                <li className="ms-3 mt-2 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/add-products" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image src="/add.svg" alt="add" width={20} height={20} sizes="50vw" className="dark:invert" />
                      Add Products
                    </span>
                  </Link>
                </li>

                {/* orders */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/order" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/orders.svg"
                        alt="orders"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert"
                      />
                      Orders
                    </span>
                    <span className="badge  badge-outline   p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* order details */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/order-details" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/order-details.svg"
                        alt="order-details"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Orders Details
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* products */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/products" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/products.svg"
                        alt="products"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Products
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* Category */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/category" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/category.svg"
                        alt="category"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Category
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* Review */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/review" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/reviews.svg"
                        alt="reviews"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Reviews
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* cart */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/cart" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image src="/cart.svg" alt="cart" width={20} height={20} sizes="50vw" className="dark:invert " />
                      Cart
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* cart  items */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/cart-items" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/cart-items.svg"
                        alt="cart-items"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Cart Items
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* coupon */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/coupon" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/coupon.svg"
                        alt="coupon"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Coupon
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* coupon usage */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/coupon-usage" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/coupon-usage.svg"
                        alt="coupon-usage"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Coupon Usage
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* checkout */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/checkout" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/checkout.svg"
                        alt="checkout"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Checkout
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* color family */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/color-family" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/color-family.svg"
                        alt="color family"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Color Family
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* products image */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/products-image" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/products_image.svg"
                        alt="products image"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Products Images
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* size */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/size" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image src="/size.svg" alt="size" width={20} height={20} sizes="50vw" className="dark:invert " />
                      Sizes
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* apps-segment blog-segment */}
            <li className="my-3 mx-2 w-[215px] apps-segment  blog-segment ">
              <div className="p-3 bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f] flex justify-between items-center ">
                <span className="flex gap-2">
                  <Image src="/blog.svg" alt="blog" width={20} height={20} sizes="50vw" className="dark:invert " />
                  Content
                </span>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
              </div>
              <ul className="apps-segment-list">
                {/*  blog */}
                <li className="ms-3 mt-2 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/blogs" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image src="/blog.svg" alt="blogs" width={20} height={20} sizes="50vw" className="dark:invert " />
                      Blogs
                    </span>
                    <span className="badge  badge-outline   p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* Create a blog */}
                <li className="ms-3  p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/create-blog" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image src="/add.svg" alt="add" width={20} height={20} sizes="50vw" className="dark:invert " />
                      Create a blog
                    </span>
                  </Link>
                </li>

                {/* delete a blog */}
                <li className="ms-3  p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/delete-blog" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/trash.svg"
                        alt="trash"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Delete a blog
                    </span>
                  </Link>
                </li>

                {/* Category */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/blog-category" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/category.svg"
                        alt="category"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Category
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>

                {/* Review */}
                <li className="ms-3 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/blog-comment" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/reviews.svg"
                        alt="reviews"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Comments
                    </span>
                    <span className="badge  badge-outline  p-1 w-6 h-6 flex justify-center items-center text-[10px] ">
                      99
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* apps-segment chart-segment */}
            <li className="my-3 mx-2 w-[215px] apps-segment  chart-segment ">
              <div className="p-3 bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f] flex justify-between items-center ">
                <span className="flex gap-2">
                  <Image src="/charts.svg" alt="charts" width={20} height={20} sizes="50vw" className="dark:invert " />
                  Charts
                </span>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
              </div>
              <ul className="apps-segment-list">
                {/*  blog */}
                <li className="ms-3 mt-2 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/charts" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/charts.svg"
                        alt="charts"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Charts
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* apps-segment auth-segment */}
            <li className="my-3 mx-2 w-[215px] apps-segment  auth-segment ">
              <div className="p-3 bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f] flex justify-between items-center ">
                <span className="flex gap-2">
                  <Image src="/auth.svg" alt="auth" width={20} height={20} sizes="50vw" className="dark:invert " />
                  Auth
                </span>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
              </div>
              <ul className="apps-segment-list">
                {/*  users */}
                <li className="ms-3 mt-2 p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/users" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/users.svg"
                        alt="users"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Users
                    </span>
                  </Link>
                </li>

                {/*  staff */}
                <li className="ms-3  p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/staff" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/staff.svg"
                        alt="staff"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      Staff
                    </span>
                  </Link>
                </li>

                {/*  user roll */}
                <li className="ms-3  p-3 border-s-2 border-gray-400 hover:ps-5 transition-all delay-75 hover:opacity-75">
                  <Link href="/admin/user-roll" className="w-full  flex justify-between items-center">
                    <span className="flex gap-2">
                      <Image
                        src="/user_roll.svg"
                        alt="user roll"
                        width={20}
                        height={20}
                        sizes="50vw"
                        className="dark:invert "
                      />
                      User rolls
                    </span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Todos */}
            <li className="my-3 mx-2 p-3 w-[215px]  bg-[#3131311f] dark:bg-[#faf8f91f] rounded-lg cursor-pointer hover:ps-5 transition-all delay-75 hover:bg-[#5858581f] dark:hover:bg-[#e7e7e71f]">
              <Link href="/admin/todos" className="w-full  flex gap-2 items-center">
                <Image
                  src="/todos.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                  sizes="50vw"
                  className="dark:invert arrow-icon"
                />
                Todos
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebarNav;
